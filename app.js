const btnLogin = document.querySelector('.btn-info');
const closeBtn = document.querySelector('.close');
const logInBg = document.querySelector('.login-bg');
const logIn = document.querySelector('.login');
// Login

btnLogin.addEventListener('click', function () {
  logInBg.classList.add('open');
  setTimeout(function () {
    logIn.classList.add('login-open');
    closeBtn.classList.add('login-open');
  }, 500);
})

closeBtn.addEventListener('click', function () {
  logIn.classList.remove('login-open');
  closeBtn.classList.remove('login-open');
  logInBg.classList.remove('open');
})