$(document).ready(function() {

  var cur = 'home';
  $('#'+cur).show();

  $('.menuitem').click(function() {
    var id = $(this).attr('id').slice(3);
    $('.active').removeClass('active');
    $(this).addClass('active');
    $('#'+cur).hide();
    $('#'+id).show();
    cur = id;
  });

});