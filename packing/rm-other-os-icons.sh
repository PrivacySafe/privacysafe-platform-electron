#!/bin/bash

os="$1"

cd packing/icons || exit $?

for p in $(ls)
do
	if [ "$p" != "$os" ]
	then
		rm -rf $p
	fi
done
