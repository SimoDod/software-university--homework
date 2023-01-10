function attachEventListeners() {
    const loadAllBooksBtn = document.getElementById('loadBooks');
    loadAllBooksBtn.addEventListener('click', getBooks);
    document.getElementById('exampleTb').innerHTML = '';
    document.querySelector('form').addEventListener('submit', takeData);
}
attachEventListeners()


function bookRender(books) {
    //Object { author: "Svetlin Nakov", title: "C# Fundamentals" };
    
    let tBody = document.getElementById('exampleTb');
    tBody.innerHTML = '';
    
    for (const [id ,book] of books) {
        let tr = document.createElement('tr');
        tr.id = id;

        let titleTd = document.createElement('td');
        let authorTd = document.createElement('td');
        let btnsTd = document.createElement('td');

        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
        
        editBtn.addEventListener('click', editFunc);
        deleteBtn.addEventListener('click', deleteFunc);

        titleTd.textContent = book.title;
        authorTd.textContent = book.author;
        editBtn.textContent = 'Edit'
        deleteBtn.textContent = 'Delete'
        
        btnsTd.appendChild(editBtn);
        btnsTd.appendChild(deleteBtn);

        tr.appendChild(titleTd);
        tr.appendChild(authorTd);
        tr.appendChild(btnsTd)
        
        tBody.appendChild(tr)
    }
}

async function getBooks() {
    let url = 'http://localhost:3030/jsonstore/collections/books';

    try {
        let response = await fetch(url);
        let data = await response.json();

        if(response.status !== 200) throw new Error(response.statusText);

        bookRender(Object.entries(data))
    } catch (error) {
        console.log(error);
    }
}



function editFunc(e) {
    let id = e.target.parentElement.parentElement.id
    localStorage.setItem('id', id);
    let toRemove = document.querySelector('form')
    toRemove.remove();
    
    let book = e.target.parentElement.parentElement.children
    let bookTitle = book[0].textContent
    let bookAuthor = book[1].textContent
    
    let editForm = document.createElement('form');
    editForm.innerHTML = `<h3>Edit FORM</h3> 
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." value="${bookTitle}">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." value="${bookAuthor}">
    <button onClick="updateBook(event)">Save</button>`
    
    document.body.appendChild(editForm);
}



async function updateBook(e) {
    e.preventDefault();
    let id = localStorage.getItem('id')
    let form = document.querySelector('form')
    let author = form[1].value;
    let title = form[0].value;
    
    let url = 'http://localhost:3030/jsonstore/collections/books/' + id;
    
    
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({author: author, title: title})
        })

        const data = await response.json();

        if(response.status !== 200) throw new Error(response.statusText);
    } catch (error) {
        console.log(error);
    }
    form[1].value = '';
    form[0].value = '';
    getBooks();
}


async function deleteFunc(e) {
    let book = e.target.parentElement.parentElement;
    let url = 'http://localhost:3030/jsonstore/collections/books/' + book.id;

    try {
        let response = await fetch (url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let data = await response.json();

        if(data === null) throw new Error('Book doesn\'t exist');

        book.remove();
    } catch (error) {
     console.log(error);   
    }
}

function takeData(e) {
    e.preventDefault()
    
    let formData = new FormData(e.target);

    return createBook(Object.fromEntries(formData));
}

async function createBook(data) {
    
    let url = 'http://localhost:3030/jsonstore/collections/books';
    
    let body = JSON.stringify(data)

    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })

        let promiseData = await response.json();

        if(response.status !== 200) throw new Error(response.statusText)
    } catch (error) {
        console.log(error);
    }
}