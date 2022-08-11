/**
 * @param {number} k
 */
 var MyCircularQueue = function (k) {
    this.start = 0
    this.end = 0
    this.size = 0
    this.MaxSize = k
    this.list = new Array(k)
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (value !== undefined && value !== null) {
        let index = this.end % this.MaxSize
        if (this.end >= this.MaxSize && index >= this.start) return false
        this.list[index] = value
        this.end++
        this.size++
        return true
    }
    return false
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.size < 1) return
    let index = this.start++ % this.MaxSize
    this.list[index] = null
    this.size--
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (!this.isEmpty()) {
        return this.list[this.start % this.MaxSize]
    }
    return -1
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (!this.isEmpty()) {
        return this.list[(this.end - 1) % this.MaxSize]
    }
    return -1
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.size === 0
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.size === this.MaxSize
}
