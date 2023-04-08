#!/bin/bash

runtime="$1"
platform="$2"
arch="$3"
packing_dir="$4"

BASE_RUNTIMES_URL='https://3nsoft.com/downloads/runtimes'

USAGE="Arguments must be
 1 - runtime with possible value(s) [ deno ]
 2 - platform with possible value(s) [ linux | mac | windows ]
 3 - arch with possible value(s) [ x64 | arm64 ]
 4 - path to existing 'packing' folder
"

if [ -z "$packing_dir" ]
then
	echo "$USAGE"
	exit 1
elif [ ! -d "$packing_dir" ]
then
	echo "Packing directory '$packing_dir' doesn't exist"
	exit 1
fi

url="$BASE_RUNTIMES_URL/$runtime/latest/$platform/$arch"

if [ "$5" == "ref-only" ]
then
	dst_dir="$packing_dir/runtimes/$platform/$arch"
	mkdir -p "$dst_dir"
	content_file="content.txt"
	curl -L "$url/$content_file" --output "$dst_dir/$content_file" || exit $?
	exit 1
fi

if [ "$runtime" == "deno" ]
then

	if [ "$platform" == "windows" ]
	then
		deno_bin="deno.exe"
	elif [ "$platform" == "linux" ] || [ "$platform" == "mac" ]
	then
		deno_bin="deno"
	else
		echo "$USAGE"
		exit 1
	fi
	url="$url/$deno_bin"

	# get file
	dst_dir="$packing_dir/runtimes/$platform/$arch"
	mkdir -p "$dst_dir"
	echo "Downloading $runtime for $platform on $arch cpu"
	curl -L "$url" --output "$dst_dir/$deno_bin" || exit $?
	# get content

else
	echo "Runtime '$runtime' is unknown"
	exit 1
fi
