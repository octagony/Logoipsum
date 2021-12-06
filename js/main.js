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

  /*  cardsPrices.forEach()
  $(".card.card__prices").on("mouseenter", function () {
    if (!$(".card.card__prices").hasClass("card__active")) {
      $(".card.card__prices").addClass("card__active");
    } else {
      $(".card.card__prices").removeClass("card__active");
    }
  });
  $(".card.card__prices").on("mouseleave", function () {
    if (!$(".card.card__prices").hasClass("card__active")) {
      $(".card.card__prices").addClass("card__active");
    } else {
      $(".card.card__prices").removeClass("card__active");
    }
  }); */
});

const cardsPrices = document.querySelectorAll(".card__prices");
cardsPrices.forEach((card, index) => {
  card.onmouseover = () => {
    setClass(index);
  };
});

function setClass(index) {
  for (let cardes of cardsPrices) {
    cardes[index].classList.add(".card__active");
  }
}
