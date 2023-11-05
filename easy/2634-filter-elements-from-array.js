// https://leetcode.com/problems/filter-elements-from-array/description/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function(arr, fn) {
    const result = [];
    arr.forEach((number, index) => {
        if (fn(number, index)) {
            result.push(number);
        }
    })

    return result;
};

function greaterThan10(n) { return n > 10; }
console.log(filter([0, 10, 20, 40], greaterThan10)); // [20, 40]

function firstIndex(n, i) { return i === 0; }
console.log(filter([1,2,3], firstIndex)); // [1]

