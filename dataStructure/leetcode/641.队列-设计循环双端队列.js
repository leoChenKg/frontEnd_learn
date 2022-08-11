/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.start = 0
  this.end = 0
  this.size = 0
  this.MAX_SIZE = k
  this.list = new Array(k)
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false
  if (this.size !== 0) {
    this.start = this.start === 0 ? this.MAX_SIZE - 1 : this.start - 1
  }
  this.list[this.start] = value
  this.size++
  return true
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false
  if (this.size !== 0) {
    this.end = (this.end + 1) % this.MAX_SIZE
  }
  this.list[this.end] = value
  this.size++
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false
  this.list[this.start] = null
  if (this.size !== 1) {
    this.start = (this.start + 1) % this.MAX_SIZE
  }
  this.size--
  return true
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false
  this.list[this.end] = null
  if (this.size !== 1) {
    this.end = this.end === 0 ? this.MAX_SIZE - 1 : this.end - 1
  }
  this.size--
  return true
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1
  return this.list[this.start]
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1
  return this.list[this.end]
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.start === this.end && this.size === 0
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return (this.end + 1) % this.MAX_SIZE === this.start && this.size === this.MAX_SIZE
}
