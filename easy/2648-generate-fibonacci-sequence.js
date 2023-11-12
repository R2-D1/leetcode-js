// https://leetcode.com/problems/generate-fibonacci-sequence/
/**
 * @return {Generator<number>}
 */
const fibGenerator = function*() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
};

// Works faster than the above solution, above is more readable for me
// const fibGenerator = function*() {
//     let a = 0, b = 1, temp;
//     while (true) {
//         yield a;
//         temp = a;
//         a = b;
//         b = temp + b;
//     }
// };

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
