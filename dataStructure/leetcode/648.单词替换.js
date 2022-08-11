// 输入：dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// 你需要将句子中的所有继承词用词根替换掉。如果继承词有许多可以形成它的词根，则用最短的词根替换它。
// 没有的直接补替换

let dictionary = ['a', 'b', 'c']
let sentence = 'aadsfasf absbs bbab cadsfafs'

// {
// char - 'a'
//
// }

var replaceWords = function (dictionary, sentence) {
  const words = sentence.split(' ')
  const root = {}
  // 生成前缀树

  for (let i = 0; i < dictionary.length; i++) {
    const wordPrefix = dictionary[i]
    genAnOpTire(root, wordPrefix)
  }

  // 循环 words 查找是否
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    let prefix = genAnOpTire(root, word, true)
    words[i] = prefix || word
  }

  function genAnOpTire(root, str, flag = false) {
    let prefix = ''
    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      const index = char.charCodeAt() - 'a'.charCodeAt()
      if (root[index]) {
        flag && (prefix += char)
        if (dictionary.includes(prefix)) return prefix
        root = root[index]
        continue
      }
      if (flag) return false
      root[index] = {}
      root = root[index]
    }
    if (flag) return prefix
  }

  return words
}
console.log(replaceWords(dictionary, sentence))
