#!/bin/bash

set -e

node_modules/.bin/tslint --project "tsconfig.json" -t stylish

exit 0
