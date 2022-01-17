$(function () {
  // header js

  // 로고 클릭 시 맨 위로 올라가기
  $("a.logo").click(function (e) {
    e.preventDefault();
    $(window).scrollTop(0);
  });

  // 스크롤 움직일때 sticky 클래스 적용
  $(window).scroll(function () {
    $("header").toggleClass("sticky", window.scrollY > 0);
  });

  // total 햄버거 버튼 무빙
  $(".total").click(function (e) {
    e.preventDefault();
    $(".total").toggleClass("on");

    if ($(".total").hasClass("on")) {
      $("nav").slideDown(500);
    } else {
      $("nav").slideUp(500);
    }
  });

  // section.me js
  // [반응형] skill
  $(".mo>ul a").click(function (e) {
    e.preventDefault();

    $(".mo>ul a").parent().addClass("on").siblings().removeClass("on");

    if ($(".mo>ul>li.de").hasClass("on")) {
      $(".mo>ol.co").hide();
      $(".mo>ol.de").fadeIn();
      $(window).scrollTop(1300);
      $(".mo>ol.de span").addClass("on");
      return;
    } else if ($(".mo>ul>li.co").hasClass("on")) {
      $(".mo>ol.de").hide();
      $(".mo>ol.co").fadeIn();
      $(window).scrollTop(1300);
      $(".mo>ol.co span").addClass("on");
      return;
    } else {
      $(".mo>ol.de").hide();
      $(".mo>ol.co").hide();
    }
  });

  // [웹] skill

  // $(window).scrollY;
  // console.log(scrollY);

  $(window).scroll(function (event) {
    var scroll = $(this).scrollTop();

    if (scroll >= 150) {
      $(".bar").addClass("on");
    } else {
      $(".bar").removeClass("on");
    }
  });

  // 포트폴리오

  // 포폴_내용
  var 포스터 = [
    {
      id: 0,
      thum: "./images/thum/주민기획.jpg",
      title: "주민기획 아이디어 워크숍 포스터",
      text: "도봉구청, 문화도시준비위에서 주관한 문화도시 만들기 포스터",
      date: "2018 / 2019",
      veiw: "",
    },
    {
      id: 1,
      category: "poster",
      thum: "./images/thum/주거니받거니.jpg",
      title: "주거니 받거니 포스터",
      text: "도봉구청, 문화도시준비위원회에서 주관한 문화특화지역 조성사업 포스터",
      date: "2018",
      veiw: "",
    },
    {
      id: 2,
      category: "poster",
      thum: "./images/thum/그라운드룰.jpg",
      title: "암웨이 Ground Rules 포스터",
      text: "Ground Rules 기본원칙 포스터",
      date: "2020",
      veiw: "",
    },
    {
      id: 3,
      category: "leafleat",
      thum: "./images/thum/블랙야크.jpg",
      title: "블랙야크 제품카다로그",
      text: "블랙야크 안전화 및 안전용품에 관한 제품 카다로그 리플렛",
      date: "2019 / 2020",
      veiw: "",
    },
    {
      id: 4,
      category: "leafleat",
      thum: "./images/thum/행정심판.jpg",
      title: "행정심판 리플렛",
      text: "행정심판 제도에 관한 설명 및 접수방법 안내 리플렛",
      contribute: "표지 쪽 3p 디자인",
      date: "2020",
      veiw: "",
    },
    {
      id: 5,
      category: "leafleat",
      thum: "./images/thum/제주제2공항.jpg",
      title: "제주 제2공항 리플렛",
      text: "제주 제2공항 건설에 관한 설명 리플렛",
      contribute: "표지 쪽 3p 디자인",
      date: "2019",
      veiw: "",
    },
  ];

  var 브랜딩 = [
    {
      id: 0,
      thum: "",
      title: "위드랜드",
      text: "반려동물과 함께 가는 호텔 로고 제작 및 서류 제작",
      date: "2019",
      veiw: "",
    },
    {
      id: 1,
      thum: "",
      title: "뉴커런츠",
      text: "유튜브 기획, 영상편집 아카데미 브랜딩, 로고 제작",
      date: "2019",
      veiw: "",
    },
    {
      id: 2,
      thum: "",
      title: "암웨이 코어 플러스",
      text: "코어 플러스에 사용되는 브랜딩 기획 및 제작",
      date: "2020",
      veiw: "",
    },
    {
      id: 3,
      thum: "",
      title: "CFS",
      text: "코로나로 인해 소규모로 진행, 배너와 종이컵만 제작",
      date: "2020",
      veiw: "",
    },
    {
      id: 4,
      thum: "",
      title: "배틀그라운드",
      text: "초대장, 배너, 현수막, 명찰, 명찰목걸이 등 행사에 필요한 디자인 작업",
      date: "2018",
      veiw: "",
    },
    {
      id: 5,
      thum: "",
      title: "암웨이 ABO",
      text: "백월, 배너, 현수막, 명찰, 명찰목걸이 등 행사에 필요한 디자인 작업",
      date: "2019",
      veiw: "",
    },
  ];

  var 책 = [
    {
      id: 0,
      thum: "",
      title: "백일우",
      text: "목인 작가님의 웹툰 작업 및 인쇄, 펀딩 상세페이지, 부록, 틴케이스, 스티커 작업",
      date: "2020",
      veiw: "",
    },
    {
      id: 1,
      thum: "",
      title: "KOSSA 연차보고서",
      text: "특수판매공제조합 연차보고서",
      date: "2020",
      veiw: "",
    },
    {
      id: 2,
      thum: "",
      title: "애터미 글로벌 매거진",
      text: "표지, 내지 앞부분 디자인 (+ 뒷부분은 다른 업체에서 작업)",
      date: "2019",
      veiw: "",
    },
    {
      id: 3,
      thum: "",
      title: "애터미언즈 매거진",
      text: "애터미 회원들의 인터뷰 매거진",
      date: "2019",
      veiw: "",
    },
    {
      id: 4,
      thum: "",
      title: "하나바스 제품 카다로그",
      text: "표지, 내지 디자인 및 합성컷 작업",
      date: "2019",
      veiw: "",
    },
  ];

  var 웹 = [
    {
      id: 0,
      thum: "",
      title: "직접판매공제조합 웨비나 이벤트",
      text: "서부의 느낌을 살려 합성 및 디자인, 2가지 버전",
      date: "2020",
      veiw: "",
    },
    {
      id: 1,
      thum: "",
      title: "직접판매공제조합 카카오톡 플러스친구 이벤트",
      text: "카카오톡의 색감을 사용한 직관적 디자인, 웹사이트 게시용, 조기마감 안내용, 문자 쿠폰용",
      date: "2020",
      veiw: "",
    },
    {
      id: 2,
      thum: "",
      title: "직접판매공제조합 속닥속닥 이벤트",
      text: "아기자기한 느낌으로 친근하고 따뜻한 색감의 디자인",
      date: "2020",
      veiw: "",
    },
    {
      id: 3,
      thum: "",
      title: "국제나은병원 SNS",
      text: "SNS에 게시하는 월별 건강이야기 디자인",
      date: "2019",
      veiw: "",
    },
    {
      id: 4,
      thum: "",
      title: "미래에셋대우 해외주식",
      text: "해외주식거래 홍보 이벤트디자인, pc용, 모바일용으로 제작",
      date: "2018",
      veiw: "",
    },
    {
      id: 5,
      thum: "",
      title: "전국투자자교육협의회 웹북, 블로그",
      text: "블로그에 올리는 글 메인 이미지 및 내용에 맞는 인포그래픽",
      date: "2018",
      veiw: "",
    },
  ];

  // 포폴_썸네일 불러오기
  for (let i = 0; i < 포스터.length; i++) {
    let 썸주소 = 포스터[i].thum;

    $(".thumnail>ol").append(
      $(`<li><a href="` + i + `" class="poster">` + i + `</a></li>`)
    );

    $(".poster")
      .eq(i)
      .css({ backgroundImage: `url(` + 썸주소 + `)` });

    let 타이틀 = 포스터[i].title;
    let 텍스트 = 포스터[i].text;
    let 날짜 = 포스터[i].date;

    $("#popup .left>.pop_content").append(
      $(
        `<div class =` +
          i +
          `><h3 class='title'>` +
          타이틀 +
          `</h3><p class='text'>` +
          텍스트 +
          `</p><p class="data">` +
          날짜 +
          `</p></div>`
      )
    );
  }
  for (let i = 0; i < 브랜딩.length; i++) {
    let 썸주소 = 브랜딩[i].thum;

    $(".thumnail>ol").append(
      $(`<li><a href="#" class="branding">` + i + `</a></li>`)
    );

    $(".branding")
      .eq(i)
      .css({ backgroundImage: `url(` + 썸주소 + `)` });
  }
  for (let i = 0; i < 책.length; i++) {
    let 썸주소 = 책[i].thum;

    $(".thumnail>ol").append(
      $(`<li><a href="#" class="book">` + i + `</a></li>`)
    );

    $(".book")
      .eq(i)
      .css({ backgroundImage: `url(` + 썸주소 + `)` });
  }
  for (let i = 0; i < 웹.length; i++) {
    let 썸주소 = 웹[i].thum;

    $(".thumnail>ol").append(
      $(`<li><a href="#" class="web">` + i + `</a></li>`)
    );

    $(".web")
      .eq(i)
      .css({ backgroundImage: `url(` + 썸주소 + `)` });
  }

  // 팝업_왼쪽내용 불러오기

  // 페이지네이션 poster를 누르면 ol>li class=poster 인 개체들만 불러오기? (남기고 나머지 삭제?)

  let $pagi = $(".pagination>ol a");
  let $thumpposter = $(".thumnail>ol a.poster");

  // var $li = $(`<li><a href="#" class="thum"></a></li>`);

  // 페이지 로드됐을때 all 보이기
  $(document).ready(function () {
    $pagi.eq(0).trigger("click");
  });
  // 페이지네이션 클릭 시 원하는 썸네일들 보여주기
  $pagi.click(function (e) {
    e.preventDefault();

    let href = $(this).attr("href");

    $(this).parent().addClass("on").siblings().removeClass("on");

    if (href == "all") {
      $(".thumnail>ol a").parent("li").hide();
      $(".thumnail>ol a").parent("li").fadeIn();
    } else if (href == "poster") {
      $(".thumnail>ol a").parent("li").hide();
      $(".thumnail>ol a.poster").parent("li").fadeIn();
    } else if (href == "branding") {
      $(".thumnail>ol a").parent("li").hide();
      $(".thumnail>ol a.branding").parent("li").fadeIn();
    } else if (href == "book") {
      $(".thumnail>ol a").parent("li").hide();
      $(".thumnail>ol a.book").parent("li").fadeIn();
    } else if (href == "web") {
      $(".thumnail>ol a").parent("li").hide();
      $(".thumnail>ol a.web").parent("li").fadeIn();
    }
  });

  let category = $(".thumnail>ol a").attr("class");

  $("#popup .left>.pop_content").prepend($(`<h5>` + category + `</h5>`));

  // 썸네일 정리
  let scrollPosition = 0;
  const body = document.querySelector("body");
  // 팝업오픈
  function enable() {
    scrollPosition = window.pageYOffset;

    $(body).css({
      overflow: "hidden",
      // posgition: "fixed",
      top: "-${" + scrollPosition + "}px",
      height: "100%",
    });
  }
  // 팝업닫기
  function disable() {
    scrollPosition = window.pageYOffset;

    $(body).css({
      overflow: "auto",
      // posgition: "initial",
      top: "-${" + scrollPosition + "}px",
      height: "auto",
    });
  }

  $(".scrollbar").on("mousewheel", function (e) {
    var wheelDelta = e.originalEvent.wheelDelta;

    if (wheelDelta > 0) {
      console.log("up");

      $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    } else {
      console.log("down");

      $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    }
  });

  // function wheel(좌우스크롤) {
  //   scrollContainer.on("wheel", function (e) {
  //     e.preventDefault();
  //     var wheelDelta = e.wheelDelta;
  //     if (wheelDelta > 0) {
  //       $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
  //     } else {
  //       $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
  //     }
  //   });
  // }

  // $("html, body").css({ overflow: "auto", height: "auto" }).pageYOffset(1206);

  // 썸네일 클릭시 새 창 띄우기
  https: $thumpposter.click(function (e) {
    e.preventDefault();

    enable();
    // 팝업창 보이기
    $("#popup").css({ display: "block", top: scrollPosition + "px" });

    $("#popup").css({
      overflow: "auto",
      height: "auto",
    });

    let thumhref = $(this).attr("href");
    // let popclass = $("#popup .left>.pop_content>div").attr("class");

    for (let i = 0; i < 포스터.length; i++) {
      if (thumhref == i) {
        $("#popup .left>.pop_content>div." + i)
          .show()
          .siblings("div")
          .hide();
      }
    }

    const scrollContainer = document.querySelector(".right");

    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
  });

  // 팝업닫기
  $("a.close").click(function (e) {
    e.preventDefault();
    // 검은배경(pop_bg), close버튼 눌렀을때 popup 닫기
    $("#popup").css({ display: "none" }).removeClass(".modal-body");
    disable();
  });

  // $("#scrollbar").on("mousewheel", function (e) {
  //   var wheelDelta = e.originalEvent.wheelDelta;

  //   if (wheelDelta > 0) {
  //     console.log("up");

  //     $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
  //   } else {
  //     console.log("down");

  //     $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
  //   }
  // });

  //   /*--------------------
  // Wheel Option
  // -------------------*/
  //   let option = {
  //     x: 0,
  //     speed: 1.5,
  //     limit: 2,
  //     time: 0.3,
  //   };

  //   /*--------------------
  // Init Scrollbar
  // -------------------*/
  //   const scrollbar = Scrollbar.init(document.querySelector("#scrollbar"), {
  //     overscrollEffect: "bounce",
  //     alwaysShowTracks: true,
  //   });
  //   const listener = (status) => {
  //     console.log("scrollbar", status.offset.x);
  //     active = parseInt(status.offset.x / 500);

  //     bullets.forEach((b) => {
  //       b.classList.remove("active");
  //     });
  //     bullets[active].classList.add("active");
  //   };
  //   scrollbar.addListener(listener);

  //   /*--------------------
  // Pagination
  // -------------------*/
  //   let active = 0;
  //   let pag, bullets;

  //   const pagination = () => {
  //     const items = document.querySelectorAll(".item");
  //     pag = document.createElement("div");
  //     pag.classList.add("pagination");
  //     items.forEach((item, i) => {
  //       const bullet = document.createElement("button");
  //       bullet.classList.add("bullet");
  //       bullet.innerHTML = i;
  //       pag.appendChild(bullet);
  //     });
  //     document.getElementById("scrollbar").appendChild(pag);
  //     bullets = document.querySelectorAll(".bullet");

  //     bullets.forEach((b, i) => {
  //       b.addEventListener("click", (el) => {
  //         bullets.forEach((el) => {
  //           el.classList.remove("active");
  //         });
  //         el.target.classList.add("active");
  //         const i = parseInt(el.target.innerHTML);
  //         active = i;

  //         let x = 500 * i;
  //         if (x > scrollbar.limit.x) {
  //           x = scrollbar.limit.x;
  //         }

  //         TweenMax.to(option, 1, {
  //           x: x,
  //           ease: Power4.easeOut,
  //           onUpdate: () => {
  //             window.console.log("option", option.x);
  //             scrollbar.scrollTo(option.x, 0, 0);
  //           },
  //         });
  //       });
  //     });
  //   };
  //   pagination();

  //   /*--------------------
  // Mousewheel
  // -------------------*/
  //   const horizontalScroll = (e) => {
  //     const y = parseInt(e.deltaY * option.speed);
  //     let x = scrollbar.offset.x + y;
  //     x = x < 0 ? 0 : x > scrollbar.limit.x ? scrollbar.limit.x : x;

  //     TweenMax.to(option, option.time, {
  //       x: x,
  //       onUpdate: () => {
  //         window.console.log("option", option.x);
  //         scrollbar.scrollTo(option.x, 0, 0);
  //       },
  //     });
  //   };
  //   document.querySelector(".wrapper").addEventListener("mousewheel", (e) => {
  //     horizontalScroll(e);
  //   });
});
