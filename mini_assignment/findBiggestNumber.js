// PROBLEM 1 - findBiggestNumber

/*
  findBiggestNumber
    search the input (map) for the biggest number
  input
    map, an array of array of integers, nulls or undefined
  output
    an integer representing the biggest number in int.  
    if there is no valid output, return undefined 
  note: I have provided some code within the function to help you out
*/
function findBiggestNumber(map) {
    let max = map[0][0];
    for (let arr of map) {
        for (let n of arr) {
            if (n === null || n === undefined) {
                continue;
            }
            max = Math.max(max, n);
        }
    }
    return max;
}


// TEST 1 - findBiggestNumber
const grid1 = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12]
]

const grid2 = [
    [1, 1, 4, 1],
    [1, 6],
    [1, 2, 1, -3],
]

const grid3 = [
    [1, null, 1, null],
    [1, 0],
    [1, 2, 1, undefined],
]

const grid4 = [
    [-1, null],
    [],
    [0, -2, -1],
]

const grid5 = [
    [],
    [],
    [],
]

console.assert(findBiggestNumber(grid1) === 12, "biggest number should be 12");
console.assert(findBiggestNumber(grid2) === 6, "biggest number should be 6");
console.assert(findBiggestNumber(grid3) === 2, "biggest number should be 2");
console.assert(findBiggestNumber(grid4) === 0, "biggest number should be 0");
console.assert(findBiggestNumber(grid5) === undefined, "biggest number response should be undefined");