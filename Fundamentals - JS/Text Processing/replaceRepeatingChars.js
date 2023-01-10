function replaceRepeatingChar(input) {

    let buffer = input[0] + '';

    for (let i = 1; i < input.length; i++) {


        if (input[i] !== input[i - 1]) {
            buffer += input[i]
        };
    }
    console.log(buffer);
}
replaceRepeatingChar('aaaaabbbbbcdddeeeedssaa')