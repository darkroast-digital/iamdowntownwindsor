// *************************************************************************
// *************************************************************************
// *************************************************************************



require('./bootstrap');
require('./icons/icons');

var log = console.log; 




// #OFF CANVAS
// =========================================================================

var offCanvasTrigger = document.querySelector('.offCanvasTrigger');
var offCanvas = document.querySelector('.offCanvas');

if (offCanvasTrigger) {
    offCanvasTrigger.addEventListener('click', function () {
        offCanvas.classList.toggle('offCanvas-open');
        overlay.classList.toggle('overlay-active');
    });
}




// #MODAL
// =========================================================================

var modalTrigger = document.querySelectorAll('.modalTrigger');
var modal = document.querySelector('.modal');

if (modalTrigger) {

    modalTrigger.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();

            modal.classList.toggle('modal-open');
            overlay.classList.toggle('overlay-active');
        });
    });
}




// #KEY CONTROL
// =========================================================================

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        overlay.classList.remove('overlay-active');
    }
});

if (modal) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            modal.classList.remove('modal-open');
        }
    });

}




// #OVERLAY
// =========================================================================

var overlay = document.querySelector('.overlay');

if (overlay) {
    overlay.addEventListener('click', function () {
        this.classList.remove('overlay-active');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        modal.classList.remove('modal-open');
    });
}




// #FORM
// =========================================================================

var form = $('.form');

$(form).submit(function(e) {
    e.preventDefault();

    var formData = new FormData($(this)[0]);
    // if files = formData.append('file', $('input[type=file]')[0].files[0]); 

    $.ajax({
        type: 'post',
        url: $(this).attr('action'),
        data: formData,
        processData: false,
        contentType : false,
    })
    .done(function (response) {
        $('input').val('');
        $('textarea').val('');
        $('<div class="alert success">Your Message Was Sent!  We\'ll be in touch.</div>').insertAfter(form);

        console.log('success' + response);
    })
    .fail(function (data) {
        $('input').val('');
        $('textarea').val('');
        $('<div class="alert success">Oh no!  Something went wrong, try again.</div>').insertAfter(form);

        console.log('fail' + data);
    });
});
