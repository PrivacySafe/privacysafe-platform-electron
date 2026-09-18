#!/bin/bash

tester_dir="$(dirname ${BASH_SOURCE[0]})"
shared_dir="shared-test-utils"

cd $tester_dir

copy_shared_if_linked() {
	local app="$1"
	local shared_src="$shared_dir/$2"
	local app_dst="$app/$3"
	if rm -r $app_dst
	then
		echo "Copying $shared_src code in place of $app_dst"
		cp -r $shared_src $app_dst 
	fi
}

for app in tests.3nweb.app startup.3nweb.app start-by-cmd.3nweb.app
do
	copy_shared_if_linked $app jasmine-3.9.0 public/jasmine
	copy_shared_if_linked $app test-page-utils.ts src/test-page-utils.ts
done
