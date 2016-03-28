$(window).load(function() {

  if ($(window).width() < 800) {
    // $('#section_info p').each(function() {
    //   var t = $(this).html();
    //   t = t.replace(/\...................../g, ' –');
    //   $(this).html(t)
    // });
  }

  $('#loading').hide();

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

    if (cur === 'rsvp') {
      clearRSVP();
      $('#form').show();
      $('#thankyou').hide();
    }


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

  function validateRSVP() {
    var data = {
      Name: $('#name').val(),
      Email: $('#email').val(),
      Number: parseInt($('#number').val(), 10),
      Attending: $('input[name=attending]:checked').val(),
      Advice: $('#advice').val()
    };
    if (!data.Name) {
      alert('Please enter your name.');
    }
    else if (!data.Number) {
      alert('Please enter the number of people in your party attending.');
    }
    else if (!data.Attending) {
      alert('Please indicate whether you will be attending.');
    }
    return data;
  }
function clearRSVP(){
  $('#form input[type="text"]').each(function(){
      $(this).val('');  
  });
  $('#form textarea').each(function(){
      $(this).val('');  
  });
  $('input[name=attending]:checked').each(function(){
      $(this).attr('checked', false);  
  });
 }

  $('#submit').click(function() {
    $('#loading').show();
    var data = validateRSVP();
    if (data) {
      $.post("https://sheetsu.com/apis/72394be6", data, function(e) { 
        if (e.success) {
          $('#form').hide();
          $('#thankyou').show();
        } else {
          alert('Oops something went wrong. Please try submitting again.');
        }
        $('#loading').hide();
      });
    }
  })

});
