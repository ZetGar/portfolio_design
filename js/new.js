$(function () {
  $(window).scroll(function () {
    var height = $(document).scrollTop();
    console.log(height);
  });

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

  $(window).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll >= 400) {
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
      right: [
        "./images/right/주민기획1.jpg",
        "./images/right/주민기획2.jpg",
        "./images/right/주민기획3.jpg",
      ],
    },

    {
      thum: "./images/thum/주거니받거니.jpg",
      title: "주거니 받거니 포스터",
      text: "도봉구청, 문화도시준비위원회에서 주관한 문화특화지역 조성사업 포스터",
      date: "2018",
      right: ["./images/right/주거니받거니1.jpg"],
    },

    {
      thum: "./images/thum/그라운드룰.jpg",
      title: "암웨이 Ground Rules 포스터",
      text: "Ground Rules 기본원칙 포스터",
      date: "2020",
      right: [
        "./images/right/그라운드룰1.jpg",
        "./images/right/그라운드룰2.jpg",
      ],
    },

    {
      thum: "./images/thum/블랙야크.jpg",
      title: "블랙야크 제품카다로그",
      text: "블랙야크 안전화 및 안전용품에 관한 제품 카다로그 리플렛",
      date: "2019 / 2020",
      right: ["./images/right/블랙야크1.jpg", "./images/right/블랙야크2.jpg"],
    },

    {
      thum: "./images/thum/행정심판.jpg",
      title: "행정심판 리플렛",
      text: "행정심판 제도에 관한 설명 및 접수방법 안내 리플렛",
      contribute: "표지 쪽 3p 디자인",
      date: "2020",
      right: ["./images/right/행정심판1.jpg"],
    },

    {
      thum: "./images/thum/제주제2공항.jpg",
      title: "제주 제2공항 리플렛",
      text: "제주 제2공항 건설에 관한 설명 리플렛",
      contribute: "표지 쪽 3p 디자인",
      date: "2019",
      right: ["./images/right/제주공항1.jpg"],
    },
  ];

  var 브랜딩 = [
    {
      id: 0,
      thum: "./images/thum/위드랜드.jpg",
      title: "위드랜드",
      text: "반려동물과 함께 가는 호텔 로고 제작 및 서류 제작",
      date: "2019",
      right: [
        "./images/right/위드랜드1.jpg",
        "./images/right/위드랜드2.jpg",
        "./images/right/위드랜드3.jpg",
      ],
    },
    {
      id: 1,
      thum: "./images/thum/뉴커런츠.jpg",
      title: "뉴커런츠",
      text: "유튜브 기획, 영상편집 아카데미 브랜딩, 로고 제작",
      date: "2019",
      right: [
        "./images/right/뉴커런츠1.jpg",
        "./images/right/뉴커런츠2.jpg",
        "./images/right/뉴커런츠3.jpg",
      ],
    },
    {
      id: 2,
      thum: "./images/thum/코어플러스.jpg",
      title: "암웨이 코어 플러스",
      text: "코어 플러스에 사용되는 브랜딩 기획 및 제작",
      date: "2020",
      right: [
        "./images/right/코어플러스1.jpg",
        "./images/right/코어플러스2.jpg",
      ],
    },
    {
      id: 3,
      thum: "./images/thum/cfs.jpg",
      title: "CFS",
      text: "코로나로 인해 소규모로 진행, 배너와 종이컵만 제작",
      date: "2020",
      right: ["./images/right/cfs1.jpg", "./images/right/cfs2.jpg"],
    },
    {
      id: 4,
      thum: "./images/thum/abo.jpg",
      title: "배틀그라운드",
      text: "초대장, 배너, 현수막, 명찰, 명찰목걸이 등 행사에 필요한 디자인 작업",
      date: "2018",
      right: [
        "./images/right/펍지1.jpg",
        "./images/right/펍지2.jpg",
        "./images/right/펍지3.jpg",
      ],
    },
    {
      id: 5,
      thum: "./images/thum/배틀그라운드.jpg",
      title: "암웨이 ABO",
      text: "백월, 배너, 현수막, 명찰, 명찰목걸이 등 행사에 필요한 디자인 작업",
      date: "2019",
      right: [
        "./images/right/abo1.jpg",
        "./images/right/abo2.jpg",
        "./images/right/abo3.jpg",
        "./images/right/abo4.jpg",
      ],
    },
  ];

  var 책 = [
    {
      id: 0,
      thum: "./images/thum/백일우.jpg",
      title: "백일우",
      text: "목인 작가님의 웹툰 작업 및 인쇄, 펀딩 상세페이지, 부록, 틴케이스, 스티커 작업",
      date: "2020",
      right: [
        "./images/right/백일우1.jpg",
        "./images/right/백일우2.jpg",
        "./images/right/백일우3.jpg",
        "./images/right/백일우4.jpg",
        "./images/right/백일우5.jpg",
      ],
    },
    {
      id: 1,
      thum: "./images/thum/kossa.jpg",
      title: "KOSSA 연차보고서",
      text: "특수판매공제조합 연차보고서",
      date: "2020",
      right: [
        "./images/right/특판애뉴얼1.jpg",
        "./images/right/특판애뉴얼2.jpg",
      ],
    },
    {
      id: 2,
      thum: "./images/thum/글로벌매거진.jpg",
      title: "애터미 글로벌 매거진",
      text: "표지, 내지 앞부분 디자인 (+ 뒷부분은 다른 업체에서 작업)",
      date: "2019",
      right: [
        "./images/right/글로벌매거진1.jpg",
        "./images/right/글로벌매거진2.jpg",
        "./images/right/글로벌매거진3.jpg",
      ],
    },
    {
      id: 3,
      thum: "./images/thum/애터미언즈.jpg",
      title: "애터미언즈 매거진",
      text: "애터미 회원들의 인터뷰 매거진",
      date: "2019",
      right: [
        "./images/right/애터미언즈1.jpg",
        "./images/right/애터미언즈2.jpg",
      ],
    },
    {
      id: 4,
      thum: "./images/thum/하나바스.jpg",
      title: "하나바스 제품 카다로그",
      text: "표지, 내지 디자인 및 합성컷 작업",
      date: "2019",
      right: ["./images/right/하나바스1.jpg", "./images/right/하나바스2.jpg"],
    },
  ];

  var 웹 = [
    {
      id: 0,
      thum: "./images/thum/웨비나.jpg",
      title: "직접판매공제조합 웨비나 이벤트",
      text: "서부의 느낌을 살려 합성 및 디자인, 2가지 버전",
      date: "2020",
      right: ["./images/right/웨비나1.jpg"],
    },
    {
      id: 1,
      thum: "./images/thum/카톡플친.jpg",
      title: "직접판매공제조합 카카오톡 플러스친구 이벤트",
      text: "카카오톡의 색감을 사용한 직관적 디자인, 웹사이트 게시용, 조기마감 안내용, 문자 쿠폰용",
      date: "2020",
      right: ["./images/right/직판카톡플친1.jpg"],
    },
    {
      id: 2,
      thum: "./images/thum/속닥속닥.jpg",
      title: "직접판매공제조합 속닥속닥 이벤트",
      text: "아기자기한 느낌으로 친근하고 따뜻한 색감의 디자인",
      date: "2020",
      right: ["./images/right/속닥속닥1.jpg"],
    },
    {
      id: 3,
      thum: "./images/thum/건강이야기.jpg",
      title: "국제나은병원 SNS",
      text: "SNS에 게시하는 월별 건강이야기 디자인",
      date: "2019",
      right: ["./images/right/국제나은1.jpg"],
    },
    {
      id: 4,
      thum: "./images/thum/해외주식.jpg",
      title: "미래에셋대우 해외주식",
      text: "해외주식거래 홍보 이벤트디자인, pc용, 모바일용으로 제작",
      date: "2018",
      right: ["./images/right/미래에셋1.jpg"],
    },
    {
      id: 5,
      thum: "./images/thum/블로그.jpg",
      title: "전국투자자교육협의회 웹북, 블로그",
      text: "블로그에 올리는 글 메인 이미지 및 내용에 맞는 인포그래픽",
      date: "2018",
      right: ["./images/right/한투블로그1.jpg"],
    },
  ];

  // 포폴_내용 불러오기

  // 포스터.forEach((element) => {});
  // function 포스터내용(item) {
  //   console.log(item);
  // }

  포스터.forEach((item, index) => {
    // 썸네일 a/href , claass 지정
    $(".thumnail>ol").append(
      $(`<li><a href="p` + index + `" class="poster"></a></li>`)
    );

    $(".poster")
      .eq(index)
      .css({ backgroundImage: `url(` + 포스터[index].thum + `)` });

    $("#popup .left>.pop_content").append(
      $(
        `<div class = p` +
          index +
          `><h3 class='title'>` +
          포스터[index].title +
          `</h3><p class='text'>` +
          포스터[index].text +
          `</p><p class="data">` +
          포스터[index].date +
          `</p></div>`
      )
    );

    let right = 포스터[index].right;

    for (let i = 0; i < right.length; i++) {
      console.log(right[i]);

      let class_cnt = $(".thumnail>ol>li>a").attr("href");
      let class_cnt2 = $(".scrollbar>li").attr("class");
      console.log(class_cnt);
      console.log(class_cnt2);

      $("#popup .right>.scrollbar").append(
        $(`<li class = "item p` + index + `"></li>`).css({
          backgroundImage: `url(` + right[i] + `)`,
        })
      );
    }
  });

  브랜딩.forEach((item, index) => {
    // 썸네일 a/href , claass 지정
    $(".thumnail>ol").append(
      $(`<li><a href="b` + index + `" class="branding"></a></li>`)
    );

    $(".branding")
      .eq(index)
      .css({ backgroundImage: `url(` + 브랜딩[index].thum + `)` });

    $("#popup .left>.pop_content").append(
      $(
        `<div class = b` +
          index +
          `><h3 class='title'>` +
          브랜딩[index].title +
          `</h3><p class='text'>` +
          브랜딩[index].text +
          `</p><p class="data">` +
          브랜딩[index].date +
          `</p></div>`
      )
    );

    let right = 브랜딩[index].right;

    for (let i = 0; i < right.length; i++) {
      console.log(right[i]);

      let class_cnt = $(".thumnail>ol>li>a").attr("href");
      let class_cnt2 = $(".scrollbar>li").attr("class");
      console.log(class_cnt);
      console.log(class_cnt2);

      $("#popup .right>.scrollbar").append(
        $(`<li class = "item b` + index + `"></li>`).css({
          backgroundImage: `url(` + right[i] + `)`,
        })
      );
    }
  });

  책.forEach((item, index) => {
    // 썸네일 a/href , claass 지정
    $(".thumnail>ol").append(
      $(`<li><a href="bk` + index + `" class="book"></a></li>`)
    );

    $(".book")
      .eq(index)
      .css({ backgroundImage: `url(` + 책[index].thum + `)` });

    $("#popup .left>.pop_content").append(
      $(
        `<div class = bk` +
          index +
          `><h3 class='title'>` +
          책[index].title +
          `</h3><p class='text'>` +
          책[index].text +
          `</p><p class="data">` +
          책[index].date +
          `</p></div>`
      )
    );

    let right = 책[index].right;

    for (let i = 0; i < right.length; i++) {
      console.log(right[i]);

      let class_cnt = $(".thumnail>ol>li>a").attr("href");
      let class_cnt2 = $(".scrollbar>li").attr("class");
      console.log(class_cnt);
      console.log(class_cnt2);

      $("#popup .right>.scrollbar").append(
        $(`<li class = "item bk` + index + `"></li>`).css({
          backgroundImage: `url(` + right[i] + `)`,
        })
      );
    }
  });

  웹.forEach((item, index) => {
    // 썸네일 a/href , claass 지정
    $(".thumnail>ol").append(
      $(`<li><a href="w` + index + `" class="web"></a></li>`)
    );

    $(".web")
      .eq(index)
      .css({ backgroundImage: `url(` + 웹[index].thum + `)` });

    $("#popup .left>.pop_content").append(
      $(
        `<div class = w` +
          index +
          `><h3 class='title'>` +
          웹[index].title +
          `</h3><p class='text'>` +
          웹[index].text +
          `</p><p class="data">` +
          웹[index].date +
          `</p></div>`
      )
    );

    let right = 웹[index].right;

    for (let i = 0; i < right.length; i++) {
      console.log(right[i]);

      let class_cnt = $(".thumnail>ol>li>a").attr("href");
      let class_cnt2 = $(".scrollbar>li").attr("class");
      console.log(class_cnt);
      console.log(class_cnt2);

      $("#popup .right>.scrollbar").append(
        $(`<li class = "item w` + index + `"></li>`).css({
          backgroundImage: `url(` + right[i] + `)`,
        })
      );
    }
  });

  let $pagi = $(".pagination>ol a");
  let $thum = $(".thumnail>ol a");
  let category = $(".thumnail>ol a").attr("class");
  // 팝업 오픈,클로즈
  let scrollPosition = 0;
  const body = document.querySelector("body");
  const scrollContainer = document.querySelector(".right");
  // 포폴_썸네일
  // 페이지 로드됐을때 all 보이기(타겟팅)
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

  // 팝업
  // 팝업창_왼쪽 상단내용
  $("#popup .left>.pop_content").prepend($(`<h5>` + category + `</h5>`));

  // 팝업창 열기
  function enable() {
    scrollPosition = window.pageYOffset;

    $(body).css({
      overflow: "hidden",
      top: "-${" + scrollPosition + "}px",
      height: "100%",
    });
  }

  // 팝업닫기
  function disable() {
    scrollPosition = window.pageYOffset;

    $(body).css({
      overflow: "auto",
      top: "-${" + scrollPosition + "}px",
      height: "auto",
    });

    $(".scrollbar").scrollLeft = 0;
  }

  function 좌우스크롤() {
    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();

      scrollContainer.scrollLeft += evt.deltaY;

      // var wheelDelta = evt.originalEvent.wheelDelta;
      // wheelDelta = 0;
    });
  }

  // 썸네일 클릭시 새 창 띄우기
  $thum.click(function (e) {
    e.preventDefault();

    enable();

    // 팝업창 보이기
    $("#popup").css({ display: "block", top: scrollPosition + "px" });

    // 팝업창 내 스크롤 가능
    $("#popup").css({
      overflow: "auto",
      height: "auto",
    });

    좌우스크롤();
    scrollContainer.scrollLeft = 0;

    // 팝업창 내 좌측부분 내용추가
    let 썸클릭 = $(this).attr("href");

    for (let i = 0; i < 포스터.length; i++) {
      if (썸클릭 == "p" + i) {
        $(".pop_content>div").hide();
        $(`.pop_content>div.p` + i).show();
        // 팝업창 내 우측부분 내용추가
        $(".scrollbar > li").hide();
        $(`.scrollbar > li.p` + i).show();
        $(`.scrollbar`).css({
          width: `calc(588px * ` + $(`.scrollbar > li.p` + i).length + `)`,
        });
      } else if (썸클릭 == "b" + i) {
        $(".pop_content>div").hide();
        $(`.pop_content>div.b` + i).show();
        // 팝업창 내 우측부분 내용추가
        $(".scrollbar > li").hide();
        $(`.scrollbar > li.b` + i).show();
        $(`.scrollbar`).css({
          width: `calc(588px * ` + $(`.scrollbar > li.b` + i).length + `)`,
        });
      } else if (썸클릭 == "bk" + i) {
        $(".pop_content>div").hide();
        $(`.pop_content>div.bk` + i).show();
        // 팝업창 내 우측부분 내용추가
        $(".scrollbar > li").hide();
        $(`.scrollbar > li.bk` + i).show();
        $(`.scrollbar`).css({
          width: `calc(588px * ` + $(`.scrollbar > li.bk` + i).length + `)`,
        });
      } else if (썸클릭 == "w" + i) {
        $(".pop_content>div").hide();
        $(`.pop_content>div.w` + i).show();
        // 팝업창 내 우측부분 내용추가
        $(".scrollbar > li").hide();
        $(`.scrollbar > li.w` + i).show();
        $(`.scrollbar`).css({
          width: `calc(588px * ` + $(`.scrollbar > li.w` + i).length + `)`,
        });
      }
    }
  });

  // 팝업닫기
  $("a.close").click(function (e) {
    e.preventDefault();

    // 검은배경(pop_bg), close버튼 눌렀을때 popup 닫기
    $("#popup").css({ display: "none" }).removeClass(".modal-body");

    disable();
  });
});
