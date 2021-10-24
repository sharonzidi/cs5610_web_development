function balancedString(str) {
    if (str.length < 1) {
        return true;
    }

    const map = new Map();
    for(let i = 0; i < str.length; i++) {
        let curChar = str.charAt(i);
        if (map.has(curChar)) {
            map.set(curChar, map.get(curChar) + 1);
        } else {
            map.set(curChar, 1);
        }
    }

    let num = map.get(str.charAt(0));
    for(const n of map.values()) {
        if(n !== num) {
            return false;
        }
    }
    return true;
}


//   function balancedString(str) {
//     if(str.length<1){
//       return true;
//     }
//     const map = new Map();
//     for(let i=0;i<str.length;i++){
//       if(map.get(str.charAt(i))===undefined){
//         map.set(str.charAt(i),1);
//       }
//       else{
//         map.set(str.charAt(i),map.get(str.charAt(i)+1));
//       }
//     }
//     let n=map.values().next().value;
//     for(let value of map.values()){
//       if(value!=n){
//         return false;
//       }
//     }
//     return true;
//   }

// TEST 2 - balancedString
console.assert(balancedString("xxxyyyzzz") === true, "'xxxyyyzzz' is balanced")
console.assert(balancedString("xxxyyyzzzz") === false, '"xxxyyyzzzz" is not balanced')
console.assert(balancedString("abccbaabccba") === true, '"abccbaabccba" is balanced')
console.assert(balancedString("abcdefghijklmnopqrstuvwxyz") === true, '"abcdefghijklmnopqrstuvwxyz" is balanced')
    console.assert(balancedString("pqq") === false, '"pqq" is not balanced')
    console.assert(balancedString("fdedfdeffeddefeeeefddf") === false, '"fdedfdeffeddefeeeefddf" is not balanced')
    console.assert(balancedString("www") === true, '"www is balanced')
    console.assert(balancedString("x") === true, '"x" is balanced')
    console.assert(balancedString("") === true, "'' is balanced")