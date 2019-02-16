// const l = console.log
// const a = window.alert
// const c = window.confirm
// const p = window.prompt

// l('Hello!')
// a('Hi.')
// c('How are you?')
// p('What\'s your name?', 'Max')

document.addEventListener("DOMContentLoaded", function(event) {
  document.removeChild(document.documentElement);
  // var c = document.createElement("canvas");
  var c = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  c.setAttribute("width", window.innerWidth);
  c.setAttribute("height", window.innerHeight);
  document.appendChild(c);
});

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  alert("calling");
  var result = await resolveAfter2Seconds();
  alert(result);
}

asyncCall();