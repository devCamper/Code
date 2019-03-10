var fs = require("fs");

fs.readFile('reasons.csv', 'UTF-8', (err, data) => {
  if (err) throw err;
  // console.log(data);
  data = data.split("\r\n")
  for(let i = 1; i < data.length-1; i++) {
    // console.log(data[i])
    let row = data[i].split(';')
    let id = row[0]
    let title = row[1]
    let tags = row[2].split(' - ').join()
    let text = row[3]
    // console.log(id)
    console.log(tags)
  }
});