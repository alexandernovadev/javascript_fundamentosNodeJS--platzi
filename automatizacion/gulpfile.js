const gulp = require('gulp');
const server = require('gulp-server-livereload');


// Automatiza todo el sitio CSS/JS/ Imagenes
gulp.task('build', function(cb) {
    console.log('Construyendo el sitio');
    setTimeout(cb, 1200);
});

// Construir unservidor
gulp.task('serve', function(cb) {
    gulp.src('www') // Esta en la carpeta www
        .pipe(server({
            livereload: true,
            open: true,
        }));

        // Livereload -> Recarga automaticamente con los cambios
        // open: para que lo abra automaticamente
});


// Haga por defecto, el build y despues el serve
gulp.task('default', gulp.series('build', 'serve'));