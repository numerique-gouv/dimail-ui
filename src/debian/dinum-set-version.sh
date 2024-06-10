#!/bin/bash

etape=$1
version=`dpkg-parsechangelog --show-field Version`

if [ "$etape" != "build" ]; then
	echo $etape is not for me, will play later
	exit 0
fi

echo During $etape, inject the version number in various places in each plugin

for dir in ./apps/fr.dinum/*; do
	for file in register.js manifest.json; do
		if [ -f $dir/$file ]; then
			mv $dir/$file $dir/$file.old
			sed -e "s/DINUM-VERNUM/$version/" < $dir/$file.old > $dir/$file
			rm $dir/$file.old
		else
			echo "File $dir/$file not found. Failing."
			exit 1
		fi
	done
done
