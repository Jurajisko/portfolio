(function($){
    var covers = $('.fadecovers');

    //---> vsetky children okrem posledneho su display: none; .HIDE()
    covers.children(':not(:last)').hide();

    setInterval( function(){

        covers.children(':last').fadeOut(3000, function(){
            $(this).prependTo(covers)
        }).prev().fadeIn(3000);
    },1000);

})(jQuery);