// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function(arr, fn) {
    const result = [];
    arr.forEach((number, index) => {
        result.push(fn(number, index));
    })

    return result;
}

let arr1 = [1,2,3], fn1 = function plusone(n) { return n + 1; }
console.log(map(arr1, fn1)); // [2,3,4]
let arr2 = [1,3,5], fn2 = function double(n, i) { return n + i; }
console.log(map(arr2, fn2)); // [1,4,7]
