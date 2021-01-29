(function($) {

    var about = $('.about');
    about.hide();

    var selected = $('.menu').find('.selected'),
        selectedAbout;
    
    function showAbout( selected ) {
         if ( selected.length ) {

        var        id = selected.find('a').attr('href');
        selectedAbout = $(id);
        }
        
        var newAbout = selectedAbout.length ? selectedAbout : about.eq(0);

        about.not( newAbout ).hide();

        newAbout.fadeIn();
    }

   showAbout( selected );

   $('.menu a').on('click', function(event){

       var li = $(this).parent();

       event.preventDefault();
            li.addClass('selected')
                .siblings().removeClass('selected');
            showAbout( li );
            //window.location.hash = this.hash;
   });

   

    
})(jQuery);