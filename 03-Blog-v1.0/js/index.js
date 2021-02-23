// const Controller = require("../lib/Controller.mjs");

$(document).ready(initialize);

function initialize() {
  console.log("initializing...");
  $(window).scroll(activateUp);
  $("#up").on("click", scrollToTop);
}

function activateUp() {
  let currentScroll = $(window).scrollTop();
  if (currentScroll >= 200) {
    $("#up").css("visibility", "visible");
  } else {
    $("#up").css("visibility", "hidden");
  }
}

function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 }, 700);
}
