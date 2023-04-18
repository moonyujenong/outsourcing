$(function () {
  $(".gnb-menu > li").click(function () {
    $(".gnb-menu > li > a").removeClass("click");
    $(this).children("a").addClass("click");
  });

  $(".nav.sub-menu > li > a").click(function () {
    $(".nav.sub-menu > li > a").removeClass("active");
    $(this).addClass("active");
  });

  $(".nav-link_inner").click(function () {
    $(".nav-link_inner").removeClass("active");
    $(this).addClass("active");
  });

  $(".nav-link_inner a.two-depth").click(function () {
    $(".nav-link_inner a.two-depth").removeClass("active");
    $(this).addClass("active");
  });

  $(".border-tab-list li a").click(function () {
    var target = $(this).attr("data-target");
    $(".border-tab-list li a").removeClass("active");
    $(this).addClass("active");

    $(".border-tab-content").removeClass("active");
    $("#" + target).addClass("active");
  });

  $(".border-tab-list2 li a").click(function () {
    var target = $(this).attr("data-target");
    $(".border-tab-list2 li a").removeClass("active");
    $(this).addClass("active");

    $(".border-tab-content2").removeClass("active");
    $("#" + target).addClass("active");
  });

  $(".print-type-list > li").click(function () {
    $(".print-type-list > li").removeClass("active");
    $(this).addClass("active");
  });
});
