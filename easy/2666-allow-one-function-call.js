/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let fnCopy = fn;
    let called = false;
    return function(...args){
        if (called) {
            return;
        }

        called = true;
        return fnCopy.apply(this, args);
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // undefined
