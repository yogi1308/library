Vagabond = new Book('Vagabond', 'Takehiko Inoue')


displayBooks(Vagabond)

// const myLibrary = [Vagabond, TheAlchemist, TheHobbit, TheGreatGatsby, TheHungerGames, TheLordOfTheRings, TheSilmarillion, TheTwoTowers, TheFellowshipOfTheRing, TheReturnOfTheKing, TheHobbit, TheHungerGames, TheGreatGatsby, TheAlchemist, Vagabond];

function Book(title, author) {
  // the constructor...
  this.title = title
  this.author = author
//   this.unread = unread
//   this.read = read
//   this.started = started
//   this.pages = pages
//   this.chapters = chapters
//   this.cover = cover
}

console.log(Vagabond)

function addBookToLibrary() {
  // do stuff here

}

function displayBooks(Vagabond) {
    const main = document.querySelector(".main")

    const book = document.createElement("div")
    book.classList.add("book")

    const cover = document.createElement("div")
    cover.classList.add("book-cover")
    book.appendChild(cover)

    const details = document.createElement("div")
    details.classList.add("book-details")
    book.appendChild(details)

    const title_author = document.createElement("div")

    const title = document.createElement("p")
    title.textContent = Vagabond.title
    title_author.appendChild(title)

    const author = document.createElement("p")
    author.textContent = Vagabond.author
    title_author.appendChild(author)

    details.appendChild(title_author)

    
    const buttons = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    buttons.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    buttons.setAttribute("viewBox", "0 0 24 24");
    const titleElement = document.createElementNS("http://www.w3.org/2000/svg", "title");
    titleElement.textContent = "dots-vertical";
    buttons.appendChild(titleElement);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z");
    buttons.appendChild(path);
    details.appendChild(buttons);
    
    main.appendChild(book)

}

// myLibrary.forEach(book => {displayBooks(book)})

