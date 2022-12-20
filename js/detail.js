/* 애니메이션 */
AOS.init();

/* 스크롤 시 깜빡이는 애니메이션 */
(function () {
  let observer = new IntersectionObserver((e) => {
    e.forEach((box) => {
      if (box.isIntersecting) {
        box.target.style.opacity = 1;
      } else {
        box.target.style.opacity = 0;
      }
    });
  });

  let $animation = document.querySelectorAll(".amation");
  for (let i = 0; i < $animation.length; i++) {
    observer.observe($animation[i]);
  }
})();

/* #여행마니아Lv. 타이핑 효과 */
function typing() {
  const introTitle = document.querySelector(".mania_intro__title");

  const title = "#여행마니아Lv.";

  let cnt = 0;
  let timer = 0;

  function typingIntroTitle() {
    let character = title[cnt++];

    introTitle.innerHTML = introTitle.innerHTML + character;

    if (cnt === title.length) {
      clearInterval(timer);
      return;
    }
  }

  timer = setInterval(typingIntroTitle, 200);
}

/* 모바일 사이즈 미디어 쿼리 */
function mobResize() {
  if (matchMedia("screen and (max-width: 768px)").matches) {
    /* 포토스팟 설명 변경 */
    document.querySelector(".photoSpot__txt").innerHTML =
      "대구 근대문화의 발자취를 따라갈 수 있는 근대문화골목은 볼거리가 많아 다 돌아보기 위해서는 2시간 정도가 소요된다. 참가 대상에 제한이 없는 정기 투어와 수시 투어는 대구 광역시 중구청 홈페이지에서 신청할 수 있으며 코스별 주요 포인트에서 오프라인 스탬프를 모을 수 있다. 골목 구석구석을 탐방하는 재미는 물론이고, 누군가에게는 여행의 묘미라고 할 수 있는 인생 사진 또한 남길 수 있는 최적의 포토 스팟으로 추천한다.";

    /* 게스트하우스 세 번째 이미지 삭제 */
    const $ghParent = document.querySelector(".guesthouse__bottom");
    $ghParent.innerHTML = "";

    /* 게스트하우스 세 번째 이미지 다시 넣기 */
    const $ghImg = document.createElement("img");
    $ghImg.src = "../img/guesthouse-3.png";
    document.querySelector(".guesthouse__right").appendChild($ghImg);
    $ghImg.classList.add("guesthouse_img__js");

    /* aos로 넣은 애니메이션 삭제 */
    const $div = document.querySelectorAll("div");
    const $img = document.querySelectorAll("img");
    for (let i = 0; i < $div.length; i++) {
      $div[i].removeAttribute("data-aos");
      {
        for (let j = 0; j < $img.length; j++) {
          $img[j].removeAttribute("data-aos");
        }
      }
    }
  }

  /*
    else if (matchMedia("screen and (max-width: 1024px)").matches) {
        console.log("tablet");

    } else if (matchMedia("screen and (min-width: 1024px)").matches) {
        console.log("desktop");
    }
    */

  window.onresize = function () {
    document.location.reload();
  };
}
mobResize();

/* 카페, 책방 마우스오버 사진 바뀌게 */
(function () {
  const $deepImg = document.querySelector(".cafe__img");
  const $cbImg = document.querySelector(".bookStore__img2");
  const $polakImg = document.querySelector(".bookStore__img1");

  $deepImg.addEventListener("mouseover", (e) => {
    $deepImg.src = "../img/coffee2.png";
  });
  $deepImg.addEventListener("mouseout", (e) => {
    $deepImg.src = "../img/coffee.png";
  });

  $cbImg.addEventListener("mouseover", (e) => {
    $cbImg.src = "../img/bookstore3.png";
  });
  $cbImg.addEventListener("mouseout", (e) => {
    $cbImg.src = "../img/bookstore2.png";
  });

  $polakImg.addEventListener("mouseover", (e) => {
    $polakImg.src = "../img/bookstore4.png";
  });
  $polakImg.addEventListener("mouseout", (e) => {
    $polakImg.src = "../img/bookstore1.png";
  });
})();

