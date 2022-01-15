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
      $(".aboutme").addClass("active");

      $(".portfolio").addClass("active");

      $("#contact").addClass("active");
    }
  });

  // 반응형 슬라이드

  var $image = $(".slideContainer > li").eq(0);
  var 매니저 = new Hammer.Manager($image);
  매니저.add(new Hammer.Pan({ threshold: 0 }));

  매니저.on("pan", function (e) {
    console.log(e.deltaX);
    // 만약 왼쪽으로 그림을 슬라이드 했을 때
    if (e.deltaX < -1) {
      $(".slideContainer").css("transform", "translateX(" + e.deltaX + "px)");

      // 만약에 이사람이 마우스를 놓으면 두번째 사진으로 변해야함
      if (e.isFinal) {
        $(".slideContainer").addClass("transforming");
        $(".slideContainer").css("transform", "translateX(-100vw)");
        setTimeout(function () {
          $(".slideContainer").removeClass("transforming");
        }, 500);
      }
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
