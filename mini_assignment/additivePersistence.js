function additivePersistence(num) {
    let count = 0;
    while(num >= 10) {
        let res = 0;
        let arr = Array.from(String(num), Number);
        for(let n of arr) {
            res += n;
        }
        num = res;
        count ++;
    }
    return count;
}

// function additivePersistence(num) {
//     let count=0;
//     if(num<10){
//         return 0;
//     }
//     while(num>=10){
//         num=sumDigits(num);
//         count=count+1;
//     }
//     return count;
// }
//
// /**
//  *
//  * @param {*} num number
//  * @returns sum of all digits
//  */
// function sumDigits(num){
//     let sum=0;
//     while(num){
//         sum+=num%10;
//         num=Math.floor(num/10);
//     }
//     return sum;
// }

// TEST 3 - additivePersistence
console.assert(additivePersistence(1234) === 2, 'the additive 1234 should be 2')
console.assert(additivePersistence(13) === 1, 'the additive 13 should be 1')
console.assert(additivePersistence(9876) === 2, 'the additive 9876 should be 2')
console.assert(additivePersistence(199) === 3, 'the additive 199 should be 3')
console.assert(additivePersistence(1679583) === 3, 'the additive 1679583 should be 3')

console.log("code execution complete!")
