$(function () {
  // header

  // 햄버거버튼 토글클래스
  const $hamber = $("a.hamber");

  $hamber.on("click", function (evt) {
    evt.preventDefault();
    $(this).toggleClass("on");

    if ($hamber.hasClass("on")) {
      $(".gnb").animate({ right: 0 });
    } else {
      $(".gnb").animate({ right: -100 + "vw" });
    }
  });

  // gnb
  const $gnb = $(".gnb>li");
  let nowIdx = 0;

  $gnb.on("mouseover", function () {
    $(this).children(".lnb").stop().slideDown(500);
  });
  $gnb.on("mouseout", function () {
    $(this).children(".lnb").stop().slideUp(500);
  });

  // 온라인 클래스
  // 슬라이드 적용

  setInterval(function () {
    const $clSlide = $(".cl_slide");
    $clSlide.stop().animate({ left: -370 }, function () {
      $(".cl_slide>li").eq(0).appendTo($clSlide);
      $clSlide.css({ left: 0 });
    });
  }, 2000);

  // scrollTop
  // const arrTopVal = [];
  // for (let i = 0; i < 5; i++) {
  //   arrTopVal[i] = $("section").eq(i).offset().top();
  // }

  // console.log(arrTopVal);

  // class
  let online = [
    {
      id: 0,
      img: "class1.png",
      title: "먹방, 하루 만에 해치우기",
      price: 99000,
    },
    {
      id: 1,
      img: "class2.png",
      title: "디지털마케팅과 페이스북/인스타그램 광고",
      price: 69000,
    },
    {
      id: 2,
      img: "class3.png",
      title: "오프라인 매장, 매출 향상을 위한 온라인 마케팅",
      price: 132000,
    },
    {
      id: 3,
      img: "class4.png",
      title: "매출 향상을 위한 온라인 쇼핑몰 마케팅",
      price: 132000,
    },
    {
      id: 4,
      img: "class5.png",
      title: "쉽게 배우고 알차게 써먹는 영상 촬영의 기본 공식",
      price: 132000,
    },
    {
      id: 5,
      img: "class6.png",
      title: "전문적인 영상 제작을 위한 유튜브 콘텐츠 편집",
      price: 99000,
    },
    {
      id: 6,
      img: "class7.png",
      title: "스마트폰 하나로 뚝딱! 손 등급 한번에 올리기",
      price: 9900,
    },
  ];

  for (let i = 0; i < online.length; i++) {
    $(".card_img")
      .eq(i)
      .css({
        backgroundImage: `url(./images/${online[i].img})`,
      });

    $(".cardtit").eq(i).html(online[i].title);
    $(".cardprice")
      .eq(i)
      .html("₩ " + online[i].price);
  }
});
