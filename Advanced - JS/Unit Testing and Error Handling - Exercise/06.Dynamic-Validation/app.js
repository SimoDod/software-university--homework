function validate() {
  let inputEl = document.getElementById("email");
  inputEl.addEventListener("change", onChange);

  let emailPattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  function onChange(e) {
    let valueToCheck = e.target.value;
    if (!emailPattern.test(valueToCheck)) {
      e.target.classList.add("error");
    } else {
      e.target.classList.remove("error");
    }
  }
}
