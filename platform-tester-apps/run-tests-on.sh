#!/bin/bash

tester_dir="$(dirname ${BASH_SOURCE[0]})"
data_dir="$tester_dir/../test-data_$(date +%Y-%m-%d_%H-%M)"
signup_url="3nweb.net/signup/"

if [ -z "$1" ] || [ "$1" == "phone-form-factor" ]
then
	platform="$tester_dir/../../node_modules/.bin/electron $tester_dir/../all/main.js"
else
	platform="$1"
fi

if [ "$1" == "phone-form-factor" ] || [ "$2" == "phone-form-factor" ]
then
	form_factor="phone"
fi

echo
echo "Starting tests on $platform with"
echo "    data directory: $data_dir"
echo "    signup url: $signup_url"

if [ "$form_factor" == "" ]
then
	echo "in default form-factor"
	echo
	$platform -- --data-dir="$data_dir" --allow-multi-instances --devtools --signup-url=$signup_url --test-stand="$tester_dir/test-setup.json"
else
	echo "in $form_factor form-factor"
	echo
	$platform -- --data-dir="$data_dir" --allow-multi-instances --devtools --signup-url=$signup_url --test-stand="$tester_dir/test-phone-setup.json" --form-factor="phone"
fi

test_result=$?

if [ $test_result != 0 ]
then
	echo
	echo Listing logs after test that returned code $test_result
	for log in $(ls $data_dir/util/logs)
	do
		echo
		echo " --- $log ---"
		echo
		cat $data_dir/util/logs/$log
	done
fi

rm -rf "$data_dir"

exit $test_result