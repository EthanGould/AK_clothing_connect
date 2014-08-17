$(document).ready(function() {
  $(".dropdown").hover(App.showTopLinkOptions)
  $("#size").click(App.showSizeOptions)
  $("#color").click(App.showColorOptions)
  $("#price").click(App.showPriceOptions)
  $(".member-pic").hover(App.showTitle)
});

var App = App || {};

App.showTopLinkOptions = function(){
  $(this).children('ul').toggle();
}

App.showSizeOptions = function(){
  $options = $('.size-filter-options');
  $options.slideToggle("fast");
}

App.showColorOptions = function(){
  $options = $('.color-filter-options');
  $options.slideToggle("fast");
}

App.showPriceOptions = function(){
  $options = $('.price-filter-options');
  $options.slideToggle("fast");
}

App.showTitle = function(){
  $(this).children('.member-title').slideToggle(100);
}
