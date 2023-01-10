let token = sessionStorage.getItem('accessToken');

if(token) {
    /* document.querySelector('.email span').textContent = email; */
    document.getElementById('user').style.display = 'inline';
    document.getElementById('guest').style.display = 'none';
} else {
    /* document.querySelector('.email span').textContent = 'guest'; */
    document.getElementById('guest').style.display = 'inline';
    document.getElementById('user').style.display = 'none';
} 

document.getElementById('register-form').addEventListener('submit', async (e)=> {
    e.preventDefault()
    const url = 'http://localhost:3030/users/register';

    const form = new FormData(e.target);

    const {email, password, rePass} = Object.fromEntries(form);
    
    if(password !== rePass) throw new Error('passwords doesn\'t match')
    if(!password || !email) throw new Error('Empty Fields');
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const data = await response.json();
        //{ email: "", password: "", _createdOn: 1667637925268, _id: "", accessToken: "" }
        if(response.status !== 200) throw new Error(response.statusText);

       /*  sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('accessToken', data.accessToken); */
        
        //document.querySelector('.email span').textContent = data.email;
        window.location = 'index.html';

    } catch (error) {
        console.log(error);
    }
})