export function authentication(data, token) {
    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('username', data.email);
//Object { email: "", username: "", _id: "", accessToken: "" }
    sessionStorage.setItem('id', data._id);
}

export function userStatus() {
    let token = sessionStorage.getItem('accessToken');
    let ownerId = sessionStorage.getItem('id');
    let name = sessionStorage.getItem('username')
    if (!token) {
        document.getElementById("user").style.display = "none";
        document.getElementById("guest").style.display = "inline";
        document.getElementById('userGreetings').textContent = 'guest'
        return ownerId;
      } else {
        document.getElementById("guest").style.display = "none";
        document.getElementById("user").style.display = "inline";
        document.getElementById('userGreetings').textContent = name;
        return ownerId;
      }
}
