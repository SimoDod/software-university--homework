function attachEvents() {
    let buttonLoad = document.getElementById('btnLoad');
    buttonLoad.addEventListener('click', onLoad);

    let createButton = document.getElementById('btnCreate');
    createButton.addEventListener('click', onCreate)
}
attachEvents();

function renderHandler(data) {
    //Object { person: "", phone: ", _id: "" }
    let phoneBook = document.getElementById('phonebook');
    phoneBook.innerHTML = '';
    
    data.forEach(el => {
        let li = document.createElement('li');
        li.textContent = `${el.person}: ${el.phone}`;
        li.id = el._id;

        let liButton = document.createElement('button');
        liButton.textContent = 'Delete';
        liButton.addEventListener('click', onDelete);

        li.appendChild(liButton);
        phoneBook.appendChild(li);
    });
}


async function onLoad() {
    let url = 'http://localhost:3030/jsonstore/phonebook';

    try {
        
        let response = await fetch(url);
        let data = await response.json();

        if(response.status !== 200) throw new Error(response.statusText);
        
        renderHandler(Object.values(data))

    } catch (error) {
        alert(error)
    }

}

async function onDelete(e) {
    let url = 'http://localhost:3030/jsonstore/phonebook'
    let id = e.target.parentElement.id;

    try {
        let handler = restHandler('DELETE', null);
        let response = await fetch(`${url}/${id}`, handler);
        let data = await response.json();

        if(response.status !== 200) throw new Error(response.statusText);
        e.target.parentElement.remove()
    } catch (error) {
        alert(error)
    }
    
}

function fieldsHandler() {
    let person = document.getElementById('person').value;
    let phone = document.getElementById('phone').value;

    if(!person || !phone) return;

    document.getElementById('person').value = '';
    document.getElementById('phone').value = '';
    
    return JSON.stringify({
        person: person,
        phone: phone
    })
    
}

async function onCreate() {
    let bodyFields = fieldsHandler();
    
    try {
        let handler = restHandler('POST', bodyFields);
        let url = 'http://localhost:3030/jsonstore/phonebook';
        
        if(!bodyFields) throw new Error('Empty Fields');
        
        let response = await fetch(url, handler);
        let data = await response.json();

        if(response.status !== 200) throw new Error(response.statusText);

        onLoad()

    } catch (error) {
        alert(error)
    }
}

function restHandler(method, body) {
    
    return {
        method: method,
        headers: {
            'Content-Type': 'application/json', 
        },
        body: body
    }
}