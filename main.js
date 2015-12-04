$(window).load(function() {

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
    if (cur !== 'merge') {
      player.stopVideo();
    }
  });

  var onVidReady = cur === 'merge' ? startVid : function() {};
  var player = new YT.Player('ytplayer', {
    videoId: 'F1IyrZZQd0g',
    events: {'onReady': onVidReady}
  });

  function startVid() {
    player.seekTo(48);
    player.setLoop(true);
    player.playVideo();
    var w = $('.section').width();
    console.log(w)
    $('#ytplayer').width(w);
    $('#ytplayer').height(w*315/560);    
  }

  $('#go_merge').click(startVid);

});