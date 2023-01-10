function pascalCaseSplitter(input) {

    let firstCh = input[0];
    input.split('');
    let result = [];
    // 65 - 90 ascii range
    for (let i = 1; i < input.length; i++) {

        let currAsciiCode = input[i].charCodeAt();

        if (currAsciiCode < 65 || currAsciiCode > 90) {
            result.push(input[i]);
        } else {
            result.push(",")
            result.push(input[i]);
        }
    }

    result.unshift(firstCh)
    console.log(result.join('').split(',').join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')