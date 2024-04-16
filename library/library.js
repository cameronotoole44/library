const title = document.getElementById('title')
const author = document.getElementById('author')
const page = document.getElementById('page')
const readOrNot = document.getElementById('readOrNot')
const image = document.getElementById('image');
const submitBookInfo = document.getElementById('submitBookInfo');
const library = document.querySelector('.library');
const cards = document.getElementsByClassName('bookCards');
const cardPopUp = document.querySelector('.cardPopUp');

const formButton = document.querySelector('.formButton');
const form = document.querySelector('.form')
const closeForm = document.querySelector('.close');
const plus = document.getElementById('plus');

const bookStats = document.querySelector('.bookStats');
const totalBooks = document.getElementById('totalBooks');
const totalPages = document.getElementById('totalPages');
const totalRead = document.getElementById('totalRead');

const content = document.querySelector('.content');


// FORMS //
closeForm.addEventListener('click', () => {

    form.classList.remove('fadeIn');
    form.classList.add('fadeOut');

    // when fade ends, it removes the class
    form.addEventListener('animationend', () => {
        form.classList.remove('fadeOut');
    })
    content.style.filter = 'none';


})

// opens pop up form
formButton.addEventListener('click', (e) => {
    submitBookInfo.value = 'add book to library';
    title.value = '';
    author.value = '';
    page.value = '';
    readOrNot.checked = false;
    if (form.classList.contains('fadeOut')) {
        form.classList.remove('fadeOut')
    }
    form.classList.add('fadeIn');
    content.style.filter = 'blur(5px)';


})

// adds info and converts to card
submitBookInfo.addEventListener('click', addBookToLibrary)

let currentBook = null;

// book library //

// book array
let myLibrary = [];
let bookCount = 0;

// BOOK CLASS //
class Book {
    constructor(title, author, page, readOrNot) {

        this.title = title;
        this.author = author;
        this.page = Number(page);
        if (readOrNot === true || readOrNot === 'readYes') {
            this.readOrNot = 'readYes';
        } else {
            this.readOrNot = 'readNo'
        }
        this.count = bookCount;
        bookCount++; // new - old 
        this.create();
        bookStatistics()

    }

    create() {
        this.containerDiv = document.createElement('div');
        this.containerDiv.dataset.index = this.count;
        this.containerDiv.classList.add('bookCards');
        //the html markup to quickly create the cards createElement() too messy 
        this.newCard = document.createRange().createContextualFragment(this.htmlMarkup());


        // show icons/dont show 
        this.containerDiv.addEventListener('mouseenter', (e) => {
            e.target.querySelector('.cardPopUp').style.display = 'block';

        })

        this.containerDiv.addEventListener('mouseleave', (e) => {
            e.target.querySelector('.cardPopUp').style.display = 'none';
        })



        library.appendChild(this.containerDiv);

        this.containerDiv.appendChild(this.newCard)

        this.containerDiv.appendChild(this.newCard)

        this.delete = this.containerDiv.querySelector('.icons.delete');
        this.editing = this.containerDiv.querySelector('.icons.edit');
        this.cardRead = this.containerDiv.querySelector(`.icons.${this.readOrNot}`);
        this.line = this.containerDiv.querySelector('.line');
        this.readIcon = this.containerDiv.querySelector('img');
        this.readIcon.style.display = 'none';

        if (this.readOrNot === 'readYes') {
            this.readIcon.style.display = 'block'
            this.line.style.marginRight = '33px';
        } else {
            this.readIcon.style.display = 'none';
            this.line.style.marginRight = '15px';

        }

        this.delete.addEventListener('click', deleteCard);
        this.editing.addEventListener('click', () => {
            submitBookInfo.value = 'edit book';
            title.value = this.title;
            author.value = this.author;
            page.value = this.page;
            readOrNot.checked = this.readOrNot === 'readYes' ? true : false;
            content.style.filter = 'blur(5px)';
            form.classList.add('fadeIn')
            currentBook = this;


        });
        this.cardRead.addEventListener('click', cardRead);

    }

    htmlMarkup() {
        return `
        <div class='upper'>
            <div class='bookTitle'>${this.title}</div>
            <div class='smallText'>By ${this.author}</div>
            <div class='bookTotalpage smallText'>${this.page} pages</div>
        </div>
        <div class='line'></div>

        <img class='readIconInCard' src='../library/checkmark.png' alt='check mark'>
        <!-- icon popup on bookCard hover -->
        <div class='cardPopUp'>
            <input type='image' class='icons ${this.readOrNot}' src='../library/book.png'>
            <input type='image' class='icons edit' src='../library/edit.png'> 
            <input type='image' class='icons delete' src='../library/x_mark.png'>
        </div>`
    }

