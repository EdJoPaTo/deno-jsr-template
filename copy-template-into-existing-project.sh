#!/usr/bin/env bash
set -eu

# Usage
# Go to the project you want to improve via this template
# cd ~/git/my-project
# Run this script from the working directory of that project
# ~/git/deno-node-module-template/copy-template-into-existing-project.sh

name=$(basename "$PWD")
denoname="${name//-/_}"
templatedir="$(dirname "$0")"

cp -r \
	"$templatedir/"{deno.jsonc,package.json,tsconfig.json,README.md,.editorconfig,.gitattributes,.github,.gitignore,.npmrc} \
	.
cp -r \
	"$templatedir/source/"README.md \
	./source/

echo "everything copied"

# Replace template name with folder name
# macOS: add '' after -i like this: sed -i '' "s/…
sed -i "s/deno-node-module-template/$name/g" package.json LICENSE ./*.md ./**/*.md .github/**/*.yml
sed -i "s/deno_node_module_template/$denoname/g" ./*.md ./**/*.md

git --no-pager status --short
