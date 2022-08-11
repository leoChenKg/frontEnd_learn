var RecentCounter = function () {
  this.list = []
}

/**
 * @param {number} t
 * @return {number}
 */

RecentCounter.prototype.ping = function (t) {
  this.list.push(t)
  if (this.list[this.list.length - 1] - this.list[0] <= 3000) {
    return this.list.length
  }

  while (this.list[this.list.length - 1] - this.list[0] > 3000) {
    this.list.shift()
  }
  return this.list.length
}

let obj = new RecentCounter()

console.log(obj.ping(1))
console.log(obj.ping(100))
console.log(obj.ping(3001))
console.log(obj.ping(3002))
