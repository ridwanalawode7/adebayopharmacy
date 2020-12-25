

  

  

$(function(){
$(".add-to-cart").click(function(){
if($(".added").attr("style")=="display: none;"){
 var itemName= $(this).siblings().eq(1).text();
    var stringItemPrice= $(this).siblings().eq(2).html();
    var lenght=stringItemPrice.lenght;
    var itemPrice= stringItemPrice.substring(2, lenght);

    $("#cart_table > tbody").append("<tr><td>" + itemName + "</td><td>" + itemPrice + "</td><td><div class='ratenum'>1</div><div class='btn'><button class='plus'>" + "\u25B4" + "</button><button class='minus'>" + "\u25BE" + "</button></div></td><td>" + itemPrice + "</td></tr>");

    var initNum = $(".cart-num").text();
    var int= parseInt(initNum);
    var final =int + 1;

    $(".cart-num").html(final);
    $(".added").fadeIn(100, function(){
    $(".added").delay(1300).fadeOut(100);
  });
    }

});


$("body").on("click", ".plus", function(){
    var price = $(this).parent().parent().parent().children().eq(1).html();
    var finalPrice = parseFloat(price);
    var initAmount = $(this).parent().parent().parent().children().eq(3).html();
    var floatInitAmount = parseFloat(initAmount);
    var finalAmount = floatInitAmount + finalPrice;
    $(this).parent().parent().parent().children().eq(3).html(finalAmount);
    var initRate = $(this).parent().prev().html();
    var intInitRate = parseInt(initRate);
    var finalRate = intInitRate + 1;
    $(this).parent().prev().html(finalRate);
  });

  $("body").on("click", ".minus", function(){
    var price = $(this).parent().parent().parent().children().eq(1).html();
    var finalPrice = parseFloat(price);
    var initAmount = $(this).parent().parent().parent().children().eq(3).html();
    var floatInitAmount = parseFloat(initAmount);
    var finalAmount = floatInitAmount - finalPrice;
    $(this).parent().parent().parent().children().eq(3).html(finalAmount);
    var initRate = $(this).parent().prev().html();
    var intInitRate = parseInt(initRate);
    var finalRate = intInitRate - 1;
    $(this).parent().prev().html(finalRate);
  });

  $(".dropdown").click(function(){
    $(this).parent().next().slideToggle(200);
   
  });

  $(".icon").click(function(){
    $(".cart").show(100);
  });
  
  $(".close1").click(function(){
    $(".cart").hide(100);
  });

  $(".close-added").click(function(){
    $(".added").fadeOut(100);
  });


  $(".order-button, #orderButton").click(function(){
    $(".msg").fadeIn(100, function(){
    $(".msg").delay(1000).fadeOut(100);
  });
  });


});