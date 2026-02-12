#!/bin/bash

function npm_ci_in {
	echo
	echo "---------------------------------------"
	echo "| setup in $1"
	echo "---------------------------------------"
	(cd ./$1
		npm ci
	) || return $?
}

for rust_napi_mod in cryptor-mod spawn-with-ipc-mod
do
	npm_ci_in native-modules/$rust_napi_mod || exit $?
done
