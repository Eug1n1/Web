$('#animation-button').click(function () {
    var $button = $(this);

    $('.square-small')
        .animate({
            left: 880
        },
            {
                duration: 2000,
                complete: function () {
                    $button.prop('disabled', true);
                },
                progress: function (animation, progress) {
                    $('#percentage').text(Math.round(progress * 100));
                    console.log(Math.round(progress * 100));
                }
            }
        );
});