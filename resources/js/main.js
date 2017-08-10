var main = function() {
  $(document).click( function(){
    $('.dropdown-menu').hide();
  });

  $('.fa-bars').click(function() {
    event.stopPropagation();
    $('.dropdown-menu').slideToggle(200, "swing");
  });
}

$(document).ready(main);
