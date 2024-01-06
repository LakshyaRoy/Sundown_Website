// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

let elemContainer = document.querySelector("#elemContainer");
let fixedImg = document.querySelector("#fixedImage");
elemContainer.addEventListener("mouseenter", function () {
  fixedImg.style.display = "block";
});
elemContainer.addEventListener("mouseleave", function () {
  fixedImg.style.display = "none";
});

let elem = document.querySelectorAll(".elem");

elem.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    let image = elem.getAttribute("data-image");
    fixedImg.style.backgroundImage = `url(${image})`;
  });
});
