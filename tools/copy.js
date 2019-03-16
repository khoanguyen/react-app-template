(function () {
  const shelljs = require("shelljs");
  const env = (process.env.NODE_ENV || 'development').toLowerCase();

  shelljs.mkdir("dist");
  shelljs.mkdir("dist/public");
  shelljs.mkdir("dist/conf");

  // server
  shelljs.cp("-rf", "src/views", "dist/views");
  shelljs.cp("-rf", "src/public/js", "dist/public/js");
  shelljs.cp("-rf", "src/public/css", "dist/public/css");

  // static files
  shelljs.cp("src/public/*.*", "dist/public");

  // config files
  shelljs.cp('src/conf/*.' + env + '.*', 'dist/conf');
})();
