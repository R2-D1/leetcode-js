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


const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(1)); // 4
console.log(fn(15)); // 31
