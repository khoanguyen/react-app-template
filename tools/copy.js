const shelljs = require('shelljs');

shelljs.cp('compile/*.js', 'dist/');

shelljs.mkdir('dist/public');
shelljs.mkdir('dist/public/js');
shelljs.mkdir('dist/public/css');

// css
shelljs.cp('compile/public/css/*', 'dist/public/css');

// view
shelljs.mkdir('dist/views');
shelljs.cp('src/views/*.*', 'dist/views');

// static files
shelljs.cp('src/public/*.*', 'dist/public');
