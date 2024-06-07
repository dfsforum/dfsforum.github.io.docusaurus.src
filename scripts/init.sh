#!/usr/bin/env bash

# soft link this file to docusaurus root dir
# copy files to new project directory $@
cp -r .gitignore .envrc default.nix flake.nix scripts/ $@
