// 변수 선언
var bannerFrame = document.querySelector(".banner_frame");
var bannerItems = document.querySelectorAll(".banner_item");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var paginationItems = document.querySelectorAll(".banner_roll li");

var currentIndex = 0;
var totalItems = bannerItems.length;
var bannerWidth = bannerItems[0].offsetWidth;

// 이전 버튼 클릭 이벤트 핸들러
prevBtn.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }
  updateSlide();
});

// 다음 버튼 클릭 이벤트 핸들러
nextBtn.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  }
  updateSlide();
});
// 페이지네이션 클릭 이벤트 핸들러
for (var i = 0; i < paginationItems.length; i++) {
  paginationItems[i].addEventListener("click", function () {
    currentIndex = parseInt(this.getAttribute("data-slide-index"));
    updateSlide();
  });
}

// 슬라이드 업데이트 함수
function updateSlide() {
  bannerFrame.style.transition = "transform 0.5s ease-in-out";
  bannerFrame.style.transform =
    "translateX(" + -bannerWidth * currentIndex + "px)";
  updatePagination();
}

// 페이지네이션 업데이트 함수
function updatePagination() {
  for (var i = 0; i < paginationItems.length; i++) {
    paginationItems[i].classList.remove("active");
  }
  paginationItems[currentIndex].classList.add("active");
}

// 초기 페이지네이션 표시
updatePagination();
