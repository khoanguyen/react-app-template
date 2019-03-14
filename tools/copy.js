(function() {
  const shelljs = require("shelljs");

  shelljs.mkdir("dist");
  shelljs.mkdir("dist/public");

  // server
  shelljs.cp("-rf", "src/views", "dist/views");
  shelljs.cp("-rf", "src/public/js", "dist/public/js");
  shelljs.cp("-rf", "src/public/css", "dist/public/css");

  // static files
  shelljs.cp("src/public/*.*", "dist/public");
})();
