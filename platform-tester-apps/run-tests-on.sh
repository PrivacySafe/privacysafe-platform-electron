#!/bin/bash

tester_dir="$(dirname ${BASH_SOURCE[0]})"
data_dir="$tester_dir/../test-data_$(date +%Y-%m-%d_%H-%M)"
signup_url="3nweb.net/signup/"
deno_bin="$(which deno)"

if [ -z "$deno_bin" ]
then
	echo "deno binary is not found. Chaeck 'which deno'."
	exit -2
fi

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

# common_test_args="--signup-url=$signup_url --data-dir=$data_dir --allow-multi-instances --devtools"
common_test_args="--signup-url=$signup_url --data-dir=$data_dir --allow-multi-instances --devtools --skip-fs-mounting --runtime-deno=$deno_bin"

if [ "$form_factor" == "" ]
then
	echo "in default form-factor"
	echo
	$platform -- $common_test_args --test-stand="$tester_dir/test-setup.json"
else
	echo "in $form_factor form-factor"
	echo
	$platform -- $common_test_args --test-stand="$tester_dir/test-phone-setup.json" --form-factor="phone"
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

sleep 2

rm -rf "$data_dir"

exit $test_result