#!/usr/bin/env bash

# deploy docusaurus /build dir to test/staging/prod server via ssh
rsync -C --exclude=.DS* --recursive -v -a build/ -e ssh $@
