$(function () {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  /* sound controls */
  $(".sound").click(function () {
    var control = $(this).children("img");
    var audio = $("#audio")[0];
    control.toggleClass("off");

    if (control.hasClass("off")) {
      control.attr("src", "./assets/img/sound-on.png");
      audio.play();
    } else {
      control.attr("src", "./assets/img/sound-off.png");
      audio.pause();
    }
  });

  // scroll 감지 (모바일 전용)
  $(".theme-main").scroll(function () {
    $(".drag_img").addClass("none");
  });

  //비디오 자동 재생
  $(".bg_video").trigger("play");

  // 비디오 끝났음 감지
  // 영상이 끝나면 자동으로 location.href 에서 정한 주소의 사이트로 이동합니다.
  // 다른 곳으로 이동하고 싶으시면 아래 주소 변경 하시면 됩니다.
  $(".bg_video").on("ended", function () {
    location.href = "http://naver.com";
  });
});
