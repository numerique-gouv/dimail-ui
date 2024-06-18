

build:
	version=`dpkg-parsechangelog --show-field Version | sed -e 's/-.*$$//'`; \
	package=`dpkg-parsechangelog --show-field Source`; \
	sed -e "s/DINUM-PACKNAME/$$package/" -e "s/DINUM-VERNUM/$$version/" < package.json.real > package.json
	grunt dpkg-buildpackage --include-dependencies
