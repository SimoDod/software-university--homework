
function solve() {
    //add mails buttons
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addBtnFunc);
    let resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', resetBtnFunc);

    //input fields 
    let recipientName = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');

    //toAppend
    let listOfMails = document.getElementById('list');
    let sendMails = document.querySelector('.sent-list');
    let trash = document.querySelector('.delete-list');

    function addBtnFunc(e) {
        e.preventDefault()
        let recipientNameValue = recipientName.value;
        let titleValue = title.value;
        let messageValue = message.value;

        if(!recipientNameValue || !titleValue || !messageValue) {
            return
        }

        let li = document.createElement('li');
        let div = document.createElement('div');
        div.id = 'list-action'; //<--- check later!

        //buttons
        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('type', 'submit');
        sendBtn.addEventListener('click', sendBtnFunc);
        sendBtn.textContent = 'Send';
        sendBtn.setAttribute('id','send');

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.addEventListener('click', deleteBtnFunc);
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('id','delete');

        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);

        li.innerHTML = `<h4>Title: ${titleValue}</h4>` + 
                    `<h4>Recipient Name: ${recipientNameValue}</h4>` +
                    `<span>${messageValue}</span>`

        
        li.appendChild(div);

        listOfMails.appendChild(li)
        recipientName.value = '';
        title.value = '';
        message.value = '';
    }

    function resetBtnFunc(e) {
        e.preventDefault();
        recipientName.value = '';
        title.value = '';
        message.value = '';
    }

    function sendBtnFunc(e) {
        
        let parentEl =  e.target.parentElement.parentElement;
        let childrenEl = Array.from(parentEl.children);
        let currRecipientName = childrenEl[1].textContent;
        let curTitle = childrenEl[0].textContent;
        currRecipientName = currRecipientName.split('Recipient Name: ')[1];
        let sentMailLi = document.createElement('li');

        sentMailLi.innerHTML = `<span>To: ${currRecipientName}</span>` +
                                    `<span>${curTitle}</span>`

        let sentMailDeleteBtn = document.createElement('button');
        let sentMailDiv = document.createElement('div');
        
        sentMailDiv.classList.add('btn');
        sentMailDeleteBtn.classList.add('delete')
        sentMailDeleteBtn.type = 'submit'
        sentMailDeleteBtn.textContent = 'Delete'
        sentMailDeleteBtn.addEventListener('click', sentMailDeleteBtnFunc);
        
        sentMailDiv.appendChild(sentMailDeleteBtn);
        sentMailLi.appendChild(sentMailDiv);
        sendMails.appendChild(sentMailLi)

        e.target.parentElement.parentElement.remove();
    }

    function deleteBtnFunc(e) {
        e.target.parentElement.parentElement.remove();
    }

    function sentMailDeleteBtnFunc(e) {
        let currLi = e.target.parentElement.parentElement;
        e.target.parentElement.remove();
        trash.appendChild(currLi) 
    }
}
solve()
