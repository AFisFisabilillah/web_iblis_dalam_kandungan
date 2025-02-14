let navbar = document.getElementsByTagName("nav")[0];
let jumbotron = document.querySelector(".jumbotron-header");
let fadeIn = document.querySelectorAll(".fade-in");
let sahdow = document.querySelector(".profile-shadow");
let fadeRight = document.querySelectorAll(".fade-right");
let fadeLeft = document.querySelectorAll(".fade-left");


window.addEventListener("scroll", function (e) {
  navabarScrolled(navbar);
});

window.addEventListener("DOMContentLoaded", function (e) {
  setTimeout(() => {
    jumbotron.classList.add("fade-y-active");
  }, 300);
});

window.addEventListener("scroll", function (e) {
  fadeInAnimation();
  shadowAnimation();
  fadeLeftAnimation();
  fadeRightAnimation();
});

function navabarScrolled(navbar) {
  let scrollPosition = this.window.scrollY;
  if (scrollPosition > 50) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
}

function fadeInAnimation() {
  fadeIn.forEach((fade) => {
    const tinggiFadeIn = fade.getBoundingClientRect().top;
    let tinggiWindow = window.innerHeight;

    if (tinggiFadeIn < tinggiWindow - 100) {
      fade.classList.add("fade-y-active");
    }
  });
}
function fadeRightAnimation() {
  fadeRight.forEach((fade) => {
    const tinggiFadeIn = fade.getBoundingClientRect().top;
    let tinggiWindow = window.innerHeight;

    if (tinggiFadeIn < tinggiWindow - 100) {
      fade.classList.add("fade-x-active");
    }
  });
}

function fadeLeftAnimation() {
  fadeLeft.forEach((fade) => {
    const tinggiFadeIn = fade.getBoundingClientRect().top;
    let tinggiWindow = window.innerHeight;

    if (tinggiFadeIn < tinggiWindow - 100) {
      fade.classList.add("fade-x-active");
    }
  });
}

function shadowAnimation() {
  const tinggiFadeIn = sahdow.getBoundingClientRect().top;

  let tinggiWindow = window.innerHeight;

  if (tinggiFadeIn < tinggiWindow - 150) {
    setTimeout(() => {
        sahdow.classList.add("shadow-custom-active");
    }, 400);
  }
}
