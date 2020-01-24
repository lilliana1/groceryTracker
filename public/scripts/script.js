$(function() {
  const createAccount = document.querySelector(".createAccount");

  createAccount.addEventListener("click", event => {
    event.preventDefault();

    let formData = document.querySelector(".create-account-form");
    console.log(formData);
  });
});

