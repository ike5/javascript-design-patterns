class Book{
    constructor(author){
        this._author = author;
    }

    get writer(){
        return this._author;
    }

    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

let greenEggs = new Book('Dr.Seuss');

console.log(greenEggs);
console.log(greenEggs.writer);
greenEggs.writer = 'Jodi Picoulx';
console.log(greenEggs);
console.log(greenEggs.writer);
