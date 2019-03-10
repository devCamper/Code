const fs = require('fs');

let counter = 0;
let svgs = []
for(let i = 0; i < 0b111111; i++) {
  if((i&32||i&16) && (i&8||i&4) && (i&2||i&1)) {
    console.log(counter++)
    let output = []
    if(i&32) {
      output.push([0,0])
    }
    if(i&16) {
      output.push([0,1])
    }
    if(i&8) {
      output.push([0,2])
    }
    if(i&4) {
      output.push([1,0])
    }
    if(i&2) {
      output.push([1,1])
    }
    if(i&1) {
      output.push([1,2])
    }
    svg = output.map(_ => `<rect y="${_[0]}" x="${_[1]}" width="1" height="1"/>`).join("\n")
    svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 3">\n' + svg
    svg += '\n</svg>'
    console.log(svg)
    fs.writeFile("rectangle-font/"+String.fromCharCode(96 + counter)+'_.svg', svg, function(err) {
      if(err) {
          return console.log(err);
      }
  
      console.log("The file was saved!");
  }); 
    // svgs.push(output)
  }
}
