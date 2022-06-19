let typed = new Typed(".typing", {
  strings: ["Web Developer", "Front-end Developer", "Javascript Developer"],
  typeSpeed: 110,
  BackSpeed: 80,
  loop: true,
});

let showHideButton = document.querySelector("#showHide");

showHideButton.addEventListener("click", () => {
  console.log("abc");
  let aside = document.querySelector("aside");
  let logo = document.querySelector(".logo");
  let nav = document.querySelector(".nav");
  let mainContent = document.querySelector(".main-content");

  aside.classList.toggle("asideWidthToggle");
  logo.classList.toggle("asideNoneDisplay");
  nav.classList.toggle("asideNoneDisplay");
  mainContent.classList.toggle("main-content-toggle");
});
