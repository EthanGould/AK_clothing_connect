$(document).ready(function() {
  $(".dropdown").hover(App.showOptions)
});

var App = App || {};

App.showOptions = function(){
  $(this).children('ul').toggle();
}
