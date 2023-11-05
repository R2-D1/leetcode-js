// https://leetcode.com/problems/array-prototype-last/

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    // "this" will be an array and need to find last element
    // If there is no elements in array return -1
    return this.length ? this[this.length - 1] : -1;
};

const arr = [1, 2, 3];
console.log(arr.last()); // 3
