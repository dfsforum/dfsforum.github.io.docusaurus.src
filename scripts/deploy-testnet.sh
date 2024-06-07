#!/usr/bin/env bash


rsync -C --exclude=.DS* --recursive -v -a build/ -e ssh root@165.232.86.61:/var/lib/docker/volumes/docusaurus_warp_docs/_data
