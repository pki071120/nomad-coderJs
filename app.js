const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginsubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  console.log(event);
  alert("clicked");
}

loginForm.addEventListener("submit", onLoginsubmit);
link.addEventListener("click", handleLinkClick);
