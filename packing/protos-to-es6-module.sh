#!/bin/bash

protos_dir="protos"
dst_dir="platform-ipc-deno/protos"

pbjs="./node_modules/.bin/pbjs"
pbts="./node_modules/.bin/pbts"

correct_pb_import() {
	node -e "
	let pbJS = fs.readFileSync('$1', { encoding: 'utf8' });
	const oldStr = 'import * as \$protobuf from';
	const newStr = 'import \$protobuf from';
	pbJS = pbJS.replace(oldStr, newStr);
	fs.writeFileSync('$1', pbJS, { encoding: 'utf8' });
	"
}

if [ -d $dst_dir ]
then
	rm $dst_dir/*.proto.*
else
	mkdir -p $dst_dir
fi

for file in $(ls $protos_dir)
do
	echo "Generating es6 js for $file"
	pb_file="$dst_dir/$file.js"
	pb_def="$dst_dir/$file.d.ts"
	$pbjs -o "$pb_file" -w es6 --es6 -t static-module --dependency ./minimal-protobuf.js "$protos_dir/$file"
	correct_pb_import "$pb_file"
	$pbts -o "$pb_def" "$pb_file"
done

echo "Protobuf es6 mudules generation done."
