import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';

// Tarefa para minificar os arquivos CSS
gulp.task('minify-css', () => {
    // Certifique-se de ajustar o caminho para incluir os arquivos específicos, por exemplo, '*.css'
    return gulp.src('assets/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css'));
});

// Tarefa para otimizar as imagens
gulp.task('imagemin', () => {
    // Certifique-se de ajustar o caminho para incluir os arquivos específicos, por exemplo, '*.{png,jpg,jpeg,svg,gif}'
    return gulp.src('assets/img/*.{png,jpg,jpeg,svg,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Tarefa padrão que executa minify-css e imagemin em série
gulp.task('default', gulp.series('minify-css', 'imagemin'));
