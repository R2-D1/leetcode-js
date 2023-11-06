// https://leetcode.com/problems/counter-ii/description/
/**
 * @param { number } init
 * @return { { increment: Function, decrement: Function, reset: Function } }
 */
const createCounter = function(init) {
    let value = init;
    return {
        increment: () => {return ++value},
        decrement: () => {return --value},
        reset: () => {return value = init}
    }
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

