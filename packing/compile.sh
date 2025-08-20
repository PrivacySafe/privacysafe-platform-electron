#!/bin/bash

work="$1"

if [ "$work" == "platform-ts" ]
then

	echo "Compiling typescript ..."
	tsc -p ts-code || exit $?

	echo "Packing preloads for web gui runtime ..."
	(cd build/all/runtime-web-gui || exit $?
		for fname in 'preload-ipc' 'setup-w3n-for-startup' 'setup-w3n'
		do
			browserify ${fname}.js -u electron -o ${fname}.bundle.js  || exit $?
		done
	) || exit $?

	echo "Copying assets ..."
	cp -rf packing/icons ts-code/configuration.json build/all/ || exit $?
	if [ -d packing/bundled-apps ]
	then
		cp -rf packing/bundled-apps build/all/ || exit $?
	fi
	if [ -d packing/bundled-app-packs ]
	then
		cp -rf packing/bundled-app-packs build/all/ || exit $?
	fi

elif [ "$work" == "deno-runtime-preload" ]
then

	(cd build/all/runtime-deno || exit $?
		browserify preload.js -o preload.bundle.js || exit $?
	) || exit $?

elif [ "$work" == "tests" ]
then

	src_dir="platform-tester-apps"
	build_dir="build/test-apps"

	build_n_copy_app() {
		local app=$1
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

	for app in startup tests start-by-cmd
	do
		build_n_copy_app ${app}.3nweb.computer || exit $?
	done

	cp -f $src_dir/test-setup.json $src_dir/test-phone-setup.json $src_dir/run-tests-on.sh $build_dir/ || exit $?
	
else
	echo "Proper work argument is not given"
	exit 1
fi