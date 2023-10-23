$(".navbar-toggler:first").on("click", function () {
  $(".list-group:first").toggleClass("show");
});

$("#login").on("click", function () {
  $("#modal-box").toggleClass("d-none");
});
$("#modal-close-btn").on("click", function () {
  $("#modal-box").addClass("d-none");
});

// 주요하게 봐야 할점. tag선택자("tag"), if문의 형성 필드의 값을 가져오기 위해서 쓴 $('#id').val() 바닐라는 .value()
// e.preventDefault()는 폼의 이벤트 기본 동작을 중단. function (e) 는 특정이벤트가 발생할때 호출된 이벤트 객체.
$("form").on("submit", function (e) {
  var fieldId = $("#field-id").val();
  var fieldPwd = $("#field-password").val();
  if (fieldId == "" || fieldPwd == "" || !/\S+@\S+.\S+/.test(fieldId)) {
    e.preventDefault();
    alert("incorrect accounts or password");
  } else if (fieldPwd.length < 6) {
    e.preventDefault();
    alert("Password must be more than 6");
  }
});

// 페이지 dark 버튼 반영
$(".badge").on("click", function () {
  var badgeButtonState = $(this).data("state") || "dark";
  //badge color dark = default
  if (badgeButtonState == "dark") {
    $(this).removeClass("bg-dark text-dark").addClass("bg-light text-dark");
    $(this).text("Light 🔄");
    $(this).data("state", "light");
    $(".navbar")
      .removeClass("navbar-light bg-light")
      .addClass("navbar-dark bg-dark");
    $(".list-group-item")
      .removeClass("text-dark bg-light")
      .addClass("text-light bg-dark");
  } else if (badgeButtonState == "light") {
    // badge color white
    $(this).removeClass("bg-light text-dark").addClass("bg-dark text-light");
    $(this).text("Dark 🔄");
    $(this).data("state", "dark");
    $(".navbar")
      .removeClass("navbar-dark bg-dark")
      .addClass("navbar-light bg-light");
    $(".list-group-item")
      .removeClass("text-light bg-dark")
      .addClass("text-dark bg-light");
  }
});

// 이부분이 매우 중요!!! 스코프가 밖에 있어야 함!!
// 이게 내부에 선언되면 setInterval이 계속 timer를 3으로 리셋해버려서 3 ->2만 반복하기 때문에
// 화면상에 2만 계속 떠있게 됨!! if문도 당연히 작동하지 않음!
var timer = 3;
var intvTimer = setInterval(function () {
  timer -= 1;
  $("#3s").text(timer);
  if (timer == 0) {
    clearInterval(intvTimer);
    $("#s-alert").hide();
  }
}, 1000);

$(".slide-1").on("click", function () {
  $(".slide-container").css("transform", "translateX(0vw)");
});
$(".slide-2").on("click", function () {
  $(".slide-container").css("transform", "translateX(-100vw)");
});
$(".slide-3").on("click", function () {
  $(".slide-container").css("transform", "translateX(-200vw)");
});

// scroll event practice
// window.addEventListener("scroll", function () {
//   //console.log(window.scrollY); 화면 스크롤 Y축 얼마나 이동했는가 계속 콘솔
//   //window.scrollTo(0, 0); // 화면 좌표에 계속 고정시켜버려서 이동시켜줌. 자동으로
//   //window.scrollBy(0, 100) // 현재 위치부터 강제로 스크롤 시켜버림. x,y 화면 최상단 위로 버튼 등.
// });
//위에랑 같은 방식의 Jquery
$(window).on("scroll", function () {
  console.log($(window).scrollTop()); // scrollY랑 완전 같음.
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() >= 100) {
    $(".navbar-brand").css({ "font-size": "20px" });
  } else {
    $(".navbar-brand").css("font-size", "30px");
  }
});

for (let i = 0; i <= $(".tab-button").length; i++) {
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      $(".tab-button").removeClass("orange");
      $(".tab-content").removeClass("show");
      $(this).addClass("orange");
      $(".tab-content").eq(i).addClass("show");
    });
}
