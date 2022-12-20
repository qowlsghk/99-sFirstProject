let iframeEle = document.querySelector("iframe");
let videoSrc = ["d1Ua6dFOe_8"];
// iframeEle.src = "https://youtu.com/embed" + videoSrc[index] + "?autoplay=1&mute=1&loop=1";

// window.scrollTo(0, 700);

// 서클 텍스트 슬라이드 애니메이션

let bckC1 = document.querySelector(".bck_circle1");
let bckC2 = document.querySelector(".bck_circle2");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 450) {
    bckC1.style.animation = "slide 1s  ease-out ";
    bckC2.style.animation = "slide1 1s ease-out ";
  } else {
    bckC1.style.animation = "disappear 1s ease-out forwards ";
    bckC2.style.animation = "disappear1 1s ease-out forwards ";
  }
});

// 라인1 애니메이션

let bckL1 = document.querySelector(".bck_line1");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 920) {
    bckL1.style.animation = "borderRadius 1.5s ease-out forwards";
  } else {
    bckL1.style.animation = "borderRadiusBck 1.5s ease-out ";
  }
});

// 서클 3번 애니메이션

let bckC3 = document.querySelector(".bck_circle3");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 2200) {
    bckC3.style.animation = "slide3 1.5s ease-out forwards ";
  } else {
    bckC3.style.animation = "disappear3 1s ease-out  ";
  }
});

//라인 5번 애니메이션

let bckL5 = document.querySelector(".bck_line5");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 4290) {
    bckL5.style.animation = "borderRadius 1.5s ease-out forwards";
  } else {
    bckL5.style.animation = "borderRadiusBck 1.5s ease-out ";
  }
});

//서클 4번 애니메이션

let bckC4 = document.querySelector(".bck_circle4");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 3920) {
    bckC4.style.animation = "slide4 2s ease-out forwards";
  } else {
    bckC4.style.animation = "disappear4 2s ease-out ";
  }
});

//스무스 스크롤링

//<smooth scroll>
function init() {
  new SmoothScroll(document, 100, 18);
}

function SmoothScroll(target, speed, smooth) {
  if (target === document) target = document.scrollingElement || document.documentElement || document.body.parentNode || document.body; // cross browser support for document scrolling

  var moving = false;
  var pos = target.scrollTop;
  var frame = target === document.body && document.documentElement ? document.documentElement : target; // safari is the new IE

  target.addEventListener("mousewheel", scrolled, { passive: false });
  target.addEventListener("DOMMouseScroll", scrolled, { passive: false });

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling

    var delta = normalizeWheelDelta(e);

    pos += -delta * speed;
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

    if (!moving) update();
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta) return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1); // Opera
      else return -e.detail / 3; // Firefox
    } else return e.wheelDelta / 120; // IE,Safari,Chrome
  }

  function update() {
    moving = true;

    var delta = (pos - target.scrollTop) / smooth;

    target.scrollTop += delta;

    if (Math.abs(delta) > 0.5) requestFrame(update);
    else moving = false;
  }

  var requestFrame = (function () {
    // requestAnimationFrame cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  })();
}

init();

//cnt4번 이미지 스와이프

const img = document.querySelector(".egg > img");
let imgArray = new Array();
imgArray[0] = "./img/cnt4-2-all.png";
imgArray[1] = "./img/cnt4-3-all.png";
imgArray[2] = "./img/cnt4-2-all.png";

var imgCnt = 0;

function changeImage() {
  imgCnt++;
  if (imgCnt < imgArray.length) {
    img.src = imgArray[imgCnt];
    setTimeout("changeImage()", 1200);
  } else {
    imgCnt = 0; // loop
    changeImage();
  }
}

function startAnimation() {
  window.setTimeout(changeImage, 100);
}

window.onload = startAnimation;

// 배너 원페이지
// window.onload = function () {
//   $(".pageS").each(function () {
//     // 개별적으로 Wheel 이벤트 적용
//     $(this).on("mousewheel DOMMouseScroll", function (e) {
//       e.preventDefault();
//       var delta = 0;
//       if (!event) event = window.event;
//       if (event.wheelDelta) {
//         delta = event.wheelDelta / 120;
//         if (window.opera) delta = -delta;
//       } else if (event.detail) delta = -event.detail / 3;
//       var moveTop = null;
//       // 마우스휠을 위에서 아래로
//       if (delta < 0) {
//         if ($(this).next() != undefined) {
//           moveTop = $(this).next().offset().top;
//         }
//         // 마우스휠을 아래에서 위로
//       } else {
//         if ($(this).prev() != undefined) {
//           moveTop = $(this).prev().offset().top;
//         }
//       }
//       // 화면 이동 0.8초(800)
//       $("html,body")
//         .stop()
//         .animate(
//           {
//             scrollTop: moveTop + "px"
//           },
//           {
//             duration: 600,
//             complete: function () {}
//           }
//         );
//     });
//   });
// };

// DAEGU 텍스트 애니메이션

// let bckT1 = document.querySelector(".bck_text1");

// window.addEventListener("scroll", function () {
//   let value = window.scrollY;
//   console.log("scrollY", value);

//   if (value > 800) {
//     bckT1.style.animation = "textM1 1s 3s ease-out forwards";
//   } else {
//     bckT1.style.animation = "textD1 s ease-out ";
//   }
// });

// let bckT2 = document.querySelector(".bck_text2");

// window.addEventListener("scroll", function () {
//   let value = window.scrollY;
//   console.log("scrollY", value);

//   if (value > 800) {
//     bckT1.style.animation = "textM1 1s ease-out forwards";
//   } else {
//     bckT1.style.animation = "textD1 s ease-out ";
//   }
// });

// scrollobserver
//DAEGU 확대
// let observer = new IntersectionObserver((e) => {
//   e.forEach((back) => {
//     if (back.isIntersecting) {
//       back.target.style.opacity = 1;
//       back.target.style.transform = "scale(1.2)";
//       back.target.style.animation = "1s 5s";
//     } else {
//       back.target.style.opacity = 0;
//       back.target.style.transform = "scale(0.9)";
//     }
//     back.intersectionRatio = 1.9;
//   });
// });

// let bck = document.querySelectorAll(".bck");
// observer.observe(bck[0]);
// observer.observe(bck[1]);
// observer.observe(bck[2]);
// observer.observe(bck[3]);
// observer.observe(bck[4]);

//bnr 서클 애니메이션
/*let cle1 = document.querySelector(".c1");
let cle2 = document.querySelector(".c2");
let cle3 = document.querySelector(".c3");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 1) {
    cle1.style.animation = "moveC1 1.4s ease-out ";
    cle2.style.animation = "moveC2 0.8s ease-out ";
    cle3.style.animation = "moveC3 1.9s ease-out ";
  } else {
    cle1.style.animation = "gone1 1.5s ease-out forwards ";
    cle2.style.animation = "gone2 1s ease-out forwards ";
    cle3.style.animation = "gone3 0.6s ease-out forwards ";
  }
});*/
