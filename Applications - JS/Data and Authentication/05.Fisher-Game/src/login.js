let token = sessionStorage.getItem('accessToken');
let email = sessionStorage.getItem('email');

if(token) {
    document.querySelector('.email span').textContent = email;
    document.getElementById('user').style.display = 'inline';
    document.getElementById('guest').style.display = 'none';
} else {
    document.querySelector('.email span').textContent = 'guest';
    document.getElementById('guest').style.display = 'inline';
    document.getElementById('user').style.display = 'none';
}

document.getElementById('login-form').addEventListener('submit',async (e)=> {
    e.preventDefault()
    
    const form = new FormData(e.target);

    const body = JSON.stringify(Object.fromEntries(form));

    try {
        let url = 'http://localhost:3030/users/login';

        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
        // { email: "", password: "", rePass: "", _createdOn: , _id: "", accessToken: "" }
        const data = await response.json();
        
        if(response.status !== 200) throw new Error(response.statusText);

        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('id', data._id)

        document.querySelector('.email span').textContent = data.email;
        window.location = 'index.html';
    } catch (error) {
        console.log(error);
    }
})