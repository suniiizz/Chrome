const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  // loginForm에 .hidden 클래스 추가
  loginForm.classList.add(HIDDEN);
  // loginInput의 값을 username에 할당
  const username = loginInput.value;
  // localStorage.setItem(key, value) - key, value 추가
  localStorage.setItem(USERNAME, username);
  paintGreeitngs(username);
}

function paintGreeitngs(username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN);
}

// localStorage.getItem(value) - value 읽어오기
const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreeitngs(savedUsername);
}