    edit() {
        // updating HTML
        this.containerDiv.querySelector('.bookTitle').textContent = title.value;
        this.containerDiv.querySelector('.smallText').textContent = 'By ' + author.value;
        this.containerDiv.querySelector('.bookTotalpage.smallText').textContent = page.value + ' pages';
        this.cardRead.className = `icons ${this.readOrNot}`

        //update the data 
        this.title = title.value;
        this.author = author.value;
        this.page = Number(page.value);

        this.readOrNot = readOrNot.checked;
        this.readOrNot === true ? this.readOrNot = 'readNo' : this.readOrNot = 'readYes';
        this.bookRead();

    }


    bookRead() {
        if (this.readOrNot === 'readYes') {
            this.readOrNot = 'readNo';
            this.readIcon.style.display = 'none'
            this.line.style.marginRight = '15px';
            bookStatistics()
            saveLocal();
            return this.cardRead.className = 'icons readNo';
        } else if (this.readOrNot === 'readNo') {
            this.readOrNot = 'readYes';
            this.line.style.marginRight = '30px';
            this.readIcon.style.display = 'block';
            bookStatistics()
            saveLocal();
            return this.cardRead.className = 'icons readYes';
        }

    }
}


//template cards
if (!localStorage.getItem('templateCards')) {
    myLibrary.push(
        new Book('White Fang', 'Jack London', '252', true),
        new Book('The Fellowship Of The Ring', 'J.R.R Tolkien', '432', true),
        new Book('The Two Towers', 'J.R.R Tolkien', '448', true),
        new Book('The Return of the King', 'J.R.R Tolkien', '416', true),
        new Book('Gaeilge', 'Caoimhín De Barra', '272', true),
        new Book('62', 'Bryan Hoch', '368', false));
    saveLocal();

}


//              LOCAL STORAGE           //
function saveLocal() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}

restoreLocal();
function restoreLocal() {
    if (!localStorage.getItem('templateCards')) {
        localStorage.setItem('templateCards', true);
    } else {
        objects = JSON.parse(localStorage.getItem('myLibrary'));
        for (let element of objects) {
            if (element !== null) {
                myLibrary.push(new Book(element.title, element.author, element.page, element.readOrNot))
            }
        }
        saveLocal();
    }

}

//changes the books actually read count
function cardRead(e) {
    myLibrary[e.path[2].dataset.index].bookRead();
    saveLocal();

}

//create and add book to library
function addBookToLibrary() {
    if (title.value === '' || author.value === '' || page.value === '') {
        alert('please input all values')
        return;
    }

    if (form.className === 'form fadeIn' && currentBook !== null) {
        currentBook.edit();
        currentBook = null;

        form.classList.remove('fadeIn');
        form.classList.add('fadeOut');

        // when fade ends, class get removed 
        form.addEventListener('animationend', () => {
            form.classList.remove('fadeOut');
        })
        content.style.filter = 'none';

    } else {
        let book = new Book(title.value, author.value, page.value, readOrNot.checked);

        myLibrary.push(book);
        bookStatistics();
        readOrNot.checked = false;
        saveLocal();
        form.classList.remove('fadeIn');
        form.classList.add('fadeOut');

        // when fadeOut ends, it removes the class
        form.addEventListener('animationend', () => {
            form.classList.remove('fadeOut');
        })
        content.style.filter = 'none';


    }

    // resets after
    title.value = '';
    author.value = '';
    page.value = '';
    readOrNot.checked = false;
}

//delete book from DOM and library
function deleteCard(e) {

    const targetIndex = e.path[2];


    library.removeChild(targetIndex);


    myLibrary.filter((element, i) => {
        if (i === Number(targetIndex.dataset.index)) {
            // if(element.readOrNot === 'readYes') {}
            myLibrary[i] = null;
        }
    });
    bookStatistics()
    saveLocal();

}

/*           bookStats          */
bookStatistics();
function bookStatistics() {
    let readCount = 0;
    let pages = 0;
    for (const element of myLibrary) {
        if (element !== null) {
            pages += element.page;
            if (element.readOrNot === 'readYes') readCount++;
        }
    }
    totalBooks.textContent = cards.length - 1;
    totalPages.textContent = pages;
    totalRead.textContent = readCount;
}