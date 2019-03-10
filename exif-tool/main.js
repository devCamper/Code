var fs = require("fs");

const exiftool = require('node-exiftool')
const exiftoolBin = require('dist-exiftool')
const ep = new exiftool.ExiftoolProcess(exiftoolBin)

fs.readFile('reasons.csv', 'UTF-8', (err, data) => {
  if (err) throw err;
  data = data.split("\r\n")
  for(let i = 1; i < data.length-1; i++) {
    let row = data[i].split(';')
    let id = row[0]
    let title = row[1]
    let tags = row[2].split(' - ')
    let text = row[3]

    const metadata = {
      all: '', // remove all metadata at first
      'ObjectName': '500 Gründe',
      'Headline': `Grund ${id}: ${title}`,
      'Caption-Abstract': text,
      'Keywords+': tags,
  }
   
  const file = `photos/${id}.jpg`
   
  ep
    .open()
    // use codedcharacterset
    .then(() => ep.writeMetadata(file, metadata, ['codedcharacterset=utf8']))
    .then(console.log, console.error)
    .then(() => ep.close())
    .catch(console.error)
  }
});