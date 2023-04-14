// Form logic
const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const loginFormData = new FormData(loginForm); // Passes the loginfForm to the FormData function, new because FormData is a constructor
  console.log(loginForm);
});
