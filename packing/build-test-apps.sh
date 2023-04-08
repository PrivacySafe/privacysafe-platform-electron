#!/bin/bash
proj_dir="$(dirname ${BASH_SOURCE[0]})/.."
src_dir="$proj_dir/platform-tester-apps"
build_dir="$proj_dir/build/test-apps"

build_n_copy_app() {
	local app=$1
	local app_dir="$src_dir/$app"
	local init_dir="$(pwd)"
	echo "	===================================="
	echo "	|   Building test app $app"
	echo "	===================================="
	cd "$app_dir" || return $?
	npm run build || return $?
	cd "$init_dir"
	local out_dir="$build_dir/$app"
	if [ -d "$out_dir" ]
	then
		rm -rf "$out_dir"
	fi
	mkdir -p "$out_dir" || return $?
	mv "$app_dir/app" "$out_dir/" || return $?
	cp "$app_dir/manifest.json" "$out_dir/" || return $?
}

for app in startup.3nweb.computer tests.3nweb.computer
do
	build_n_copy_app $app || exit $?
done

for file in test-setup.json run-tests-on.sh
do
	cp -f "$src_dir/$file" "$build_dir/" || exit $?
done
