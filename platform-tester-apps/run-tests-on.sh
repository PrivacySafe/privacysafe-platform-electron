#!/bin/bash

tester_dir="$(dirname ${BASH_SOURCE[0]})"
data_dir="$tester_dir/../test-data_$(date +%Y-%m-%d_%H-%M)"
signup_url="3nweb.net/signup/"
platform="$1"

if [ -z "$platform" ]
then
	platform="$tester_dir/../../node_modules/.bin/electron $tester_dir/../all/main.js"
fi

echo
echo "Starting tests on $platform with"
echo "    data directory: $data_dir"
echo "    signup url: $signup_url"
echo

$platform -- --data-dir="$data_dir" --allow-multi-instances --devtools --signup-url=$signup_url --test-stand="$tester_dir/test-setup.json"

test_result=$?

rm -rf "$data_dir"

exit $test_result