$(".colors").on("click", function () {
  const box = $(this);
  const temp = $(".left").css("background-color");
  $(".left").css({ "background-color": box.css("background-color") });
  box.css({ "background-color": temp });
});

$(".hamberger").on("click", function () {
  $(".left").toggleClass("ham-left");
  $(".right").toggleClass("ham-right");
  $("#back-b").toggleClass('bottom');
  $("#back-b").toggleClass('ham-left-bottom');
  $(".left .top").toggle();
});
