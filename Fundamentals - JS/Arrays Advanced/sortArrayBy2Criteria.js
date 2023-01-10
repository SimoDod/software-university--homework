function sortArray2Criteria(input) {


    let result = input.sort((a, b) => a.length - b.length || a.localeCompare(b))


    console.log(result.join('\n'));
}
sortArray2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])