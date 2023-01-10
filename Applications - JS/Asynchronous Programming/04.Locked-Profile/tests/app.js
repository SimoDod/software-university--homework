async function lockedProfile() {
  let url = 'http://localhost:3030/jsonstore/advanced/profiles'
  let main = document.getElementById('main');
  main.innerHTML = '';
  let count = 1;
  
  try {
    let response = await fetch(url)
    if (response.status !== 200) throw new Error(response.statusText);
    let data = await response.json();
    
    Object.values(data).forEach(person => {
      //Person { _id: "fb352199-bcbc-4e1d-a1dc-ed346a6fb49a",
      // username: "John", email: "john@users.bg", age: 31 }
      
      main.innerHTML += `<div class="profile">
      <img src="./iconProfile2.png" class="userIcon" />
      <label>Lock</label>
      <input type="radio" name="user${count}Locked" value="lock" checked>
      <label>Unlock</label>
      <input type="radio" name="user${count}Locked" value="unlock"><br>
      <hr>
      <label>Username</label>
      <input type="text" name="user${count}Username" value="${person.username}" disabled readonly />
      <div id="user${count}HiddenFields" style="display: none;">
        <hr>
        <label>Email:</label>
        <input type="email" name="user${count}Email" value="${person.email}" disabled readonly />
        <label>Age:</label>
        <input type="text" name="user${count}Age" value="${person.age}" disabled readonly />
      </div>
      <button>Show more</button>
    </div>`
    count++;
    })
    
  } catch (error) {
    console.log(error);
  }

  showMore();
}

function showMore() {
  document.querySelectorAll('button').forEach(b => b.addEventListener('click', onClick));
  
  function onClick(e) {
    let target = e.target.parentElement.querySelectorAll('div')[0];
    
    let lockChecker = e.target.parentElement.querySelector('input').checked;
    
    if (lockChecker) return;

    if(e.target.textContent === 'Show more') {
      target.style.display = 'block';
      e.target.textContent = 'Hide it';
    } else {
      target.style.display = 'none';
      e.target.textContent = 'Show more';
    }
    
  }
}