$(document).ready(function() {

  $(".radio-option").hover(
    function() {

      let myImage = $("#img-selection"),
        label = $(this).children('label');

      label.finish()
      .animate({
          color: '#333333'
        }, 100, 'linear')
        .animate({
          color: '#EEEEEE'
        }, 1500, 'linear');

      myImage.attr("src", $(this).children('input').val());
      myImage.finish();
      myImage.animate({
        opacity: .5
      }, 100, 'linear')
      .animate({
        opacity: 0
      }, 1500, 'linear');

      // $(this).children('label').addClass('active');
      // $(this).children('label').stop(true, false);
      // $(this).children('label').animate({
      //   'color': '#333333'
      // }, 100, 'linear');
      
      // $('#img-selection').finish();
      // $('#img-selection').animate({
      //   opacity: .5
      // }, 100, 'linear');
    },
    function() {
      // $(this).children('label').removeClass('active');
      // let active = $(this).children('.active');
      // active.animate({
      //   color: '#EEEEEE'
      // }, 1500, 'linear').removeClass('active');
      // $("#img-selection").animate({
      //   opacity: 0
      // }, 1500, 'linear');
    }
  );
});