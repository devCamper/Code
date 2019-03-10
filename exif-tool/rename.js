var fs = require("fs");

function readFiles(dirname) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      console.log("err");
      return;
    }
    let prevId = -1
    filenames.forEach(function(filename) {
      let id = filename.match(/\d+/)[0];
      if (id === "" || !(id >= 1 && id <= 80) || id === prevId) {
        fs.unlink(dirname + "/" + filename, err => {
          if (err) {
            console.log("failed to delete local image:" + err);
          } else {
            console.log("successfully deleted local image");
          }
        });
      }
      else {
        fs.rename(dirname + "/" + filename, dirname + "/" + id + '.jpg', err => {
          if (err) {
            console.log("failed to rename local image:" + err);
          } else {
            console.log("successfully renamed local image");
          }
        });
      }
      prevId = id
    });
  });
}

readFiles("photos");
