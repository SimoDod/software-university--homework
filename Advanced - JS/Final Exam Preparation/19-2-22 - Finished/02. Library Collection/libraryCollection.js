class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.capacity <= this.books.length) {
      throw new Error("Not enough space in the collection.");
    }

    this.books.push({ bookName, bookAuthor, payed: false });
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    let currBook = this.books.find((book) => book.bookName === bookName);

    if (!currBook) {
      throw new Error(`${bookName} is not in the collection.`);
    }

    if (currBook.payed) {
      throw new Error(`${bookName} has already been paid.`);
    }

    currBook.payed = true;

    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    let currBook = this.books.find((book) => book.bookName === bookName);

    if (!currBook) {
      throw new Error("The book, you're looking for, is not found.");
    }

    if (!currBook.payed) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }

    let indexToDel = this.books.indexOf(currBook);

    this.books.splice(indexToDel, 1);

    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    let emptySlots = Math.abs(this.capacity - this.books.length);
    if (!bookAuthor) {
      let buff = [`The book collection has ${emptySlots} empty spots left.`];

      let sorted = this.books.sort((a, b) => {
        return a.bookName.localeCompare(b.bookName);
      });

      for (const book of sorted) {
        let checker = "";

        if (book.payed) {
          checker = "Has Paid";
        } else {
          checker = "Not Paid";
        }

        buff.push(`${book.bookName} == ${book.bookAuthor} - ${checker}.`);
      }

      return buff.join("\n");
    } else {
      let currBook = this.books.find((book) => book.bookAuthor === bookAuthor);

      if (!currBook) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }
      let checker = "";

      if (currBook.payed) {
        checker = "Has Paid";
      } else {
        checker = "Not Paid";
      }
      return `${currBook.bookName} == ${bookAuthor} - ${checker}.`;
    }
  }
}

const library = new LibraryCollection(5);
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");
console.log(library.getStatistics());
