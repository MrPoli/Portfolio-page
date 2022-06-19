var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;

const mainWrapperDivFirstChild = document.querySelector(
  "main .wrapper div:first-child"
);
const mainWrapperDivSecondChild = document.querySelector(
  "main .wrapper div:nth-child(2)"
);
const mainWrapperDivFirstChildDiv = document.querySelector(
  "main .wrapper > div:first-child div"
);
const mainWrapperDivSecondChildDiv = document.querySelector(
  "main .wrapper > div:nth-child(2) div"
);
const mainTextClass = document.querySelector(".text");

const divTextSpan = document.querySelector("main .text span");
const divTextSpan2 = document.querySelector("main .text div~div span");
let devText = "<web developer>";

if (window.innerWidth > 767 && !isTouch) {
  function doSetTimeoutDev(i, div, text) {
    setTimeout(function () {
      mainWrapperDivFirstChildDiv.innerHTML += devText.charAt(i);
    }, 1000 + i * 80);
  }

  function devTextWrite() {
    for (var i = 0; i <= devText.length; i++) {
      doSetTimeoutDev(i);
    }
  }

  function leaveWrapper() {
    divTextSpan.style.color = "var(--main-color)";
    divTextSpan2.style.backgroundColor = "var(--main-color)";
  }

  function AttorneyTextWrite() {
    let newDiv = document.createElement("div");
    mainWrapperDivSecondChildDiv.appendChild(newDiv);
  }

  mainWrapperDivFirstChild.addEventListener("mouseenter", () => {
    divTextSpan.style.color = "var(--dev-color)";
    divTextSpan2.style.backgroundColor = "var(--dev-color)";
    mainWrapperDivFirstChildDiv.classList.add("animationLeftToRight");
  });

  mainWrapperDivSecondChild.addEventListener("mouseenter", () => {
    divTextSpan.style.color = "var(--attorney-color)";
    divTextSpan2.style.backgroundColor = "var(--attorney-color)";
    mainWrapperDivSecondChildDiv.classList.add("animationRightToLeft");
  });
  mainWrapperDivFirstChild.addEventListener("click", () => {
    window.location = "./Web developer/index.html";
  });
  mainWrapperDivSecondChild.addEventListener("click", () => {
    window.location = "http://www.kancelaria.poliszuk.pl";
  });

  mainWrapperDivFirstChild.addEventListener("mouseleave", leaveWrapper);
  mainWrapperDivSecondChild.addEventListener("mouseleave", leaveWrapper);
} else {
  let attorneyButton = document.createElement("button");
  let devButton = document.createElement("button");

  mainWrapperDivFirstChild.addEventListener("click", () => {
    divTextSpan.style.color = "var(--dev-color)";
    divTextSpan2.style.backgroundColor = "var(--dev-color)";
    devButton.style.color = "var(--dev-color)";
    attorneyButton.style.color = "var(--main-color)";
    devButton.style.borderColor = "var(--dev-color)";
    attorneyButton.style.borderColor = "var(--main-color)";
    devButton.classList.add("animationShake");
    attorneyButton.classList.remove("animationShake");
  });

  mainWrapperDivSecondChild.addEventListener("click", () => {
    divTextSpan.style.color = "var(--attorney-color)";
    divTextSpan2.style.backgroundColor = "var(--attorney-color)";
    attorneyButton.style.color = "var(--attorney-color)";
    devButton.style.color = "var(--main-color)";
    attorneyButton.style.borderColor = "var(--attorney-color)";
    devButton.style.borderColor = "var(--main-color)";
    devButton.classList.remove("animationShake");
    attorneyButton.classList.add("animationShake");
  });

  mainTextClass.addEventListener("click", () => {
    divTextSpan.style.color = "var(--main-color)";
    divTextSpan2.style.backgroundColor = "var(--main-color)";
    devButton.style.color = "var(--main-color)";
    attorneyButton.style.color = "var(--main-color)";
    devButton.style.borderColor = "var(--main-color)";
    attorneyButton.style.borderColor = "var(--main-color)";
    devButton.classList.remove("animationShake");
    attorneyButton.classList.remove("animationShake");
  });

  function professionNamesAndButtons() {
    mainWrapperDivFirstChildDiv.style.cssText += "width: 100%";
    let devTextTemp = document.createTextNode("<web developer>");
    mainWrapperDivFirstChildDiv.appendChild(devTextTemp);
    mainWrapperDivSecondChildDiv.style.cssText += "width: 100%";
    devButton.innerHTML = '<i class="fa-solid fa-code"></i>';
    devButton.classList.add("btn");
    mainWrapperDivFirstChild.appendChild(devButton);

    attorneyButton.innerHTML = '<i class="fa-solid fa-section"></i>';
    attorneyButton.classList.add("btn2");
    mainWrapperDivSecondChild.appendChild(attorneyButton);
  }

  attorneyButton.addEventListener("click", () => {
    window.location = "http://www.kancelaria.poliszuk.pl";
  });

  devButton.addEventListener("click", () => {
    window.location = "./Web developer/index.html";
  });

  professionNamesAndButtons();

  // mainWrapperDivSecondChild.addEventListener("click", () => {
  //   window.location = "http://www.kancelaria.poliszuk.pl";
  // });
}
