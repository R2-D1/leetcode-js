/**
 * @param {Array} array
 * @param {number} size
 * @return {Array}
 */
const chunk = function (array, size) {
    const chunkedArray = [];
    let chunk = [];

    for (let item of array) {
        if (chunk.length === size) {
            chunkedArray.push(chunk);
            chunk = [];
        }

        chunk.push(item);
    }

    if (chunk.length > 0) {
        chunkedArray.push(chunk);
    }

    return chunkedArray;
};

// much faster than above but less readable
// const chunk = function(array, size) {
//     const numChunks = Math.ceil(array.length / size);
//     const chunkedArray = new Array(numChunks);
//
//     for (let i = 0, j = 0; i < numChunks; i++) {
//         chunkedArray[i] = array.slice(j, j += size);
//     }
//
//     return chunkedArray;
// };


const result = chunk([1, 2, 3, 4, 5], 2);
console.log(result); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
