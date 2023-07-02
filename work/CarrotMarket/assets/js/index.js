var currentSlide = 0;
var slides = document.getElementsByClassName("banner_item");
var prevBtn = document.querySelector(".arrow .prev");
var nextBtn = document.querySelector(".arrow .next");
var pagination = document.querySelectorAll(".banner_roll li a");

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.left = "-100%";
  }

  slides[index].style.left = "0";
  currentSlide = index;

  // 페이지네이션에 클래스 추가/제거
  for (var i = 0; i < pagination.length; i++) {
    pagination[i].classList.remove("active");
  }
  pagination[currentSlide].classList.add("active");

  // 짝수 페이지네이션에 클래스 추가
  var isEven = (index + 1) % 2 === 0;
  var bannerRoll = document.querySelector(".banner_roll");
  if (isEven) {
    bannerRoll.classList.add("even");
  } else {
    bannerRoll.classList.remove("even");
  }
}

function prevSlide() {
  var newIndex = currentSlide - 1;
  showSlide(newIndex);
}

function nextSlide() {
  var newIndex = currentSlide + 1;
  showSlide(newIndex);
}

function goToSlide(index) {
  showSlide(index);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

for (var i = 0; i < pagination.length; i++) {
  pagination[i].addEventListener("click", function () {
    var slideIndex = parseInt(this.getAttribute("data-slide-index"));
    goToSlide(slideIndex);
  });
}

// 초기 슬라이드 표시
showSlide(currentSlide);

// 카테고리 클릭
var categoryBtn = document.querySelector(".category_title");

categoryBtn.addEventListener("click", function () {
  var menuWrap = document.querySelector(".menu_wrap");

  menuWrap.classList.toggle("on");
});

var menuTitles = document.querySelectorAll(".menu_title");

menuTitles.forEach(function (menuTitle) {
  menuTitle.addEventListener("click", function () {
    var ul = this.parentNode.nextElementSibling;

    // 다른 ul 요소들에게서 클래스를 제거
    var allULs = document.querySelectorAll(".menu_wrap ul");
    allULs.forEach(function (ulElement) {
      if (ulElement !== ul) {
        ulElement.classList.remove("active");
      }
    });

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
