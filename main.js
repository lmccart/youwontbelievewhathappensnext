$(document).ready(function() {

  var cur = 'home';
  $('#'+cur).show();

  $('.menuitem').click(function() {
    var id = $(this).attr('id').slice(3);
  $('#'+cur).hide();
    $('#'+id).show();
    cur = id;
  });
});