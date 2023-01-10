function attachEvents() {
  document.getElementById("btnLoadPosts").addEventListener("click", loadPosts);
  document.getElementById("btnViewPost").addEventListener("click", showPosts);
}

async function loadPosts(e) {
  let url = `http://localhost:3030/jsonstore/blog/posts`;

  try {
    let response = await fetch(url);
    if (response.status !== 200) throw new Error("Error");
    let data = await response.json();

    document.getElementById("posts").innerHTML = "";

    Object.entries(data).forEach(([id, info]) => {
      let option = document.createElement("option");
      option.setAttribute("value", `${id}`);
      option.textContent = info.title;
      document.getElementById("posts").appendChild(option);
    });
  } catch (error) {
    console.log(error);
  }
}

async function displayPD() {
    let optionId = document.getElementById("posts").value;
    try {
        let res = await fetch(`http://localhost:3030/jsonstore/blog/posts`);
        if(res.status !== 200) throw new Error('Error');
        let dat = await res.json();
        
        let bodyToShow = Object.entries(dat).find(([id, info]) => optionId === id);
        if(!bodyToShow) throw new Error('No Body');
        document.getElementById('post-title').textContent = bodyToShow[1].title
        document.getElementById('post-body').textContent = bodyToShow[1].body;
    } catch (error) {
        console.log(error);
    }
}

async function showPosts(e) {
  let optionId = document.getElementById("posts").value;
  let comments = document.getElementById("post-comments");
  let url = `http://localhost:3030/jsonstore/blog/comments`;
  displayPD()
  try {
    if(!optionId) throw new Error('No Option Selected');  
    let response = await fetch(url);
    if (response.status !== 200) throw new Error("Error");
    let data = await response.json();
    
    comments.innerHTML = "";

    let currOptions = Object.entries(data).filter(([id, info]) => info.postId === optionId);
      
      for (const [id, option] of currOptions) {
        let li = document.createElement("li");
        li.setAttribute("id", `${id}`);
        li.textContent = option.text;
        comments.appendChild(li);
      }
     
  } catch (error) {
    console.log(error);
  }
}
attachEvents();
