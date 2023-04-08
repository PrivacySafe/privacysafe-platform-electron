#!/bin/bash

apps_dir="$1"
result_file="$2"
temp_file="test-apps.zip"
init_dir=$(pwd)

if [ ! -d "$apps_dir" ]
then
	echo "Folder with definitions $apps_dir is not found"
	exit 1
fi

if [ -z "$result_file" ]
then
	echo "Missing second argument with path for zipped folder with definitions"
	exit 1
fi

cd "$apps_dir"
zip -rq ../$temp_file * -x test-user-creds.json || exit $?
cd "$init_dir"

mv -f "$apps_dir/../$temp_file" $result_file || exit $?
