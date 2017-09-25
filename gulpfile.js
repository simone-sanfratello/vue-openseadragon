'use strict'

const _package = require('./package.json')

const gulp = require('gulp')
const path = require('path')
const fs = require('fs-extra')
const through = require('through2')
const jsMinify = require('uglify-es').minify
const rename = require('gulp-rename')

const version = `/* v. ${_package.version} */\n`
const dst = 'dist'

gulp.task('build', () => {
  gulp.src('src/vue-openseadragon.js')
  .pipe(component())
  .pipe(lib())
  .pipe(rename('vue-openseadragon.min.js'))
  .pipe(gulp.dest(path.join(dst)))
})

const lib = function () {
  return through.obj(function (item, encode, next) {
    const _this = this

    return fs.readFile('node_modules/openseadragon/build/openseadragon/openseadragon.min.js', 'utf8')
      .then((lib) => {
        item.contents = Buffer.concat([item.contents, Buffer.from(lib)])
      })
      .then(() => {
        next(null, item)
      })
      .catch((err) => {
        if (err.message) {
          _this.emit('error', new Error(err.message))
        }
        next()
      })
  })
}

const component = function () {
  return through.obj(function (item, encode, next) {
    const _this = this

    return fs.readFile(item.path, 'utf8')
      .then((script) => {
        item.contents = Buffer.from(version + jsMinify(script).code)
      })
      .then(() => {
        next(null, item)
      })
      .catch((err) => {
        if (err.message) {
          _this.emit('error', new Error(err.message))
        }
        next()
      })
  })
}
