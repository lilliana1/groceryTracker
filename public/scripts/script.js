// $(function() {
//   const createAccount = document.querySelector(".createAccount");
//   const logIn = document.querySelector(".logIn");

//   createAccount.addEventListener("click", event => {
//     event.preventDefault();
//     let passMatch = document.querySelector("#passMatch");
//     let firstName = document.querySelector("#firstName").value;
//     let lastName = document.querySelector("#lastName").value;
//     let email = document.querySelector("#email").value;
//     let password = document.querySelector("#password").value;
//     let passwordTwo = document.querySelector("#passwordTwo").value;

//     let userData = {
//       firstName,
//       lastName,
//       email,
//       password
//     };
//     console.log(userData);

//     passMatch.textContent = "";

//     if (password !== passwordTwo) {
//       passMatch.textContent = "Passwords do not match";
//     } else {
//       fetch("/api/createUser", {
//         method: "POST",
//         body: JSON.stringify(userData),
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         }
//       })
//         .then(response => {
//           data = response.json();

//           location.href = "../signin";
//         })
//         .then(data => {
//           console.log(data);
//         })
//         .catch(err => {
//           console.log(`Error occured ${err}`);
//         });
//     }
//   });

//   logIn.addEventListener("submit", event => {
//     event.preventDefault();
//     let email = document.querySelector("#email").value;
//     let password = document.querySelector("#password").value;
//     let userData = {
//       email,
//       password
//     };
//     $.post("/api/login", {
//       email: email,
//       password: password
//     })
//       .then(response => {
//         console.log(response);
//         window.location.href = "../shopping";
//       })
//       .catch(err => {
//         console.log(`Error: ${err}`);
//       });
//   });
// });

function addToCart(id) {
  const url = `/api/addToCart/${id}`;
  const otherParam = {
    method: "POST"
  };

  fetch(url, otherParam).then(data => {
    return data.json;
    location.reload();
  });
}
