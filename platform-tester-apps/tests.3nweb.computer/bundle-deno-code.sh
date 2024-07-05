#!/bin/bash

bundle() {
	local src="$1"
	deno eval "
	import { bundle } from 'https://deno.land/x/emit/mod.ts';
	console.log(
		(await bundle('$src')).code
	);
	" || return $?
}

bundle src-deno/service-in-deno.ts > app/service-in-deno.js || exit $?
bundle src-deno/long-service-in-deno.ts > app/long-service-in-deno.js || exit $?

