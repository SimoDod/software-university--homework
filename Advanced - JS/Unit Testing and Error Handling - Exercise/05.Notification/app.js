function notify(message) {
  let divElToChange = document.getElementById('notification')
  
  divElToChange.style.display = 'block'
  divElToChange.textContent = message;
  divElToChange.addEventListener('click', onClick)

  function onClick(e) {
    e.target.style.display = 'none'
  }
}