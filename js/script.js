// const header = document.querySelector("header");
// window.addEventListener("scroll", function () {
//   header.classList.toggle("sticky", this.window.scrollY > 0);
// });

// let menu = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// menu.onclick = () => {
//   menu.classList.toggle("bx-x");
//   navbar.classList.toggle("open");
// };

// window.onscroll = () => {
//   menu.classList.toggle("bx-x");
//   navbar.classList.toggle("open");
// };
document.getElementById("form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const { name, email, message, phone_No } = e.target.elements;
  const data = {
    name: name?.value,
    email: email?.value,
    message: message?.value,
    phone_No: phone_No?.value,
  };
  console.log();

  const response = await fetch("http://localhost:3000/contactForm", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log(result);
});
