// const Controller = require("../lib/Controller.mjs");

$(document).ready(initialize);

function initialize() {
  console.log("initializing...");

  System.defaultJSExtensions = true;
  console.log("in script");
  let controller;
  System.import("lib/Controller").then(function (module) {
    controller = new module.Controller();
    controller.init();
  });

  $(window).scroll(activateUp);
  $("#up").on("click", scrollToTop);
  console.log($("div.blog_post_card"));
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
