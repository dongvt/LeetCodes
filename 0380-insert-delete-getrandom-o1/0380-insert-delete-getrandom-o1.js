
var RandomizedSet = function() {
    this.data = new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.data.has(val)) return false;
    this.data.add(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.data.has(val)) return false;
    this.data.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    //Randomize from the first 5
    const iterator = this.data.values();

    const limit = Math.floor(Math.random() * Math.min(this.data.size,5))

    for(let i = 0 ; i < limit ; i++) {
        iterator.next()
    }

    return iterator.next().value;
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */