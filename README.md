
# 微模板引擎

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]


模板引擎 [https://github.com/jiamao/jm-template](https://github.com/jiamao/jm-template)的`gulp`插件。

可以用来做同构模板引擎。

## Install

```bash
$ npm i gulp-jmtemplate --save
```

## Usage


```js
//gulpfile.js
const gulp = require('gulp');
const path = require('path');
const concat = require('gulp-concat');
const template = require('../index.js');


gulp.task('default', ()=>{

  let stream = gulp.src('./templates/*.html', {
    cwd: __dirname
  });

  return stream.pipe(template.precompile({
      // 这里可以指定id规则，如果不指定会取文件名
    id: function(opt) {
        //opt.path
      console.log(opt);
    }
  })).pipe(concat('user.js'))
  .pipe(gulp.dest('templates'));
}); 
```


## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/gulp-jmtemplate.svg?style=flat-square
[npm-url]: https://npmjs.org/package/gulp-jmtemplate
[download-image]: https://img.shields.io/npm/dm/gulp-jmtemplate.svg?style=flat-square
[download-url]: https://npmjs.org/package/gulp-jmtemplate
