

  $(document).ready(function(){

    //alert('passou no load');
    $("#myNavbar a").click(function () {
      //alert('vai viajar 2');
      var href = $(this).attr("href");
      $('html, body').animate({
        scrollTop: $(href).offset().top
      }, 500);
      return false;
    });

    $(".navbar-collapse a").on('click', function() {
      $(".navbar-collapse.collapse").removeClass('in');
    });


    $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {

      var hash = this.hash;
      if (hash) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function() {
          window.location.hash = hash;
        });
      }
  
    });

    $(window).scroll(function() {
      if ($(".navbar-default").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
    });

  });




