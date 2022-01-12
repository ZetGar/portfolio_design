$(function () {
  $(window).on("scroll", function () {
    $("header").toggleClass("sticky", window.scrollY > 0);
  });

  $("a.logo").click(function () {
    $("html, body").stop().animate({ scrollTop: 0 }, 400);
    return false;
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
