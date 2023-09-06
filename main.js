// <reference types="./@types/jquery" />;

$("aside i").on("click", () => {
  $("aside nav ul").animate({ width: "toggle" }, 300);
  $("aside i").toggleClass("closed");
});

$("#details article header").on("click", ({ target }) => {
  $("#details article.active").removeClass("active");
  target.parentElement.classList.toggle("active");
});

$(window).on("DOMContentLoaded", () => {
  let timeLeft = (new Date("01-01-2025").getTime() - new Date().getTime()) / 1000;
  const days = $(".days span");
  const hours = $(".hours span");
  const minutes = $(".minutes span");
  const seconds = $(".seconds span");

  setInterval(() => {
    timeLeft -= 1;
    days.text(Math.floor(timeLeft / (60 * 60 * 24)));
    hours.text(Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60)));
    minutes.text(Math.floor((timeLeft % (60 * 60)) / 60));
    seconds.text(Math.floor(timeLeft % 60));
  }, 1000);
});

$("#contact form textarea").on("input", () => {
  $("#contact form p span").text(100 - $("#contact form textarea").val().length);
});

$("aside nav a").on("click", (e) => {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $(`${e.target.getAttribute("href")}`).offset().top - 50 }, 800);
  $("aside nav ul").animate({ width: "toggle" }, 300);
  $("aside i").toggleClass("closed");
});
