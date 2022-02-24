(function($) {
    /** change value here to adjust parallax level */
    var parallax = -0.5;
  
    var $bg_images = $(".background-img");
    var offset_tops = [];
    $bg_images.each(function(i, el) {
      offset_tops.push($(el).offset().top);
    });
  
    $(window).scroll(function() {
      var dy = $(this).scrollTop();
      $bg_images.each(function(i, el) {
        var ot = offset_tops[i];
        $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
      });
    });
})(jQuery);

$( document ).ready(function() {

  $('.burger').click(function(){
  $('.mobile-menu').slideToggle(400);
  $(this).toggleClass('active');
  });

  AOS.init();

});