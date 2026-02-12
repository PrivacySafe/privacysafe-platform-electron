#!/bin/bash

work="$1"
cross_compile_target="$2"

if [ -z "$work" ]
then
	echo "Provide first work argument. Possible values are
	'all'    - compiles all things in required order, and native compilation targeting current platform,
	'protos'    - compiles protobuf definition files to node/commojs modules, copying files for TypeScript use,
	'platform-ts'    - compiles TypeScript code of a platform,
	'deno-runtime-binary'    - compiles binary with embedded Deno core,
	'native-modules'    - compiles modules written in Rust (with napi-rs),
	'deno-preload'    - compiles and packs preload for Deno runtime into a single js file,
	'platform'    - compiles all needed for platform,
	'tests'    - compiles test apps.
	Second argument is a cross-compile target, for compile tasks.
	"
	exit -1
fi

proto_file_to_node() {

	local protos_dir="$1"
	local dst_dir="$2"
	local file=$3

	local pb_file="$dst_dir/$file.js"
	local pb_def="$dst_dir/$file.d.ts"

	local pbjs="./node_modules/.bin/pbjs"
	local pbts="./node_modules/.bin/pbts"

	echo "Generating node js for $file"
	$pbjs -o "$pb_file" -w commonjs -t static-module "$protos_dir/$file" || return $?
	$pbts -o "$pb_def" "$pb_file" || return $?
}

rm_and_mk_dir() {
	local dir="$1"
	if [ -d $dir ]
	then
		rm -r "$dir" || return $?
	fi
	mkdir -p "$dir" || return $?
}

compile_protos_to_node() {

	local protos_dir="protos"
	local code_dir="ts-code/protos"
	rm_and_mk_dir $code_dir || return $?
	local build_dir="build/all/protos"
	rm_and_mk_dir $build_dir || return $?

	local pbjs="./node_modules/.bin/pbjs"
	local pbts="./node_modules/.bin/pbts"

	echo "	=========================================================="
	echo "	|   Transpiling protobuf files from $protos_dir into JS+TS"
	echo "	=========================================================="
	for file in $(ls "$protos_dir")
	do
		proto_file_to_node "$protos_dir" "$code_dir" $file || return $?
	done
	echo "Protobuf node modules generation done."

	echo "Copying to $build_dir"
	cp $code_dir/*.proto.js $build_dir/ || return $?
}

compile_platform_ts() {

	echo "	============================================"
	echo "	|   Compiling platform's TypeScript code   |"
	echo "	============================================"
	echo "Compiling typescript ..."
	tsc -p ts-code || exit $?

	echo "Packing preloads for web gui runtime ..."
	local build_dir="build/all"
	(cd $build_dir/runtime-web-gui || exit $?
		for fname in 'preload-ipc' 'setup-w3n-for-startup' 'setup-w3n'
		do
			browserify ${fname}.js -u electron -o ${fname}.bundle.js  || exit $?
		done
	) || return $?

	echo "Copying assets ..."
	cp -rf packing/icons ts-code/configuration.json $build_dir/ || return $?
	if [ -d packing/bundled-apps ]
	then
		cp -rf packing/bundled-apps $build_dir/ || return $?
	fi
	if [ -d packing/bundled-app-packs ]
	then
		cp -rf packing/bundled-app-packs $build_dir/ || return $?
	fi

}

compile_deno_runtime() {
	echo "	=========================================="
	echo "	|   Compiling binary with deno runtime   |"
	echo "	=========================================="
	local src_dir="native-deno-runtime"
	(cd $src_dir || exit $?
		(cd js  || exit $?
			deno2 bundle --output w3n.js w3n.ts || exit $?
		) || exit $?
		cargo build --release
	) || return $?
	rt_dir="build/all/"

	# TODO

}

compile_deno_preload() {
	echo "	======================================"
	echo "	|   Compiling deno runtime preload   |"
	echo "	======================================"
	(cd build/all/runtime-deno || exit $?
		browserify preload.js -o preload.bundle.js
	) || return $?
}

build_n_copy_native_module() {
	local src_dir="native-modules"
	local code_dir="ts-code/native-modules"
	local build_dir="build/all/native-modules"

	local mod=$1
	local bin_name=$2
	local mod_dir="$src_dir/$mod"
	echo "	===================================================="
	echo "	|   Compiling native module $mod"
	echo "	===================================================="
	(cd $mod_dir || exit $?
		if [ -n "$cross_compile_target" ]
		then
			echo "Cross-compiling to $cross_compile_target target."
			npm run build -- --cross-compile --target $cross_compile_target || exit $?
		else
			npm run build || exit $?
		fi
	) || return $?
	local mod_code_dir="$code_dir/$mod"
	rm_and_mk_dir $mod_code_dir
	local out_dir="$build_dir/$mod"
	rm_and_mk_dir $out_dir
	cp $mod_dir/index.* $mod_code_dir/ || return $?
	cp $mod_dir/index.* $out_dir/ || return $?
	mv $mod_dir/$bin_name.* $out_dir/ || return $?
	echo "$mod module output directory $out_dir"
	ls -lh $out_dir || return $?
}

compile_native_modules() {
	# for mod_dir_and_name in "cryptor-mod napi-cryptor" "spawn-with-ipc-mod napi-spawn-with-ipc"
	for mod_dir_and_name in "cryptor-mod napi-cryptor"
	do
		build_n_copy_native_module $mod_dir_and_name || return $?
	done
	echo "Skipping napi-spawn-with-ipc, as some API may have changed."
}

build_n_copy_app() {
	local app=$1
	local src_dir=$2
	local build_dir=$3
	local app_dir="$src_dir/$app"
	echo "	===================================="
	echo "	|   Building test app $app"
	echo "	===================================="
	(cd $app_dir || exit $?
		npm run build
	) || return $?
	local out_dir="$build_dir/$app"
	if [ -d "$out_dir" ]
	then
		rm -rf $out_dir
	fi
	mkdir -p $out_dir || return $?
	mv $app_dir/app $out_dir/ || return $?
	cp $app_dir/manifest.json $out_dir/ || return $?
}

compile_tests() {
	local src_dir="platform-tester-apps"
	local build_dir="build/test-apps"
	for app in startup tests start-by-cmd
	do
		build_n_copy_app ${app}.3nweb.app $src_dir $build_dir || return $?
	done
	cp -f $src_dir/test-setup.json $src_dir/run-tests-on.sh $build_dir/ || return $?
}

compile_all_for_platform() {
	compile_protos_to_node || return $?
	echo
	compile_native_modules || return $?
	echo
	compile_platform_ts || return $?
	echo
	compile_deno_preload || return $?
	echo
	echo "Skipping compilation of deno runtime, as it isn't ready, yet."
	# compile_deno_runtime || return $?
	echo
}


if [ "$work" == "all" ]
then

	compile_all_for_platform || exit $?
	compile_tests || exit $?

elif [ "$work" == "platform" ]
then

	compile_all_for_platform
	exit $?

elif [ "$work" == "protos" ]
then

	compile_protos_to_node
	exit $?

elif [ "$work" == "platform-ts" ]
then

	compile_platform_ts
	exit $?

elif [ "$work" == "deno-runtime-binary" ]
then

	compile_deno_runtime
	exit $?

elif [ "$work" == "native-modules" ]
then

	compile_native_modules
	exit $?

elif [ "$work" == "deno-preload" ]
then

	compile_deno_preload
	exit $?

elif [ "$work" == "tests" ]
then

	compile_tests
	exit $?
	
else
	echo "Proper work argument is not given"
	exit 1
fi