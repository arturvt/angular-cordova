#!/bin/sh

echo "Build for all platforms"
cd web
ng build --prod
cd ..
cd mobile
rm -rf www/
cp -R ../web/dist/angular-playground/ www
cordova build
