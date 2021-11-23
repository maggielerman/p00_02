// rainbow text script start

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr)}

function makeMyColors (selector) {
  var _document$querySelect = document.querySelectorAll(selector)
  var _document$querySelect2 = _toArray(_document$querySelect)
  var elements = _document$querySelect2.slice(0)
  
  return elements.map(function (element) {
    var text = element.innerText.split('')
    var myColors = text.map(function (letter){
      return '<myColor>' + letter + '</myColor>'
    }).join('')
    return element.innerHTML = myColors
  })
}

// function makeMyColors2 (selector) {
//   var _document$querySelect = document.querySelectorAll(selector)
//   var _document$querySelect2 = _toArray(_document$querySelect)
//   var elements = _document$querySelect2.slice(0)
  
//   return elements.map(function (element) {
//     var text = element.innerText.split('')
//     var myColors2 = text.map(function (letter){
//       return '<myColor2>' + letter + '</myColor2>'
//     }).join('')
//     return element.innerHTML = myColors2
//   })
// }


// usuage with single selector
makeMyColors('div.rainbow');
// makeMyColors2('button.rainbow');
