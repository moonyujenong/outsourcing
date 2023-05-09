$(function () {
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
  $(".bg_video").play();

  // 비디오 끝났음 감지
  $(".bg_video").on("ended", function () {
    location.href = "http://naver.com";
  });
});
