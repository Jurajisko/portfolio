(function($) {
    

    /*
     * FadeIn First Wallpaper
     */
    var cover = $('.cover');

        cover.hide();
        setTimeout(function() {
            cover.fadeIn(3000);
        }, 100);
       
    /*
     * Scrolling From ClickFirst BTN
     */
    var btn = $('.btn').find('a');

    btn.on('click', function(event) {
        event.preventDefault();
        
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
        
    });

    /*
     * Scrolling From Menu Navigation
     */
    var section = $('.menu').find('a');

    section.on('click', function(event) {
        event.preventDefault();

        $('html,body').animate({
            scrollTop: $(this.hash).offset().top 
        }, 1000);
    });

    /*
     * Pridanie farbu background do panelu menu po scrollovani
       Add Color Background To Top Menu Nav Panel After Scrolling
     */
    var win = $(window),
        top = $('.background_scroll');
        
        top.hide();   

    win.scroll(function() {
        if (win.scrollTop() >= 70) {
            top.fadeIn(500);  
        } else {
            top.fadeOut(300);
        };
    });

    // --- BACK TO TOP --- Arrow ---
		var backToTop = $('<a>', {
							href: '#home',
							class: 'back-to-top',
							html: '<i class="fa fa-caret-up fa-5x"></i>'
						});

		backToTop
			.hide()
			.appendTo('body')
			.on('click', function() {
				// MUSEL SOM PRIDAT 'HTML' k body, html funguje aj bez body
				$('html,body').animate({ scrollTop: 0 }, 1500);
            });
            
        // Show Arrow After Scrolling Some PX
		var win = $(window);
			win.scroll( function() {
				if ( win.scrollTop() >= 450 ) backToTop.fadeIn();
				else backToTop.hide();
            });
            
    // --- BACK TO TOP After Clik To Logo ---

    var logo = $('.logo');
        logo.on('click', function() {
            // MUSEL SOM PRIDAT 'HTML' k body, html funguje aj bez body
            $('html,body').animate({ scrollTop: 0 }, 2000);
        });

    // Gallery
	var         gallery = $('.gallery-set'),
		startingOpacity = gallery.find('img').css('opacity');

        // animujeme opacity na hover
            gallery.find('img').on('mouseenter mouseleave', function(event){
                $(this).stop().fadeTo();

            var opacity = event.type === 'mouseenter' ? 1 : startingOpacity;
                $(this).fadeTo(200, opacity);
            });

        // skryjeme overlay na escape
            $(document).on('keyup', function(event) {
                if ( event.which === 27 ) $('mySlides').fadeOut('fast');
            });

    // The Team Slider
    $('.nextbtn').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        var first = $('.first-card');

        if (nextImg.length > 0) {
            currentImg.removeClass('active');
            nextImg.addClass('active');}
        if (!nextImg.length) {
            currentImg.removeClass('active');
            first.addClass('active');
        }
    });

    $('.prevbtn').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        var last = $('.last-card');

        if (prevImg.length > 0) {
            currentImg.removeClass('active');
            prevImg.addClass('active');}
        if (!prevImg.length) {
            currentImg.removeClass('active');
            last.addClass('active');
        }
    });

    // After Scrolling Change Color Menu
    var offset = 170;	
    var about = $('#about_us').offset().top - offset; 
    var team = $('#the_team').offset().top - offset;
    var impress = $('#impressions').offset().top - offset;
    var contact = $('#contact').offset().top - offset;

    //scrollTop: $( $(this).attr("href") ).offset().top - offset

    win.scroll( function() {
        if ( win.scrollTop() < about  ) $('.menu a').removeClass('font-yellow');
        if ( win.scrollTop() >= about ) $('.the_team, .three, .message').removeClass('font-yellow'), $('.about').addClass('font-yellow'); 
        if ( win.scrollTop() >= team ) $('.about, .impress, .message').removeClass('font-yellow'), $('.the_team').addClass('font-yellow');
        if ( win.scrollTop() >= impress ) $('.about, .the_team, .message').removeClass('font-yellow'), $('.impress').addClass('font-yellow');
        if ( win.scrollTop() >= contact ) $('.about, .the_team, .impress').removeClass('font-yellow'), $('.message').addClass('font-yellow');
    });
                    
})(jQuery);