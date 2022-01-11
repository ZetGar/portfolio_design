$(function () {
  // 상단메뉴 고정
  $("window").scroll(function () {
    if ($("window").scrollTop() > 0) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
});
