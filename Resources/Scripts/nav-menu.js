$(function(){
  var menuList=$(".menu-list").children().clone();
  $("body").append("<div class='side-nav'></div>");
  $("body").append("<div class='overlay'></div>");
  $(".side-nav").append("<div class='close'><img src='close.png' class='close-img' /></div>");
  $(".side-nav").append(menuList);
  $(".harmburgar-menu").append("<div class='menuBtn'><div class='bar1'></div><div class='bar2'></div><div class='bar3'></div></div>");

  $(".harmburgar-menu").click(function(){
    
    $(".overlay").addClass("show-overlay");
    $(".side-nav").addClass("side-nav-show");
  });

  $(".close").click(function(){
    $(".overlay").removeClass("show-overlay");
    $(".side-nav").removeClass("side-nav-show");
  });


  $(".overlay").click(function(){
    $(".overlay").removeClass("show-overlay");
    $(".side-nav").removeClass("side-nav-show");
  });
});