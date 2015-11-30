$(document).ready(function() {

  var hash = window.location.hash;
  var cur = hash ? hash.slice(1) : 'home';


  $('#section_'+cur).show();
  $('#go_'+cur).addClass('active');


  $('.menuitem').click(function() {
    $('.active').removeClass('active');
    $('#section_'+cur).hide();
    cur = $(this).attr('id').slice(3);
    console.log(cur);
    $(this).addClass('active');
    $('#section_'+cur).show();

    history.pushState({}, '', '#'+cur);
  });

});