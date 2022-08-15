const types = require('./tokenTypes')

const LETTERS = /[a-z0-9]/
const tokens = []
const currentToken = { type: undefined, value: undefined }

function start(char) {
  if (char === '<') {
    emit({ type: types.LeftArrowPunctuator, value: '<' })
    return leftArrowFounded
  }

  throw Error('第一个字符串必须是 "<"')
}

//  已经找到左边括号
function leftArrowFounded(char) {
  if (LETTERS.test(char)) {
    currentToken.type = types.JSXIdentifier
    currentToken.value += char
    return toJSXIdentifier
  } else if (char === '/') {
    emit({ type: types.SlashBackPunctuator, value: '/' })
    return toJSXIdentifier
  }
  throw Error(' "<" 后不合法')
}

// 尝试去寻找标签名
function toJSXIdentifier(char) {
  if (LETTERS.test(char)) {
    currentToken.type = types.JSXIdentifier
    currentToken.value += char
    return toJSXIdentifier
  } else if (char === ' ') {
    emit(currentToken)
    return toAttributeIdentifier
  } else if (char === '>') {
    emit(currentToken)
    emit({ type: types.RightArrowPunctuator, value: '>' })
    return rightArrowFounded
  }
  throw Error('标签名不合法')
}

// 去尝试寻找属性名
function toAttributeIdentifier(char) {
  if (LETTERS.test(char)) {
    currentToken.type = types.AttrIdentifier
    currentToken.value += char
    return toAttributeIdentifier
  } else if (char === '=') {
    emit(currentToken)
    return tryToAttributeValue
  }
  throw Error('不合法')
}

// 寻找属性值
function tryToAttributeValue(char) {
  if (char === '"') {
    currentToken.type = types.AttrStringValue
    currentToken.value = ''
    return toAttributeValue
  }
  throw Error('不合法')
}
// 寻找属性值
function toAttributeValue(char) {
  if (LETTERS.test(char)) {
    currentToken.value += char
    return toAttributeValue
  } else if (char === '"') {
    emit(currentToken)
    return tryToEndTag
  }
  throw Error('不合法')
}

// 尝试结束标签或 收集下一个 属性
function tryToEndTag(char) {
  if (char === ' ') {
    return toAttributeIdentifier
  } else if (char === '>') {
    emit(currentToken)
    emit({ type: types.RightArrowPunctuator, value: '>' })
    return rightArrowFounded
  }
  throw Error('不合法')
}

// 已经找到右箭头
function rightArrowFounded(char) {
  if (char === '<') {
    emit({ type: types.LeftArrowPunctuator, value: '<' })
    return leftArrowFounded
  } else if (LETTERS.test(char)) {
    currentToken.type = types.JSXText
    currentToken.value += char
    return toJSXText
  }
  throw Error('不合法')
}

function toJSXText(char) {
  if (LETTERS.test(char)) {
    currentToken.type = types.JSXText
    currentToken.value += char
    return toJSXText
  } else if (char === '<') {
    emit(currentToken)
    emit({ type: types.LeftArrowPunctuator, value: ' <' })
    return leftArrowFounded
  }
  throw Error('不合法')
}

function emit(token) {
  if (token.value !== undefined && token.value !== null && token.value.length > 0) {
    tokens.push({ ...token })
    currentToken.value = ''
    currentToken.type = undefined
  }
}

function tokenizer(input) {
  let state = start

  for (const char of input) {
    state = state(char)
  }

  return tokens
}

const res = tokenizer('<div name="leo" age="12"><span>hello</span>world</div>')
console.log(res)
module.exports = {
  tokenizer
}

