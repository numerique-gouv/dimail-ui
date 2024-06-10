#!/bin/bash

etape=$1
dir="./apps/com.example/helloWorld/"
version=`dpkg-parsechangelog --show-field Version`
echo Maintenant $etape

if [ "$etape" != "build" ]; then
	exit 0
fi

if [ -f $dir/register.js ]; then
	mv $dir/register.js $dir/register.js.old
	sed -e "s/DINUM-VERNUM/$version/" < $dir/register.js.old > $dir/register.js
	rm $dir/register.js.old
else
	echo "File $dir/register.js not found. Failing."
	exit 1
fi
if [ -f $dir/manifest.json ]; then
	mv $dir/manifest.json $dir/manifest.json.old
	sed -e "s/DINUM-VERNUM/$version/" < $dir/manifest.json.old > $dir/manifest.json
	rm $dir/manifest.json.old
else
	echo "File $dir/manifest.json not found. Failing."
	exit 1
fi

