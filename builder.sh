#!/bin/sh
export JAVA_HOME='/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home'
export ANDROID_HOME=~/Library/Android/sdk
export ANDROID_SDK_ROOT=~/Libraryblu/Android/sdk
export ANDROID_AVD_HOME=~/.android/avd
echo "Build for all platforms"
cd web
ng build --prod
cd ..
cd mobile
rm -rf www/
cp -R ../web/dist/angular-playground/ www
cordova build
