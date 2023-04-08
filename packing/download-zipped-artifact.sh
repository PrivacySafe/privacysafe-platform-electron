#!/bin/bash

url="$1"
out_folder="$2"

CONTENT_FILE="content.txt"

if [ -z "$url" ] || [ -z "$out_folder" ]
then
	echo "Usage:
	first argument should be url,
	second argument is a folder that will be created, and where unzipped files will be placed."
	exit 1
fi

if [ -d "$out_folder" ]
then
	echo "Folder $out_folder already exists"
	exit 1
else
	mkdir -p "$out_folder"
fi

download () {
	local url="$1"
	local download_file="$2"
	echo "Downloading file from $url into file $download_file"
	curl -L "$url" --output "$download_file" || return $?
}

unzip_archive() {
	local zip_file="$1"
	local dst_folder="$2"
	unzip -q "$zip_file" -d "$dst_folder" || return $?
	rm "$zip_file"
	echo "Unzipped $zip_file into $dst_folder"
}

write_readme() {
	local url="$1"
	local folder="$2"
	local millis_now="$3"
	local hashes_temp_file="${millis_now}.sha512"
	local init_dir="$(pwd)"
	cd "$folder"
	sha512sum * >> $hashes_temp_file
	local sha_res="$?"
	if [ $sha_res != 0 ] ; then return $sha_res ; fi
	echo "Content of this folder comes from zip at $url" > $CONTENT_FILE || return $?
	echo "Sha512 hashes are" >> $CONTENT_FILE
	cat $hashes_temp_file >> $CONTENT_FILE || return $?
	rm $hashes_temp_file
	echo "Wrote content file $CONTENT_FILE in $folder"
	cd "$init_dir"
}

millis_now="$(date +%s%3N)"
temp_file="downloaded-artifact.${millis_now}.zip"

download "$url" "$temp_file" || exit $?
unzip_archive "$temp_file" "$out_folder" || exit $?
write_readme "$url" "$out_folder" $millis_now || exit $?
