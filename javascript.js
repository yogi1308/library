Vagabond = new Book('Vagabond', 'Takehiko Inoue', false, true, false, 327, 327, 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421577449/vagabond-vol-37-9781421577449_hr.jpg')
TheSlamDunk = new Book('The Slam Dunk', 'Takehiko Inoue', false, false, true, 276, 276, 'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781421533285_9781421533285_hr.jpg')
Berserk = new Book('Berserk', 'Kentaro Miura', false, true, false, 364, 364, 'https://images.booksense.com/images/205/070/9781593070205.jpg')
OnePiece = new Book('One Piece', 'Eiichiro Oda', false, true, false, 1000, 1000, 'https://comicvine.gamespot.com/a/uploads/scale_small/11161/111610434/8594314-9160985681-97840.jpg')
SteelBallRun = new Book('Steel Ball Run', 'Hirohiko Araki', false, false, true, 95, 95, 'https://m.media-amazon.com/images/I/917WFqQD1mL._AC_UF1000,1000_QL80_.jpg')
ChainsawMan = new Book('Chainsaw Man', 'Tatsuki Fujimoto', false, true, false, 97, 97, 'https://images.booksense.com/images/785/722/9781974722785.jpg')
VinLandSaga = new Book('Vinland Saga', 'Makoto Yukimura', false, true, false, 54, 54, 'https://m.media-amazon.com/images/I/91+Qs9DaFZL.jpg')
TheAlchemist = new Book('The Alchemist', 'Paulo Coelho', true, false, false, 197, 197, 'https://i.harperapps.com/hcuk/covers/9780007487943/x400.jpg?ph=harperreach_coming_soon.png')
TheHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', true, false, false, 310, 310, 'https://m.media-amazon.com/images/I/712cDO7d73L.jpg')
TheGreatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', true, false, false, 180, 180, 'https://m.media-amazon.com/images/I/61OTNorhqVS._AC_UF894,1000_QL80_.jpg')
TheHungerGames = new Book('The Hunger Games', 'Suzanne Collins', true, false, false, 374, 374, 'https://m.media-amazon.com/images/I/71un2hI4mcL.jpg')
TheLordOfTheRings = new Book('The Lord of the Rings', 'J.R.R. Tolkien', true, false, false, 1178, 1178, 'https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg')
TheSilmarillion = new Book('The Silmarillion', 'J.R.R. Tolkien', true, false, false, 365, 365, 'https://m.media-amazon.com/images/I/71Gt0U59D3L._AC_UF894,1000_QL80_.jpg')
TheTwoTowers = new Book('The Two Towers', 'J.R.R. Tolkien', true, false, false, 322, 322, 'https://m.media-amazon.com/images/I/71nNxfSvGnL._UF1000,1000_QL80_.jpg')
TheFellowshipOfTheRing = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', true, false, false, 398, 398, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoX5QopXUKl6j79ro89axxAkcC253ryvX7Gg&shttps://ic.pics.livejournal.com/tree_lady/14285127/10506/10506_600.jpg')
TheReturnOfTheKing = new Book('The Return of the King', 'J.R.R. Tolkien', true, false, false, 347, 347, 'https://www.knjizara-dominovic.hr/upload/catalog/product/8086/249042_the-return-ofthe-king-the-lord-of-the-rings-book-3-return-of-the-king-vol3.jpg')


// displayBooks(Vagabond)
//can add genre and summary

const myLibrary = [Vagabond, TheSlamDunk, Berserk, OnePiece, SteelBallRun, ChainsawMan, VinLandSaga, TheAlchemist, TheHobbit, TheGreatGatsby, TheHungerGames, TheLordOfTheRings, TheSilmarillion, TheTwoTowers, TheFellowshipOfTheRing, TheReturnOfTheKing];

function Book(title, author, unread, completed, started, pages, chapters, cover) {
  // the constructor...
  this.title = title
  this.author = author
  this.unread = unread // if book has not been read it should be in red
  this.completed = completed // if book has been read it should be in green
  this.started = started // if book has been started it should be in blue
  this.pages = pages
  this.chapters = chapters
  this.cover = cover
}

console.log(Vagabond)

function addBookToLibrary() {
  // do stuff here

}

function displayBooks(currBook) {
    const main = document.querySelector(".main")

    const book = document.createElement("div")
    book.classList.add("book")

    const cover = document.createElement("div")
    cover.classList.add("book-cover")
    cover.style.backgroundImage = `url(${currBook.cover})`
    cover.style.backgroundSize = "cover"
    cover.style.backgroundPosition = "center"
    book.appendChild(cover)

    const details = document.createElement("div")
    details.classList.add("book-details")
    book.appendChild(details)

    const title_author = document.createElement("div")

    const title = document.createElement("p")
    title.textContent = currBook.title
    title_author.appendChild(title)

    const author = document.createElement("p")
    author.textContent = currBook.author
    title_author.appendChild(author)

    const status = document.createElement("p")
    if (currBook.unread) {
        status.textContent = "Unread"
        status.style.color = "red"
    }
    else if (currBook.started) {
        status.textContent = "Started"
        status.style.color = "blue"
    }
    else {
        status.textContent = "Completed"
        status.style.color = "green"
    }

    title_author.appendChild(status)

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

myLibrary.forEach(book => {displayBooks(book)})






const plusButton = document.querySelector(".plusButton")
plusButton.addEventListener("click", () => {
  const dialog = document.querySelector(".dialog")
  dialog.showModal()
})




