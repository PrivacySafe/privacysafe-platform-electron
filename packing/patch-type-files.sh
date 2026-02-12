#!/bin/bash

echo "Reuse proto files from core lib"
cp -f node_modules/core-3nweb-client-lib/protos/* protos/

echo "Remove @types/fs-extra"
rm -rf node_modules/@types/fs-extra

echo "Copy fuse-bindings definitions, when module is present"
if [ -d node_modules/node-fuse-bindings ]
then
	cp -f node_modules/node-fuse-bindings/index.d.ts ts-code/shell/mounts/fuse-mount/fuse-bindings.d.ts
fi
