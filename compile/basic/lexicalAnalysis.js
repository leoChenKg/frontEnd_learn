// lexical analysis 词法分析
const fs = require('fs')
const path = require('path')
const se = require()
const esprima = require('esprima')

let sourceCode = fs.readFileSync(path.join(__dirname, '../code/code.html'), 'utf-8')

let ast = esprima.parseModule(sourceCode, { jsx: true, tokens: true })