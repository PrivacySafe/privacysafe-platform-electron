#!/bin/bash

function npm_ci_in {
	echo
	echo "---------------------------------------"
	echo "| setup in $1"
	echo "---------------------------------------"
	(cd platform-tester-apps/$1
		npm ci
	) || return $?
}

for app in startup.3nweb.app tests.3nweb.app start-by-cmd.3nweb.app
do
	npm_ci_in $app || exit $?
done
