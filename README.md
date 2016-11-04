# Toolbox Bodensee e.V. Infobeamer

This is the source code of our info monitor that is mounted in our club house. Feel free to fork this repository to add
your own projects. Place a pull-request when you think you are done and please, add new, cool features!

## How to Build

Clone gh-pages, change into the new directory.

### Install Build Environment

```bash
sudo apt install npm
sudo apt install nodejs-legacy
npm init
npm install bower
./node_modules/bower/bin/bower install
npm install gulp
npm install del
npm install merge-stream
npm install gulp-ng-annotate
npm install concurrent-transform
npm install run-sequence
```
### Build

```bash
./node_modules/gulp/bin/gulp.js 
```
