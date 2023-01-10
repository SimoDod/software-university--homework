window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let storyTitle = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let storyText = document.getElementById('story');

  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', publishBtnFunc);

  let ulToAppend = document.getElementById('preview-list');

  let mainDiv = document.getElementById('main');

  function publishBtnFunc(e) {
    
     if(!firstName.value || !lastName.value || !age.value || !storyTitle.value || !storyText.value) {
      return;
    } 

    let li = document.createElement('li');
    li.classList.add('story-info');
    
    li.innerHTML = `<article>`+
                    `<h4>Name: ${firstName.value} ${lastName.value}</h4>`+
                    `<p>Age: ${age.value}</p>` +
                    `<p>Title: ${storyTitle.value}</p>` +
                    `<p>Genre: ${genre.value}</p>` +
                    `<p>${storyText.value}</p>` +
                    `</article>`

    let saveBtn = document.createElement('button');
    saveBtn.addEventListener('click', saveBtnFunc);
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save Story'

    let editBtn = document.createElement('button')
    editBtn.addEventListener('click', editBtnFunc);
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit Story';

    let deleteBtn = document.createElement('button')
    deleteBtn.addEventListener('click', deleteBtnFunc);
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete Story';

    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    ulToAppend.appendChild(li)

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    storyText.value = '';
    e.target.disabled = true;
  }

  function saveBtnFunc(e) {
    let toDelete = Array.from(mainDiv.children);
    toDelete.forEach(child => child.remove())
    
    let h1 = document.createElement('h1');
    h1.textContent = "Your scary story is saved!"
    mainDiv.appendChild(h1)
  }

  function editBtnFunc(e) {
    let elements = e.target.parentElement.querySelector('article');
    let elToAppend = Array.from(elements.children);
    //(6) [h4, p, p, p, p, p]
    let names = elToAppend[0].textContent.split('Name: ');
    names = names.join('').split(' ')
    
    firstName.value = names[0];
    lastName.value = names[1];
    age.value = elToAppend[1].textContent.split('Age: ').join('');
    storyTitle.value = elToAppend[2].textContent.split('Title: ').join('');
    storyText.value = elToAppend[4].textContent;
    genre.value = elToAppend[3].textContent.split('Genre: ').join('');;
    publishBtn.disabled = false;
    e.target.parentElement.remove();
  }

  function deleteBtnFunc(e) {
    e.target.parentElement.remove();
    publishBtn.disabled = false;
  }
}
