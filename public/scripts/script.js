$(function() {
  const createAccount = document.querySelector(".createAccount");

  createAccount.addEventListener("click", event => {
    event.preventDefault();
    let passMatch = document.querySelector("#passMatch");
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let passwordTwo = document.querySelector("#passwordTwo").value;

    let userData = {
      firstName,
      lastName,
      email,
      password
    };
    console.log(userData);

    passMatch.textContent = "";

    if (password !== passwordTwo) {
      passMatch.textContent = "Passwords do not match";
    } else {
      fetch("/api/createUser", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(`Error occured ${err}`);
        });
    }
  });
});

