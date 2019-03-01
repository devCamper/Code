function randStr(length = 10, start = ' ', end = '~', start1, end1) {
  start = start.toString()
  end = end.toString()

  let result = ''
  while(result.length < length) {
    let code =  parseInt(Math.random()*100+32)
    if(code >= start.charCodeAt(0) && code <= end.charCodeAt(0))
      result+=String.fromCharCode(code)
    else if(typeof start1 === 'undefined' || typeof end1 === 'undefined')
      continue
    else if(code >= start1.charCodeAt(0) && code <= end1.charCodeAt(0))
      result+=String.fromCharCode(code)
  }
  return result
}
