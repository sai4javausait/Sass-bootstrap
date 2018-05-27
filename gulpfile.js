var gulp = require('gulp');
var livereload = require('gulp-livereload');
var minifyCss = require('gulp-minify-css');
var plumber = require('gulp-plumber'); // fixes errors
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps') // Renders sources properly on to the debugger
var scss = require('gulp-sass');
// File paths

var CSS_PATH = 'Css/**/*.css';
var SASS_PATH = 'Scss/**/*.scss';


//Scss Styles
gulp.task('styles', function() {
    
    console.log("Starting Style task");
    return gulp.src('public/scss/styles.scss')
    .pipe(plumber(function(err){
        console.log("There is something in the Styles "+err)
        this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(scss({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(CSS_PATH))
    .pipe(livereload());

});


//Watch

gulp.task('watch', function() {
    console.log("Starting watch task");
    require('./server.js');
    livereload.listen();
    gulp.watch(SASS_PATH,['styles']);
});

//default

gulp.task('default', ['styles', 'watch']);



