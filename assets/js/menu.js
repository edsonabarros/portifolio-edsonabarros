function menuHamburger() {
  const ul = document.querySelector(".header-ul");
  const btnMenu = document.querySelector(".icon-menu i");

  if (ul.classList.contains("open")) {
    ul.classList.remove("open");
    console.log(ul);
  } else {
    ul.classList.add("open");
  }
}
