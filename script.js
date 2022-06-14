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

const divTextSpan = document.querySelector("main .text span");
const divTextSpan2 = document.querySelector("main .text div~div span");
let pText = "<web developer>";

function leaveWrapper() {
  divTextSpan.style.color = "#e31b6d";
  divTextSpan2.style.backgroundColor = "#e31b6d";
}

function ppp() {
  for (var i = 0; i <= pText.length; i++) {
    doSetTimeout(i);
  }
}

mainWrapperDivFirstChild.addEventListener("mouseenter", () => {
  divTextSpan.style.color = "#03a062";
  divTextSpan2.style.backgroundColor = "#03a062";
  mainWrapperDivFirstChildDiv.classList.add("animationLeftToRight");
});

mainWrapperDivSecondChild.addEventListener("mouseenter", () => {
  divTextSpan.style.color = "#4291ff";
  divTextSpan2.style.backgroundColor = "#4291ff";
  mainWrapperDivSecondChildDiv.classList.add("animationRightToLeft");
});
mainWrapperDivSecondChild.addEventListener("click", () => {
  window.location = "http://www.kancelaria.poliszuk.pl";
});

mainWrapperDivFirstChild.addEventListener("mouseleave", leaveWrapper);
mainWrapperDivSecondChild.addEventListener("mouseleave", leaveWrapper);

function doSetTimeout(i) {
  setTimeout(function () {
    mainWrapperDivFirstChildDiv.innerHTML += pText.charAt(i);
  }, 1000 + i * 100);
}
