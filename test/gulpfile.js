const gulp = require('gulp');
const path = require('path');
const concat = require('gulp-concat');
const template = require('../index.js');


gulp.task('default', ()=>{

  let stream = gulp.src('./templates/*.html', {
    cwd: __dirname
  });

  return stream.pipe(template.precompile({
    id: function(opt) {
      console.log(opt);
    }
  })).pipe(concat('user.js'))
  .pipe(gulp.dest('templates'));
});  