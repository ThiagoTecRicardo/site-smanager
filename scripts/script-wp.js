(function(){
    $('#openButton').click(function(){
        if($('#whatsappView').hasClass('open-display'))
        {
            $('#whatsappView').addClass('close-display')
            $('#whatsappView').removeClass('open-display')
        } else {
            $('#whatsappView').addClass('open-display')
            $('#whatsappView').removeClass('close-display')
        }
    })

    $('.jMFFum').click(function(){
        $('#whatsappView').addClass('close-display')
        $('#whatsappView').removeClass('open-display')
    })
})()