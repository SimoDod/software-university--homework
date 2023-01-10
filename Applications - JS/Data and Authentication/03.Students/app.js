function attachEvents() {
    const form = document.getElementById('form')
    form.addEventListener('submit', onSubmit);

    window.addEventListener('load', getHendler)
}
attachEvents()

function render(data) {
    const results = document.getElementById('results');
   
    const tbody = document.querySelector('#results tbody');
    tbody.innerHTML = '';
    
    data.forEach(person => {
        const tr = document.createElement('tr');
        
        const tdFirstName = document.createElement('td');
        const tdLastName = document.createElement('td');
        const tdFacNum = document.createElement('td');
        const tdGrade = document.createElement('td');

        tdFirstName.textContent = person.firstName;
        tdLastName.textContent = person.lastName;
        tdFacNum.textContent = person.facultyNumber;
        tdGrade.textContent = person.grade;
        
        tr.appendChild(tdFirstName)
        tr.appendChild(tdLastName)
        tr.appendChild(tdFacNum)
        tr.appendChild(tdGrade)

        tbody.appendChild(tr)

        results.appendChild(tbody)
    });
}

async function getHendler() {
    const url = 'http://localhost:3030/jsonstore/collections/students';

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if(response.status !== 200) throw new Error(response.statusText);

        return render(Object.values(data))
    } catch (error) {
        console.log(error);
    }
}

async function onSubmit(e) {
    e.preventDefault();
    const url = 'http://localhost:3030/jsonstore/collections/students'
    
    const formData = new FormData(e.target);
    let body = JSON.stringify(Object.fromEntries(formData));

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        })

        const data = await response.json();

        if(response.status !== 200) throw new Error(response.statusText);

        getHendler();

    } catch (error) {
        console.log(error);
    }
    
} 