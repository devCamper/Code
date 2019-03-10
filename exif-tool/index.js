const exiftool = require('node-exiftool')
const exiftoolBin = require('dist-exiftool')
const ep = new exiftool.ExiftoolProcess(exiftoolBin)
 
const metadata = {
    all: '', // remove all metadata at first
    'ObjectName': '500 Gründe',
    'Headline': 'Grund 1: Malecon',
    'Caption-Abstract': 'Fischen am Malecon oder einfach von oben nach unten Laufen (ca. 6.5 km). Havanna besuchen und das nicht erleben wäre sträflich. Zu jeder Tags- oder Nachtzeit ist es eine Begegnungsstätte',
    'Keywords+': [ 'Erlebniss' ],
}
 
const file = '1.jpg'
 
ep
  .open()
  // use codedcharacterset
  .then(() => ep.writeMetadata(file, metadata, ['codedcharacterset=utf8']))
  .then(console.log, console.error)
  .then(() => ep.close())
  .catch(console.error)