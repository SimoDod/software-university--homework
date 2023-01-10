function solve() {
    let hireWorkerBtn = document.getElementById('add-worker');
    hireWorkerBtn.addEventListener('click', hireWorkerBtnFunc);
    
    let firstNameField = document.getElementById('fname');
    let lastNameField = document.getElementById('lname');
    let emailField = document.getElementById('email');
    let birthDateField = document.getElementById('birth');
    let positionField = document.getElementById('position')
    let salaryField = document.getElementById('salary');
    let sumSalary = document.getElementById('sum');
    
    let tbodyToAppend = document.getElementById('tbody')
    let sum = 0;
    

    function hireWorkerBtnFunc(e) {
        e.preventDefault();
        
        if(!firstNameField.value || !lastNameField.value || !emailField.value ||
            !birthDateField.value || !positionField.value || !salaryField.value) {
                return;
            }
        sum+= Number(salaryField.value);
        let tr = document.createElement('tr');

        tr.innerHTML = `<td>${firstNameField.value}</td>` +
                        `<td>${lastNameField.value}</td>` +
                        `<td>${emailField.value}</td>` +
                        `<td>${birthDateField.value}</td>` +
                        `<td>${positionField.value}</td>` +
                        `<td>${salaryField.value}</td>`;
            
        let td = document.createElement('td');

        let firedBtn = document.createElement('button');
        firedBtn.addEventListener('click', firedBtnFunc);
        firedBtn.classList.add('fired');
        firedBtn.textContent = 'Fired';

        let editBtn = document.createElement('button');
        editBtn.addEventListener('click', editBtnFunc);
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';

        td.appendChild(firedBtn);
        td.appendChild(editBtn);
        tr.appendChild(td);
        tbodyToAppend.appendChild(tr)
        
        sumSalary.textContent = sum.toFixed(2);

        firstNameField.value = '';
        lastNameField.value = '';
        emailField.value = '';
        birthDateField.value = '';
        positionField.value = '';
        salaryField.value = '';
    }

    function firedBtnFunc(e) {
        let data = e.target.parentElement.parentElement;
        sum -= Number(data.children[5].textContent);
        sumSalary.textContent = sum.toFixed(2)
        
        e.target.parentElement.parentElement.remove();
    }

    function editBtnFunc(e) {
        let data = e.target.parentElement.parentElement;
        
        firstNameField.value = data.children[0].textContent;
        lastNameField.value = data.children[1].textContent;
        emailField.value = data.children[2].textContent;
        birthDateField.value = data.children[3].textContent;
        positionField.value = data.children[4].textContent;
        salaryField.value = data.children[5].textContent;
        sum -= Number(data.children[5].textContent);
        sumSalary.textContent = sum.toFixed(2)
        data.remove();
    }
}
solve()