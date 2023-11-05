// https://leetcode.com/problems/array-reduce-transformation/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
let reduce = function(nums, fn, init) {
   let result = init;
   for(let i = 0; i < nums.length; i++) {
       result = fn(result, nums[i]);
   }

   return result;
};

function sum(accum, curr) { return accum + curr; }
console.log(reduce([1,2,3,4], sum, 0)); // 10
