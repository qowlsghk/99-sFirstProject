(function () {
  "use strict";

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },

    autoplay: {
      delay: 1500
    }
  });

  const $start = document.querySelector(".startTitle");
  $start.addEventListener("click", (e) => {
    window.location.href = "clk1.html";
  });
})();
