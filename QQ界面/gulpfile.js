/**
 * Created by 粟少衡 on 2017/3/1.
 */
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

//默认执行任务
gulp.task('default', function () {
   // 到src目录下app.css,为其补全浏览器兼容的css
    return gulp.src('./qq.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        //输出到dist文件夹
        .pipe(gulp.dest('dist'));
});
