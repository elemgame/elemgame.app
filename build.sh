#!/usr/bin/env bash

set -e

npm run build-static
mv docs/_next/static docs/static
rm docs/index.txt
echo "elemgame.app" | tee docs/CNAME

sed -i 's/\/_next//g' docs/index.html
sed -i 's/\/_next//g' docs/404.html
