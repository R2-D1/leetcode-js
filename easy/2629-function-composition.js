// https://leetcode.com/problems/function-composition/
/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function(functions) {
    // just check if functions is an array
    if (functions.length === 0) {
        return (x) => x;
    }

    return function (x) {
        // reduceRight will start from the end of the array
        // and apply each function to the result of the previous one
        return functions.reduceRight((result, func) => func(result), x);
    };
};

// It can be also done with a for loop and will work faster
// const compose = function(functions) {
//     if (!functions.length) {
//         return (x) => x;
//     }
//
//     return (x) => {
//         for(let i = functions.length -1; i >= 0; i--) {
//             x = functions[i](x);
//         }
//
//         return x;
//     }
// };

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(1)); // 3
console.log(fn(15)); // 31
