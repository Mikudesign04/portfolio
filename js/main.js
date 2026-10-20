$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $("#navi a").on("click", function () {
    $("header").toggleClass("open");
  });
});
const serviceBtns = document.querySelectorAll(".service-btn");

serviceBtns.forEach((service) => {
  const btn = service.querySelector(".s-hamburger");

  btn.addEventListener("click", () => {
    const isOpen = service.classList.toggle("is-open");

    btn.setAttribute("aria-expanded", isOpen);
  });
});