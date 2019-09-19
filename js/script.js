console.log('hello');

$(document).ready(function() {
//home page drop down
  $('.burger').click(function() {
  $('.drop-menu').toggle()
});

$('.add-btn').click(function(){
  $('.add-new-toggle').toggle()
});

$('.confirm-btn').click(function(){
  $('.add-new-toggle').toggle()
});

});
