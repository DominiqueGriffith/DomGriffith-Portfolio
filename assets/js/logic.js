
leftToRightScroll();

function leftToRightScroll() {
  $("#page-wrap").wrapInner("<table cellspacing='30'><tr>");
  $(".post").wrap("<td></td>");
  $("body").mousewheel(function (event, delta) {
    this.scrollLeft -= delta * 30;
    event.preventDefault();
    if ($(window).width() < 800) {
      breakScroll() 
    }


  });
}

function breakScroll() {
  $("#page-wrap").wrapInner("<table cellspacing='30'><tr>");
  $(".post").wrap("<td></td>");
  $("body").mousewheel(function (event, delta) {
    this.scrollLeft -= delta * 30;
    event.preventDefault();
    break;

  });
}
