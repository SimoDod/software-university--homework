window.addEventListener("load", solve);

function solve(e) {
    //e.preventDefault()
    let formEl = document.querySelector('form');
    let recievedOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');
    let clearBtn = document.querySelector('.clear-btn');
    clearBtn.addEventListener('click', clear);
    
    let select = formEl.children[1]
    let textArea = formEl.children[3]
    let inputName = formEl.children[5]
    let inputPhone = formEl.children[7]
    
    let btnSendForm = formEl.children[8] 
    btnSendForm.addEventListener('click', createForm) 


    function createForm(e) {
        e.preventDefault()
        let selectValue = select.value;
        let textAreaValue = textArea.value;
        let inputNameValue = inputName.value;
        let inputPhoneValue = inputPhone.value;

        if(!selectValue || !textAreaValue || !inputNameValue || !inputPhoneValue) {
            return;
        }

        let div = document.createElement('div');
        div.classList.add('container');
        div.innerHTML = `<h2>Product type for repair: ${selectValue}</h2>` +
                         `<h3>Client information: ${inputNameValue}, ${inputPhoneValue}</h3>` +
                         `<h4>Description of the problem: ${textAreaValue}</h4>`
                         
        let btnStart = document.createElement('button');
        btnStart.classList.add('start-btn');
        btnStart.textContent = 'Start repair';
        btnStart.addEventListener('click', btnStartFunc);
        div.appendChild(btnStart);    
        
        let btnFinish = document.createElement('button');
        btnFinish.classList.add('finish-btn');
        btnFinish.textContent = 'Finish repair';
        btnFinish.addEventListener('click', btnFinishFunc)
        btnFinish.disabled = true;
        div.appendChild(btnFinish);

        select.value = '';
        textArea.value = '';
        inputName.value = '';
        inputPhone.value = '';
        
        recievedOrders.appendChild(div)
    }

    function btnStartFunc(e) {
        e.target.disabled = true;
        e.target.parentElement.children[4].disabled = false
    }

    function btnFinishFunc(e) {
        let divInfo = e.target.parentElement;
        
        for (const el of Array.from(divInfo.children)) {
            if(el.nodeName === 'BUTTON') {
                el.remove()
            }
        }
        completedOrders.appendChild(divInfo);
    }

    function clear(e) {
        let toClear = Array.from(e.target.parentElement.querySelectorAll('div'));
        toClear.forEach(el => el.remove());
    }
}