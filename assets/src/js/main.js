$(document).ready(function () {
    // write your jquery code here

    /* form validation classes
    ------------------------------------------------------ */
    $(window).on('ajaxInvalidField', function(event, fieldElement, fieldName, errorMsg, isFirst) {
        $(fieldElement).closest('.input-group').addClass('has-error');
    });

    $('.input-field').keyup(function(event) {
      $(this).parent('.input-group').removeClass('has-error');
    });

    // check boxes
    // $('.form-check-input').on('change', function () {
    //   if ($(this).prop('checked')) {
    //       $('.error-message').removeClass('visible');
    //   }
    // });

    // Disable scroll when mobile nav open
    $('.btn-mob-nav').click(function(e) {
        $('body').toggleClass('no-scroll');
        $('a').click(function(e) {
            $('body').removeClass('no-scroll');
        })
    });

});

//Write your javascript code here
$(document).ready(function () {

    // initialise sal.js
    sal({
      threshold: 1,
      once: false,
    });

    // Glider Carousel
    // var carousel = document.querySelector('.glider');

    // if ( carousel != null ) {
    //     new Glider( carousel,{
    //         slidesToShow: 1,
    //         dots: '.glider__dots',
    //         draggable: true,
    //         arrows: {
    //             prev: '.glider-prev',
    //             next: '.glider-next'
    //         }
    //     });
    // }

});
