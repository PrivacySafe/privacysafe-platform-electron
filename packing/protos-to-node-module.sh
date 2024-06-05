#!/bin/bash

protos_dir="protos"
dst_dir="ts-code/protos"
build_dir="build/all/protos"

pbjs="./node_modules/.bin/pbjs"
pbts="./node_modules/.bin/pbts"

if [ -d $dst_dir ]
then
	rm $dst_dir/*.proto.*s
else
	mkdir $dst_dir
fi

for file in $(ls $protos_dir)
do
	echo "Generating node js for $file"
	pb_file="$dst_dir/$file.js"
	pb_def="$dst_dir/$file.d.ts"
	$pbjs -o "$pb_file" -w commonjs -t static-module "$protos_dir/$file"
	$pbts -o "$pb_def" "$pb_file"
done

echo "Protobuf node modules generation done."

echo "Copying to $build_dir"
if [ -d $build_dir ]
then
	rm $build_dir/*.proto.js
else
	mkdir -p $build_dir
fi
cp $dst_dir/*.proto.js $build_dir/
