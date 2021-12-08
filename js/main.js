$(document).ready(function () {
  $(".prices__btn").on("click", function () {
    $(".prices__btn").toggleClass("prices__active");
    if ($(".prices__btn.prices__year").hasClass("prices__active")) {
      $(".price--prem")
        .text("$99")
        .append("<small class='text-muted'>/year</small>");
      $(".price--ent")
        .text("$149")
        .append("<small class='text-muted'>/year</small>");
    } else {
      $(".price--prem")
        .text("$29")
        .append("<small class='text-muted'>/month</small>");
      $(".price--ent")
        .text("$49")
        .append("<small class='text-muted'>/month</small>");
    }
  });
});
