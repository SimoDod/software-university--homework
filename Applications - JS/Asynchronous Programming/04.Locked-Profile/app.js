async function lockedProfile() {
  
  let profile = document.querySelector("#main .profile");
  profile.remove();
  
  let toHide = profile.getElementsByClassName("user1Username")[0];
  toHide.style.display = "none";

  let mainElement = document.getElementById("main");
  let url = "http://localhost:3030/jsonstore/advanced/profiles";

  try {
    
    let response = await fetch(url);
    let data = await response.json();
    
    if(!response.ok) {
      throw new Error('Error')
    }

    for (const [userId, userInfo] of Object.entries(data)) {
      let template = profile.cloneNode(true);
      template.id = userId;
      template.addEventListener("click", showMore);
      let inputFields = template.querySelectorAll("input");
      
      inputFields[0].name = userId;
      inputFields[1].name = userId;
      inputFields[2].value = userInfo.username;
      inputFields[3].value = userInfo.email;
      inputFields[4].value = userInfo.age;
      
      mainElement.appendChild(template);
    }
  } catch (error) {
    console.log(error);
  }
  
  function showMore(e) {
    let target = e.target.parentElement.querySelector(".user1Username");
    let lockCheck = e.target.parentElement.querySelectorAll("input")[0];
   
    if (e.target.nodeName !== "BUTTON") return;
    if (lockCheck.checked) return;

    if (target.style.display === "none") {
      target.style.display = "block";
      e.target.textContent = "Hide it";
    } else {
      target.style.display = "none";
      e.target.textContent = "Show more";
    }
  }
}
