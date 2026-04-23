#!/bin/bash

echo "Reuse proto files from core lib"
cp -f node_modules/core-3nweb-client-lib/protos/* protos/

echo "Remove @types/fs-extra"
rm -rf node_modules/@types/fs-extra
