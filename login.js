let registerForm = document.getElementById("registerForm");
let loginForm = document.getElementById("loginForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    location.href = "login.html";
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;
    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (user === savedUser && pass === savedPass) {
      localStorage.setItem("loggedInUser", user);
      location.href = "home.html";
    } else {
      alert("Invalid username or password");
    }
  });
}
