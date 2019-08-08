const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css

function style() {
    //source scss file
    return gulp.src('./scss/**/*.scss')
    //pass file to compiler
    .pipe(sass())
    //where to save compiled css
    .pipe(gulp.dest('./css'))

}