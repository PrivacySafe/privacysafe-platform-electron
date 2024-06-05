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

for app in startup.3nweb.computer tests.3nweb.computer start-by-cmd.3nweb.computer
do
	npm_ci_in $app || exit $?
done
