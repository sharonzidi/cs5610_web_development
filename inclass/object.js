(function() {

    const obj = {
        1: "word1",
        "banana": "peel",
        secret: {
            username: "username",
            password: "password"

        }
    }
    console.log(obj.banana);
    console.log(obj[1]);
    console.log(obj['secret']['username']);

})();