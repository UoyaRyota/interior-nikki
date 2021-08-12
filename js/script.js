$(function(){
  $( ' .drawer').drawer()

  jQuery('a[href^="#"]').click(function(){
    let speed = 300
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    let position = jQuery(target).offset().top;
    jQuery('html,body').animate({
    scrollTop: position - $('#js-header').outerHeight()
  },
  speed
  );
  return false;
  });

  new WOW().init()
  let $form = $('#js-from') 
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
    dataType: "xml", 
     statusCode: { 
        0: function() { 
          $form.slideUp()
          $('#js-success').slideDown()
        }, 
        200: function() { 
          $form.slideUp()
          $('#js-error').slideDown()
        }
      } 
    });
    return false; 
  });

  let $submit = $('#js-submit')
  $('#js-from input, #js-from textarea').on('change',function(){
    if(
      $('#js-from input[type="text"]').val() !== "" &&
      $('#js-from input[type="email"]').val() !== "" &&
      $('#js-from input[name="entry.1713733400"]').val() .prop('checked') === true
    ){
      $submit.prop('disabled', false)
      $submit.addClass('-active')
    }else{
      $submit.prop('disabled', true)
      $submit.removeClass('-active')
    }
  });

})