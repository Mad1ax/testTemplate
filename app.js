const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    changeSlide("up");
  } else if (event.key === "ArrowDown") {
    changeSlide("down");
  }
});

let mainLogo = document.querySelector('#mainLogo')
mainLogo.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("logo_clicked");
});

// window.addEventListener('scroll', e => {
//     window.scrollTo({top: 0})
//     console.log('scrollo')
//   })

document.addEventListener("wheel", (event) => {
    event.preventDefault()
  if (event.wheelDeltaY === 120) {
    changeSlide("up");
  }
  if (event.wheelDeltaY === -120) {
    changeSlide("down");
  }
  event.wheelDeltaY === 120
    ? console.log("scrollUp")
    : console.log("scrollDown");
  console.log(event.wheelDeltaY);
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

let buttonAbout = document.querySelector("#buttonAbout");
buttonAbout.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click1");
  changeSlideByNav(3);
});

let buttonService = document.querySelector("#buttonService");
buttonService.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click2");
  changeSlideByNav(2);
});

let buttonExample = document.querySelector("#buttonExample");
buttonExample.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click3");
  changeSlideByNav(1);
});

let buttonContact = document.querySelector("#buttonContact");
buttonContact.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click4");
  changeSlideByNav(0);
});

let changeSlideByNav = (num) => {
  activeSlideIndex = num;
  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};