/* PC, 태블릿 게스트하우스 모달창 */
(function modal() {
  if (matchMedia("screen and (min-width: 768px)").matches) {
    const $modal = document.querySelector(".modal");
    const $guestImg = document.querySelector(".guesthouse__img1");
    const $guestImg2 = document.querySelector(".guesthouse__img2");
    const $guestImg3 = document.querySelector(".guesthouse__img3");
    const modal_img = document.querySelector(".gst_modal__cnt");
    const $span = document.querySelector(".closeBtn");

    $guestImg.addEventListener("click", () => {
      modalDisplay("block");
      modal_img.src = $guestImg.src;
      $span.style.visibility = "visible";
    });
    $guestImg2.addEventListener("click", () => {
      modalDisplay("block");
      modal_img.src = $guestImg2.src;
      $span.style.visibility = "visible";
    });
    $guestImg3.addEventListener("click", () => {
      modalDisplay("block");
      modal_img.src = $guestImg3.src;
      $span.style.visibility = "visible";
    });
    $span.addEventListener("click", () => {
      modalDisplay("none");
    });
    $modal.addEventListener("click", () => {
      modalDisplay("none");
    });
    function modalDisplay(text) {
      $modal.style.display = text;
    }
  } else {
    const guestElem1 = document.querySelector(".guesthouse__img1");
    const guestElem2 = document.querySelector(".guesthouse__img2");
    const guestElem3 = document.querySelector(".guesthouse_img__js");

    guestElem1.style.cursor = "default";
    guestElem2.style.cursor = "default";
    guestElem3.style.cursor = "default";
  }
})();

/* 스와이퍼 */
(function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
})();

/* 스타벅스 사진 변경*/
const img = document.querySelector(".sb_carousel > img");
let imgArray = new Array();
imgArray[1] = "../img/starbucks5.png";
imgArray[2] = "../img/starbucks4.png";
imgArray[3] = "../img/starbucks3.png";

var imgCnt = 0;

function changeImage() {
  imgCnt++;
  if (imgCnt < imgArray.length) {
    img.src = imgArray[imgCnt];
    setTimeout("changeImage()", 2300);
  } else {
    imgCnt = 0; // loop
    changeImage();
  }
}

function startAnimation() {
  window.setTimeout(changeImage, 100);
  typing();
}

window.onload = startAnimation;

/* 공유하기 연결 */
(function $url() {
  const $kakao = document.querySelector("#kakao__img");
  const $insta = document.querySelector("#insta");
  const $twt = document.querySelector("#twt");
  const $fb = document.querySelector("#fb");
  const $share = document.querySelector("#share");
  const url = encodeURI(window.location.href);

  $twt.addEventListener("click", (e) => {
    const text = "당신의 여행 스타일은? 여행마니아Lv.";
    window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" + url);
  });

  $fb.addEventListener("click", (e) => {
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + url);
  });

  $share.addEventListener("click", (e) => {
    navigator.clipboard.writeText(window.location.href);
    alert("주소가 복사되었습니다.");
  });

  $kakao.addEventListener("click", (e) => {
    Kakao.init("b0548371188054d051dfa61f5a846018");
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "당신의 대구 여행 스타일은?",
        description: "여행마니아Lv.",
        imageUrl: "카톡 공유시 보여질 이미지",
        link: {
          mobileWebUrl: "http://127.0.0.1:5500/detail.html",
          webUrl: "http://127.0.0.1:5500/detail.html"
        }
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "http://127.0.0.1:5500/detail.html",
            webUrl: "http://127.0.0.1:5500/detail.html"
          }
        }
      ]
    });
  });
})();

/* CLICK 누르면 원 페이지 이동 */
const clickBtn = document.querySelector(".maina_bottom__cnt");
const onePageStart = document.querySelector(".boldLine");

clickBtn.addEventListener("click", () => {
  onePageStart.scrollIntoView({ behavior: "smooth" });
});

/* 버튼 클릭 시 최상단 이동 */
const $topBtn = document.querySelector(".move_top__Btn");
$topBtn.style.visibility = "hidden";

window.addEventListener("scroll", (e) => {
  if (scrollY > 700) {
    $topBtn.style.visibility = "visible";
  } else if (scrollY <= 700) {
    $topBtn.style.visibility = "hidden";
  }
});

$topBtn.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* 웹 페이지 연결 */

const $web = document.querySelector(".copy__btn1");
$web.addEventListener("click", (e) => {
  window.location.href = "main.html";
});
