const tokens = []
const curentToken = { type: undefined, value: '' }
function start(char) {}

function tokenizer(input = '') {
  let state = start
  for (const char of input) {
    state = state(char)
  }
  return tokens
}

let mdsource = `
# h1
## h2
### h3
#### h4
##### h5
###### h6
`
