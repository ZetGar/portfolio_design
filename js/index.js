$(function () {
  // 슬라이드 메뉴 배경
  $(window).on("scroll", function () {
    $("header").toggleClass("sticky", window.scrollY > 0);
  });

  // 로고 클릭 시 맨 위로 올라가기
  $("a.logo").click(function () {
    $("html, body").stop().animate({ scrollTop: 0 }, 400);
    return false;
  });

  // 스크롤 시 애니메이션

  //section.main
  $(window).load(function () {
    $(".main").addClass("active");
  });

  // section.aboutme
  let $about = $(".aboutme").offset().top - 700;
  let $port = $(".portfolio").offset().top - 500;
  let $contact = $("#contact").offset().top - 500;
  let $footer = $("#contact").offset().top - 800;

  $(window).scroll(function () {
    if ($(this).scrollTop() <= $port) {
      $(".aboutme").addClass("active");
    } else if ($(this).scrollTop() <= $contact) {
      $(".portfolio").addClass("active");
    } else if ($(this).scrollTop() <= $contact + 300) {
      $("#contact").addClass("active");
    }
  });
});

// $(window).on("scroll", function () {
//   $("header").toggleClass("sticky", window.scrollY > 0);
// });
// $(document).ready(function () {
//   // 상단메뉴 고정
//   $("window").scroll(function () {
//     alert();
//     if ($("window").scrollTop() > 0) {
//       $("header").addClass("sticky");
//     } else {
//       $("header").removeClass("sticky")
//     }
//   });
// });
