function schoolLibrary(input) {
    let shelfBooks = input.shift().split('&');
    let index = 0;

    while (input[index] !== 'Done') {
        let command = input[index].split('').join('');
        let currentBook = command.split(' | ')

        switch (command) {


            case `Add Book | ${currentBook[1]}`:
                if (shelfBooks.includes(currentBook[1])) {
                    index++;
                    continue;
                } else {
                    shelfBooks.unshift(currentBook[1])
                }
                break;

            case `Take Book | ${currentBook[1]}`:

                if (shelfBooks.includes(currentBook[1])) {
                    let takeBookIndex = shelfBooks.indexOf(currentBook[1]);
                    shelfBooks.splice(takeBookIndex, 1);
                } else {
                    index++;
                    continue;
                }
                break;

            case `Swap Books | ${currentBook[1]} | ${currentBook[2]}`:

                if (shelfBooks.indexOf(currentBook[1]) === -1
                    || shelfBooks.indexOf(currentBook[2]) === -1) {
                    index++;
                    continue;
                } else {
                    let x = shelfBooks.indexOf(currentBook[1])
                    let y = shelfBooks.indexOf(currentBook[2])

                    const tmp = shelfBooks[x];

                    shelfBooks[x] = shelfBooks[y];
                    shelfBooks[y] = tmp;
                }

                break;
            case `Insert Book | ${currentBook[1]}`:

                if (shelfBooks.includes(currentBook[1])) {
                    index++;
                    continue;
                } else {
                    shelfBooks.push(currentBook[1])
                }

                break;
            case `Check Book | ${currentBook[1]}`:
                let nameOfBook = shelfBooks[currentBook[1]]
                if (shelfBooks.indexOf(nameOfBook) === -1) {
                    index++;
                    continue;
                }
                console.log(nameOfBook);
                break;
            default:
                break;
        }

        index++;
    }
    console.log(shelfBooks.join(', '));
}

schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"])
