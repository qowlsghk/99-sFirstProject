//clk  클릭 이벤트
//토글 만들기
const $clk = document.querySelectorAll(".clk");

$clk.forEach(function (click) {
  click.addEventListener("click", function () {
    click.classList.toggle("selected");
  });
});

// $clk.forEach(function (click) {
//   click.addEventListener("click", function () {
//     click.classList.toggle(".clk2");
//   });
// });

// 두번째 방법
// if (this.value === ".clk") {
//   EventTarget.style.display = "none";
//   this.value = ".clk2";
// } else {
//   EventTarget.style.display = "block";
//   this.value = ".clk";
// }

// $clk.addEventListener("click", (e) => {
//   $clk.classList.toggle(".selected");
// });
