function diceRoll(text) {
    const arr = text.split("d");
    let roll = arr[0];
    let dice = arr[1];
    let sum = 0;

    for (let i = 0; i < roll; i++) {
        sum += Math.floor(Math.random() * dice) + 1;
    }

    return sum;
}

let diceSum = diceRoll("3d8")

diceSum