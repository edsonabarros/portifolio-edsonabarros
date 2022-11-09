function menuHamburger() {
  const ul = document.querySelectorAll(".ul-menu");
  const ulList = document.querySelector(".ul-menu");
  
  if (ulList.classList.contains("open")) {
    for (i = 0; i < ul.length; ++i) {
      console.log(ul[i]);
      ul[i].classList.remove("open");
    }
    console.log(ul);
  } else {
    for (i = 0; i < ul.length; ++i) {
      ul[i].classList.add("open");
    }
    console.log(ul);
  }
}
