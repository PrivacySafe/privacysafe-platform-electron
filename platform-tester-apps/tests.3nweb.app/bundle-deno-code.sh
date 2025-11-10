#!/bin/bash

bundle() {
	local src="$1"
	deno eval --no-lock "
	import { bundle } from 'https://deno.land/x/emit/mod.ts';
	console.log(
		(await bundle('$src')).code
	);
	" || return $?
}

bundle src-deno/service-instance-for-one-connection.ts > app/service-instance-for-one-connection.js || exit $?
bundle src-deno/long-living-service-instance.ts > app/long-living-service-instance.js || exit $?

