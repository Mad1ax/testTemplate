const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

//buttons and wheel for desktop

upBtn.addEventListener('click', () => changeSlide('up'));

downBtn.addEventListener('click', () => changeSlide('down'));

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    changeSlide('up');
  } else if (event.key === 'ArrowDown') {
    changeSlide('down');
  }
});

document.addEventListener('wheel', (event) => {
  if (event.wheelDeltaY === 120) {
    changeSlide('up');
  } else if (event.wheelDeltaY === -120) {
    changeSlide('down');
  }
});

//swipe for mobile

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let y1 = null;

function handleTouchStart(event) {
  y1 = event.touches[0].clientY;
}

function handleTouchMove(event) {
  if (!y1) {
    return false;
  }
  let y2 = event.touches[0].clientY;
  let yDiff = y2 - y1;

  if (event.touches[0].clientX > sidebar.clientWidth) {
    if (yDiff < -5) {
      changeSlide('up');
    } else if (yDiff > 5) {
      changeSlide('down');
    }
  } else {
    if (yDiff < -5) {
      changeSlide('down');
    } else if (yDiff > 5) {
      changeSlide('up');
    }
  }
  y1 = null;
}

//function change slide
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

const changeSlide = (direction) => {
  if (direction === 'up' && activeSlideIndex < slidesCount - 1) {
    activeSlideIndex++;
    // if (activeSlideIndex === slidesCount) {
    //   activeSlideIndex = 0;
    // }
  } else if (direction === 'down' && activeSlideIndex > 0) {
    activeSlideIndex--;
    // if (activeSlideIndex < 0) {
    //   activeSlideIndex = slidesCount - 1;
    // }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
  console.log(activeSlideIndex);
};

const allNavMenuButtons = document.querySelectorAll('.menu__link');

const activeBtnClassAdder = (e) => {
  allNavMenuButtons.forEach((btn) => btn.classList.remove('menu__link_active'));
  e.classList.add('menu__link_active')
};

allNavMenuButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
	event.preventDefault()
	const {target} = event
	activeBtnClassAdder(target)
	changeSlideByNav(slidesCount-target.getAttribute(`data-number`))
  });
});












//add border to active button

const changeSlideByNav = (num) => {
  activeSlideIndex = num;
  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};

const mainLogo = document.querySelector('#mainLogo');
mainLogo.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('logo_clicked');
});

// //swipe for mobile
// document.addEventListener('touchstart', handleTouchStart, false)
// document.addEventListener('touchmove', handleTouchMove, false)

// // let x1=null
// let y1=null

// function handleTouchStart(event) {
// 	// const firstTouch = event.touches[0]
// 	// x1 = firstTouch.clientX
// 	// y1 = firstTouch.clientY
// 	y1 = event.touches[0].clientY

// }

// function handleTouchMove(event) {
// 	// console.log(event)
// 	// if (!x1||!y1) {return false}
// 	if (!y1) {return false}
// 	// let x2=event.touches[0].clientX
// 	let y2=event.touches[0].clientY
// 	// console.log(x2,y2);
// 	// let xDiff=x2-x1
// 	let yDiff = y2-y1
// 	// console.log(xDiff,yDiff);

// 	// if (Math.abs(xDiff)>Math.abs(yDiff)){
// 	// 	xDiff>0?console.log('right'):console.log('left');;
// 	// } else {
// 		yDiff>0?changeSlide('up'):changeSlide('down');;
// 	// }
// 	// console.log('y1 do', y1);
// 	// x1=null
// 	y1=null
// 	// console.log('y1 posle', y1);
// }

// //()=>{console.log('touchstart')}
// //()=>{console.log('touchmove')}

////////////

// //swipe for mobile

// document.addEventListener('touchstart',handleDocumentTouchStart)
// function handleDocumentTouchStart(event) {
// 	// console.log(event.touches[0]);
// 	console.log('x',event.touches[0].clientX);
// 	console.log('sidebar', sidebar.clientWidth)
// 	console.log('mainSlide', mainSlide.clientWidth)
// 	event.touches[0].clientX>sidebar.clientWidth?console.log('clicked mainBar'):console.log('clicked sideBar');
// }

// sidebar.addEventListener('touchstart', handleTouchStart, false);
// sidebar.addEventListener('touchmove', handleTouchMove, false);

// // mainSlide.addEventListener('touchstart', handleTouchStart, false);
// // mainSlide.addEventListener('touchmove', handleTouchMove, false);

// let y1 = null;

// function handleTouchStart(event) {
//   y1 = event.touches[0].clientY;

// //   console.log('y',event.touches[0].clientY);
// }

// function handleTouchMove(event) {
//   if (!y1) {
//     return false;
//   }
//   let y2 = event.touches[0].clientY;
//   let yDiff = y2 - y1;

//   if (yDiff < -5) {
//     changeSlide('down');
//   } else if (yDiff > 5) {
//     changeSlide('up');
//   }

//   y1 = null;
// }
