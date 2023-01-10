let token = sessionStorage.getItem('accessToken');
let email = sessionStorage.getItem('email');
let idPlus = sessionStorage.getItem('id')

window.addEventListener('load', loadCatches)

export function isOwnerCheck() {
    if(token) {
        document.querySelector('.email span').textContent = email;
        document.getElementById('user').style.display = 'inline';
        document.getElementById('guest').style.display = 'none';
    
        document.querySelectorAll('button').forEach(b=> {
            let dataId = b.getAttribute('data-id')
            let addButton = b.getAttribute('class');
        
            if(idPlus === dataId) {
                b.disabled = false
            } else {
                b.disabled = true;
            }
            if(addButton === 'add') b.disabled = false;
        });
        
    } else {
        document.querySelector('.email span').textContent = 'guest';
        document.getElementById('guest').style.display = 'inline';
        document.getElementById('user').style.display = 'none';
    
        document.querySelectorAll('button').forEach(b=> b.disabled = true);
        document.querySelector('.load').disabled = false;
    }
}
isOwnerCheck()


document.getElementById('logout').addEventListener('click', logoutBtn);

async function logoutBtn() {
    const url = 'http://localhost:3030/users/logout'
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Authorization': token
            }
            
        })
        
        if(response.status !== 204) throw new Error(response.statusText);
        sessionStorage.clear();
        window.location = 'index.html'
    } catch (error) {
        console.log(error);
    }
}

document.querySelector('.load').addEventListener('click', loadCatches) 
    

async function loadCatches() {
    const url = 'http://localhost:3030/data/catches';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if(response.status !== 200) throw new Error(response.statusText);

        renderCatches(data)
        isOwnerCheck()
    } catch (error) {
       console.log(error);
    }
}

function renderCatches(catches) {
    let catchesList = document.getElementById('catches');
    catchesList.innerHTML = '';
    //{ _ownerId: "", angler: "", weight: , species: "", location: "", bait: "", captureTime: , _createdOn: , _id: "" }
    for (const catche of catches) {
        catchesList.innerHTML += `<div class="catch">
        <label>Angler</label>
        <input type="text" class="angler" value="${catche.angler}">
        <label>Weight</label>
        <input type="text" class="weight" value="${catche.weight}">
        <label>Species</label>
        <input type="text" class="species" value="${catche.species}">
        <label>Location</label>
        <input type="text" class="location" value="${catche.location}">
        <label>Bait</label>
        <input type="text" class="bait" value="${catche.bait}">
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${catche.captureTime}">
        <button class="update" data-id="${catche._ownerId}" name="${catche._id}">Update</button>
        <button class="delete" data-id="${catche._ownerId}" name="${catche._id}">Delete</button>
    </div>`
    }
    const updateBtns = document.getElementsByClassName('update');
    for (const button of updateBtns) {
        button.addEventListener('click', updateCatchDataCollector)
    }
    const deleteBtns = document.getElementsByClassName('delete');
    for (const button of deleteBtns) {
        button.addEventListener('click', deleteCatch)
    }
}

function updateCatchDataCollector(e) {
    const catchId = e.target.getAttribute('name')
    const currCatch = e.target.parentElement;
    const fields = currCatch.children
    
    const body = JSON.stringify({
        angler: fields[1].value,
        weight: fields[3].value,
        species: fields[5].value,
        location: fields[7].value,
        bait: fields[9].value,
        captureTime: fields[11].value
    });

    restServiceHandler("PUT", body, catchId)
    //loadCatches()
}

async function deleteCatch(e) {
    const catchId = e.target.getAttribute('name');
    const currCatch = e.target.parentElement;

    let url = 'http://localhost:3030/data/catches/' + catchId;

    try {
        let response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'X-Authorization': token
            }
        })
        console.log(token);
        if(response.status !== 200) throw new Error('Not Authorizated');
        currCatch.remove()
    } catch (error) {
        console.log(error);
    }
    
}

async function restServiceHandler(method, body, catchId) {
    const url = 'http://localhost:3030/data/catches/' + catchId;

    try {
        let response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: body
        })

        if(response.status !== 200) throw new Error(response.statusText)
    } catch (error) {
        console.log(error);
    }
}

document.getElementById('addForm').addEventListener('submit', async (e)=> {
    e.preventDefault()
    //{ angler: "", weight: "", species: "", location: "", bait: "", captureTime: "" }
    let url = 'http://localhost:3030/data/catches'
    
    const data = Object.fromEntries(new FormData(e.target));
    
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(data)
        })
        
        if(response.status !== 200) throw new Error(response.statusText)
        
        window.location = 'index.html';
    } catch (error) {
        console.log(error);
    }
   
})