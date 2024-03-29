#!/bin/bash

# Define nvm
NVM_DIR="/data-new/nvm"
source /data-new/nvm/nvm.sh

# Application works with Node v14 for now
nvm install 14
nvm use 14
npm install --omit=dev --legacy-peer-deps

# Delete old build
rm -rf build

# To consider warnings as warnings
export CI=false

# Rebuild node-sass to handle node version conflicts
npm rebuild node-sass

# Create prod build
npm run build-staging



