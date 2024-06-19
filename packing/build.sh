#!/bin/bash

arch="$1"
shift 1
variants="$@"

get_platform() {
	local platform="$(node -e 'console.log(os.platform())')"
	case $platform in 
		"darwin")
			echo "mac"
			;;
		"freebsd")
			echo "linux"
			;;
		"win32")
			echo "windows"
			;;
		*)
			echo $platform
			;;
	esac
}

copy_code() {
	src_dir="$1"
	shift 1
	dst_dir="$1"
	shift 1
	except="$@"
	mkdir -p "$dst_dir" || return $?
	echo "Copying code to $dst_dir"
	cp -r "$src_dir/"* "$dst_dir/" || return $?
	if [ -n "$except" ]
	then
		echo "except $except"
		for d in $except
		do
			rm -rf "$dst_dir/$d"
		done
	fi
	return 0
}

prep_package_json() {
	src_package="$1"
	dst_dir="$2"
	main="$3"
	node -e "
		const packFieldsToCopy = [
			'version', 'description', 'author', 'license', 'dependencies'
		];
		
		const originalPack = JSON.parse(fs.readFileSync(
			'$src_package', { encoding: 'utf8' }
		));
		const appConf = require('js-yaml').load(fs.readFileSync(
			'packing/app.yml', { encoding: 'utf8' }
		));
		const newPack = {};
		for (const f of packFieldsToCopy) {
			newPack[f] = originalPack[f];
		}
		newPack.main = '$main';
		newPack.name = appConf.executableName;
		fs.writeFileSync(
			'$dst_dir/package.json',
			JSON.stringify(newPack, null, '  '),
			{ encoding: 'utf8', flag: 'wx' }
		);
	" || return $?
	echo "Placed package.json into $dst_dir"
}

prep_package_lock_json() {
	src_pack_lock="$1"
	dst_dir="$2"
	node -e "
		const originalLock = JSON.parse(fs.readFileSync(
			'$src_pack_lock', { encoding: 'utf8' }));
		const newLock = {};
		for (const field of Object.keys(originalLock)) {
			newLock[field] = (field === 'dependencies') ? {} : originalLock[field];
		}
		if (originalLock.dependencies) {
			for (const packName of Object.keys(originalLock.dependencies)) {
				const pack = originalLock.dependencies[packName];
				if (pack.dev || packName.startsWith('@types/')) { continue; }
				newLock.dependencies[packName] = pack;
			}
		}
		fs.writeFileSync(
			'$dst_dir/package-lock.json',
			JSON.stringify(newLock, null, '  '),
			{ encoding: 'utf8', flag: 'wx' }
		);
	" || return $?
	echo "Placed package-lock.json into $dst_dir"
}

src_dir="build/all"
pack_file="package.json"
lock_file="package-lock.json"

app_dir="build/app"
if [ -d $app_dir ]
then
	rm -rf $app_dir
fi
copy_code $src_dir $app_dir || exit $?
prep_package_json $pack_file $app_dir "main.js" || exit $?
prep_package_lock_json $lock_file $app_dir || exit $?

echo "Copying configuration.json and asset files from packing/ into $app_dir/"
cp_list="icons runtimes bundled-apps configuration.json"
(cd $app_dir || exit $?
	rm -rf $cp_list || exit $?
) || exit $?
(cd packing || exit $?
	cp -rf $cp_list ../$app_dir/ || exit $?
) || exit $?
build_conf="packing/app.yml"
pack_info_file="packing-info.json"

write_pack_info_file() {
	echo "Adding $pack_info_file into code folder for updater to use"
	(cd $app_dir
		echo "{
	\"arch\": \"$1\",
	\"variant\": \"$2\"
}" > $pack_info_file
	) || return $?
}

build_variant() {
	if [ -z "$1" ]
	then
		local arch=""
		local variant="--dir"
		echo "Building with electron-builder a directory variant for current architecture ..."
		rm $app_dir/$pack_info_file 2> /dev/null
	else
		local arch="--$1"
		if [ -z "$2" ]
		then
			local variant="--dir"
			echo "Building with electron-builder a directory variant for $1 architecture ..."
			rm $app_dir/$pack_info_file 2> /dev/null
		else
			local variant="--$(get_platform) $2"
			echo "Building with electron-builder a $2 variant for $1 architecture ..."
			write_pack_info_file $1 $2
		fi
	fi
	node_modules/.bin/electron-builder --publish never --config $build_conf $arch $variant || return $?
}

if [ -z "$variants" ]
then
	build_variant "$arch" || exit $?
else
	for variant in $variants
	do
		build_variant "$arch" $variant || exit $?
	done
fi
