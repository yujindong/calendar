const { series } = require('gulp');


function clean(cb) {
  // body omitted
  console.log("clean");
  cb();
}
function build(cb) {
  // body omitted
  console.log("build");
  cb();
}

exports.build = build;
exports.default = series(clean, build);