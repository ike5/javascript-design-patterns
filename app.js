function Book(title, author, yearPublished, isbn) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.isbn = isbn;
}

Object.prototype.toString = function () {

    return (
        `${this.title} is a fascinating book written by ${this.author} and published in ${this.yearPublished}. If you are looking for more information about ${this.title}, please use the ISBN: ${this.isbn}.
        Thank you.`
    );
};

let javascript = new Book("JavaScript Explained", "Zac Gordon", 2020, 9798623901415);
let javascript_patterns = new Book("Learning JavaScript Design Patterns",
"Addy Osmani",
2012,
9781449331818);

console.log(javascript.toString());
console.log(javascript_patterns.toString());