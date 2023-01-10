function validate() {
  let submitButton = document.getElementById("submit");
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirm-password");
  let companyCheck = document.getElementById("company");
  let companyNumber = document.getElementById("companyNumber");

  companyCheck.addEventListener("click", (e) => {
    if (companyCheck.checked) {
      document.getElementById("companyInfo").style.display = "block";
    } else {
      document.getElementById("companyInfo").style.display = "none";
    }
  });

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    validateInputs();
  });

  let isValidEmail = (input) => {
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;

    return emailPattern.test(input);
  };

  let isValidUsername = (input) => {
    let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    return usernamePattern.test(input);
  };

  let isValidPassword = (input) => {
    let passwordPattern = /^[\w]{5,15}$/;
    return passwordPattern.test(input);
  };

  const validateInputs = () => {
    let usernameValue = username.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    let confirmPasswordValue = confirmPassword.value;
    let companyNumberValue = companyNumber.value;

    isValidUsername(usernameValue)
      ? (username.style.borderColor = "")
      : (username.style.borderColor = "red");

    isValidEmail(emailValue)
      ? (email.style.borderColor = "")
      : (email.style.borderColor = "red");

    isValidPassword(passwordValue)
      ? (password.style.borderColor = "")
      : (password.style.borderColor = "red");

    isValidPassword(confirmPasswordValue)
      ? (confirmPassword.style.borderColor = "")
      : (confirmPassword.style.borderColor = "red");

    if (passwordValue !== confirmPasswordValue) {
      password.style.borderColor = "";
      confirmPassword.style.borderColor = "";

      password.style.borderColor = "red";
      confirmPassword.style.borderColor = "red";
    }

    if (companyCheck.checked) {
      companyNumberValue = Number(companyNumberValue)
      if (companyNumberValue < 1000 || companyNumberValue > 9999) {
        companyNumber.style.borderColor = "red";
      } else {
        companyNumber.style.borderColor = "";
      }
    }

    let usernameTest = username.style.borderColor;
    let emailTest = email.style.borderColor;
    let passwordTest = password.style.borderColor;
    let confirmPasswordTest = confirmPassword.style.borderColor;
    let companyNumberTest = companyNumber.style.borderColor;

    if (
      usernameTest === "red" ||
      emailTest === "red" ||
      passwordTest === "red" ||
      confirmPasswordTest === "red" ||
      companyNumberTest === "red"
    ) {
      document.getElementById('valid').style.display= 'none'
    } else {
      document.getElementById('valid').style.display= 'block'
    }
  };
}
