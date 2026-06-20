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

packing_info_file="packing-info.json"

if [ -z "$1" ] || [ "$1" == "phone-form-factor" ]
then
	platform="$tester_dir/../../node_modules/.bin/electron $tester_dir/../all/main.js"
	packing_info_path="$tester_dir/../all/$packing_info_file"
	os_platform="$(node -e "console.log(os.platform())" )"
	if [ "$os_platform" == "linux" ]
	then
		echo '{ "arch": "x64", "variant": "AppImage" }' > "$packing_info_path" || exit $?
	elif [ "$os_platform" == "darwin" ]
	then
		echo '{ "arch": "arm64", "variant": "dmg" }' > "$packing_info_path" || exit $?
	elif [ "$os_platform" == "win32" ]
	then
		echo '{ "arch": "x64", "variant": "nsis" }' > "$packing_info_path" || exit $?
	else
		os_platform=""
	fi
else
	platform="$1"
fi

if [ "$1" == "phone-form-factor" ] || [ "$2" == "phone-form-factor" ]
then
	form_factor="phone"
	packing_info_path=""
fi

echo
echo "Starting tests on $platform with"
echo "    data directory: $data_dir"
echo "    signup url: $signup_url"
if [ -n "$packing_info_path" ]
then
	echo "    mocked file $packing_info_file"
else
	echo "    but without mocked file $packing_info_file -> related test is marked pending"
fi

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

if [ -n "$packing_info_path" ]
then
	echo "Removing mocked $packing_info_file"
	rm $packing_info_path
fi

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