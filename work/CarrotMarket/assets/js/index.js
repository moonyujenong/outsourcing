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
