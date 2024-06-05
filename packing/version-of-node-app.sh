#!/bin/bash

app_dir="$1"
node -e "
	const m = fs.readFileSync('$app_dir/package.json', { encoding: 'utf8' });
	const v = JSON.parse(m).version.trim();
	if (!v) { throw new Error('version field is not a string'); }
	console.log(v);
" || exit $?
