(function($) {

// --- zvacsenie obrazka do popredia
var pict = $('.post'),
    overlay = $('<div/>',{id:'overlay'});
    // --- vytvori sa OVERLAY ihned na stranke v BODY
    // --- ale zatial je HIDE
    overlay.appendTo('body').hide();
    // --- vyhladanie linku A s obrazkom 
    pict.find('a').on('click', function(event){
    event.preventDefault();

//-> .ATTR vytahovanie hodnoty pozadovaneho LINKU
var href  = $(this).attr('href'),
    // vytvaram novy element cez '<img>'
    image = $('<img>',{src:href,alt:'post_Vlhova'});
    // objavi sa obrazok z IMG na OVERLAY
    overlay.html(image).show();
    // kliknutim na obrazovku IMG zmizne -> fadeOut() <-
    overlay.on('click', function(){
    overlay.fadeOut(1000);
    });
});

// zavretie obrazka klavesou ESC
    $(document).on('keyup', function(event){
        if (event.which === 27)
            overlay.slideUp(1000);
    });

})(jQuery);