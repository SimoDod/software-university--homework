function solution() {
  let sectionEl = document.getElementById("main");

  fetch("http://localhost:3030/jsonstore/advanced/articles/list")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((post) => {
        sectionEl.innerHTML += `<div class="accordion">` +
            `<div class="head">` +
                `<span>${post.title}</span>` +
                `<button class="button" id="${post._id}" onclick="showMore(event)">More</button>` +
            `</div>` +
            `<div class="extra">` +
                `<p></p>` +
            `</div>` +
            `</div>`;
      });
    })
    .catch((error) => console.log(error));
}
solution();

async function showMore(e) {
    let targetId = e.target.id;
    let url = `http://localhost:3030/jsonstore/advanced/articles/details/${targetId}`
    
    let extraDiv = e.target.parentElement.parentElement.children[1];
    let extraTextP = extraDiv.children[0];
    
    try {
        let response = await fetch(url);
        let data = await response.json();
        
        if(!response.ok) throw new Error('Error')
        
        extraTextP.textContent = data.content;

        if(e.target.textContent === 'More') {
            extraDiv.style.display = 'block';
            e.target.textContent = 'Less';
        } else {
            extraDiv.style.display = 'none';
            e.target.textContent = 'More';
        }
        
    } catch (error) {
        console.log(error);
    }
}
