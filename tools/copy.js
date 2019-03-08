const shelljs = require('shelljs');

shelljs.cp('app/public/*', 'build/public/');

//shelljs.cp('app/public/js/*.js', 'build/public/js/');
shelljs.mkdir('build/public/js/jquery');
shelljs.cp('app/public/js/jquery/*.js', 'build/public/js/jquery/');

shelljs.mkdir('build/public/js/css/');
shelljs.cp('app/public/css/*', 'build/public/css/');