let username = localStorage.getItem("loggedInUser");
let usernameDisplay = document.getElementById("usernameDisplay");
let logoutBtn = document.getElementById("logoutBtn");

if (!username) {
  location.href = "login.html";
} else {
  usernameDisplay.textContent = ` Welcome, ${username}`;
}

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  location.href = "login.html";
});

let contain = document.getElementById("contain");

fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((data) => {
    data.map((product) => {
      let div = document.createElement("div");
      let card = document.createElement("div");
      let img = document.createElement("img");
      let h5 = document.createElement("h5");
      let price = document.createElement("p");

      div.classList = "col-sm-6 col-md-4 col-lg-3";
      card.classList = "card h-100 text-center p-3 shadow";
      img.src = product.image;
      img.style.height = "200px";
      img.style.objectFit = "contain";
      img.classList = "card-img-top";
      h5.classList = "card-title mt-3 fs-6";
      h5.textContent = product.title;
      price.classList = "text-success fw-bold";
      price.textContent = `Price: $${product.price}`;

      card.appendChild(img);
      card.appendChild(h5);
      card.appendChild(price);
      div.appendChild(card);
      contain.appendChild(div);
    });
  })