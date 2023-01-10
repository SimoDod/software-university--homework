function numTriangle(n) {

    let buffer = "";

    for (let i = 1; i <= n; i++) {

        buffer = "";

        for (let j = 1; j <= i; j++) {

            buffer += i + " ";

        }
        console.log(buffer)
    }
}
numTriangle(20000)