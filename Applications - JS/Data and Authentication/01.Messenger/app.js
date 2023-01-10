function attachEvents() {
    const submit = document.getElementById('submit')
     submit.addEventListener('click', onSubmit); 

    const refresh = document.getElementById('refresh');
    refresh.addEventListener('click', onRefresh);
}
attachEvents();

function renderMassages(messages) {
    let textArea = document.getElementById('messages');
    textArea.value = '';

    let buff = [];
    messages.forEach(message => {
        buff.push(`${message.author}: ${message.content}`);
    });

    textArea.value = buff.join('\n')
}

async function onRefresh() {
    let url = 'http://localhost:3030/jsonstore/messenger';

    try {
        let response = await fetch(url);
        let data = await response.json();
        
        if(response.status !== 200) {
            throw new Error('Unable to load messages');
        }

        return renderMassages(Object.values(data));

    } catch (error) {
        alert(error)
    }
}

async function onSubmit(data) {
    let url = 'http://localhost:3030/jsonstore/messenger';

    try {
        let handler = submitHandler('POST');
        
        if(handler === null) throw new Error('Empty fields');

        let response = await fetch(url, handler);
        
        if(response.status !== 200) throw new Error(response.statusText);
        
        onRefresh()
    } catch (error) {
        alert(error);
    }
 
}

function submitHandler(method) {
    let author = document.querySelector('input[name="author"]').value;
    let content = document.querySelector('input[name="content"]').value;
    
    if(!author || !content) return null;
    
    let body = JSON.stringify({author, content})
    
    document.querySelector('input[name="author"]').value = '';
    document.querySelector('input[name="content"]').value = '';
    
    return {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    }
}