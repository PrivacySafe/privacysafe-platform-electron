#!/bin/bash

if [ "$1" == "ref-only" ]
then
	packing_dir="$2"
	platform="$3"
	arch="$4"
	shift 4
	runtimes="$@"
	ref_flag="ref-only"
else
	packing_dir="$1"
	platform="$2"
	arch="$3"
	shift 3
	runtimes="$@"
fi

for runtime in $runtimes
do
	bash "$(dirname "${BASH_SOURCE[0]}")/get-bundled-runtime.sh" $runtime $platform $arch "$packing_dir" $ref_flag || exit $?
done
