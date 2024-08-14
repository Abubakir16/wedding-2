let showModal = document.querySelector(".show_menu");
let show_menu = document.querySelector(".menu");
let menu__inner = document.querySelector(".menu__inner");
let exit = document.querySelector(".exit img");

showModal.addEventListener("click", () => {
  show_menu.classList.add("active");
});

exit.addEventListener("click", () => {
  show_menu.classList.remove("active");
});

show_menu.addEventListener("click", () => {
  show_menu.classList.remove("active");
});

menu__inner.addEventListener("click", (e) => {
  e.stopPropagation();
});
