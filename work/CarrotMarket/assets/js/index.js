// 카테고리 클릭
var categoryBtn = document.querySelector(".category_title");

categoryBtn.addEventListener("click", function () {
  var menuWrap = document.querySelector(".menu_wrap");

  menuWrap.classList.toggle("on");
  categoryBtn.classList.toggle("on");
});

var menuTitles = document.querySelectorAll(".menu_title");

menuTitles.forEach(function (menuTitle) {
  menuTitle.addEventListener("click", function () {
    var ul = this.parentNode.nextElementSibling;
    var slideMenu = document.querySelector(".slide_menu");
    // 다른 menu_title 요소들에게서 클래스를 제거
    var allMenuTitles = document.querySelectorAll(".menu_title");
    allMenuTitles.forEach(function (menuTitleElement) {
      if (menuTitleElement !== menuTitle) {
        menuTitleElement.classList.remove("active");
      }
    });

    // 클릭한 ul 요소와 menu_title 요소에 클래스를 추가
    ul.classList.toggle("active");
    menuTitle.classList.toggle("active");
  });
});

document.addEventListener("click", function (event) {
  if (
    event.target.tagName === "A" &&
    event.target.getAttribute("href") === "#"
  ) {
    event.preventDefault();
  }
});
