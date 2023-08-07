#!/bin/bash

platform=$1
arch=$2
prepacked_dir="$3"
if [ -z "$platform" ]
then
	echo "First argument, platform name, is not given"
	exit 1
fi
if [ -z "$arch" ]
then
	echo "Second argument, architecture, is not given"
	exit 1
fi
if [ -z "$prepacked_dir" ]
then
	echo "Third argument, name for directory with prepacked things, is not given"
	exit 1
fi

bash packing/prep-bundle-for-build.sh || exit $?

build_conf="packing/app.yml"

echo
echo "	===================================="
echo "	|   Packing for $platform on $arch"
echo "	===================================="
echo
node_modules/.bin/electron-builder --publish never --config $build_conf --dir --$arch || exit $?
if [ "$platform" == "mac" ]
then
	if [ "$arch" == "arm64" ]
	then
		mv dist/app/mac-arm64 $prepacked_dir || exit $?
	else
		mv dist/app/mac $prepacked_dir || exit $?
	fi
elif [ "$platform" == "linux" ]
then
	if [ "$arch" == "arm64" ]
	then
		mv dist/app/linux-arm64-unpacked $prepacked_dir || exit $?
	else
		mv dist/app/linux-unpacked $prepacked_dir || exit $?
	fi
elif [ "$platform" == "windows" ]
then
	mv dist/app/win-unpacked $prepacked_dir || exit $?
else
	echo "Need to specify output directory for $platform"
	exit 1
fi

