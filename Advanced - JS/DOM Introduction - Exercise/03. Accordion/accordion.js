function toggle() {
    let buttonElement = document.querySelector(".button").textContent;
    
    if (buttonElement === "More") {
      document.getElementById("extra").style = "display: block";
      document.querySelector(".button").textContent = "Less";
    } else {
      document.getElementById("extra").style = "display: none";
      document.querySelector(".button").textContent = "More";
    };
  }