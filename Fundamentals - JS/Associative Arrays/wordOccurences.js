function wordOccurences(data) {

    let myObj = {};

    for (const el of data) {

        if (myObj.hasOwnProperty(el)) {
            myObj[el] += 1;
        } else {
            myObj[el] = 1;
        }
    }

    let sortable = [];

    for (let word in myObj) {
        sortable.push([word, myObj[word]])
    }

    sortable.sort((a, b) => {
        return b[1] - a[1]
    });

    for (const [key, value] of sortable) {
        console.log(key,'->',value,'times');
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])