$(function () {
  // 상단메뉴 고정
  $(window).scroll(function () {
    $("header").toggleClass("sticky", window.scrollY > 0);
    // if ($(this).scrollTop() > 0) {
    //   $("header").addClass("sticky");
    // } else {
    //   $("header").removeClass("sticky");
    // }
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
});
