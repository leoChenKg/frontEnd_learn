const esprima = require('esprima')

let ast = esprima.parseModule('<div name="leo" age="12"><span>hello</span>world</div>', { jsx: true, tokens: true })
console.log(ast)
