apply-version:
	version=`dpkg-parsechangelog --show-field Version | sed -e 's/-.*$$//'`; \
    package=`dpkg-parsechangelog --show-field Source`; \
    sed -e "s/DINUM-PACKNAME/$$package/" -e "s/DINUM-VERNUM/$$version/" < package.json.real > package.json

build: apply-version
	npm install
	grunt dpkg-buildpackage --include-dependencies
