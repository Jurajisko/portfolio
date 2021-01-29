(function($) {

var overlay = $('<div/>', { id: 'overlay' });
//var href = $(this).attr('href');
var image = $('<img class="pict">');//image = $('<img>', { src: href, alt: 'picture' });
var exitButton = $('<a class="close"><img src="img/remove_button_invert.png" width="32" alt="arrow"></a>');
var prevButton = $('<a class="prev"><img src="img/arrow_invert.png" width="32" alt="prev arrow">previous page</a>');
var nextButton = $('<a class="next"><img src="img/arrow_invert_right.png" width="32" alt="next arrow">next image</a>');

var cover = $('.cover');
var gallery = $('.gallery');
var myModal = $('#myModal');


// Add Overlay And Buttons
overlay.appendTo(cover).hide();//$("#gallery").append($overlay);
overlay.append(image).prepend(prevButton).append(nextButton).append(exitButton);

// Close Overlay If Click To Background
overlay.on('click', function(event) {
    event.preventDefault();
    $(this).fadeOut('fast');
});

// When an image is clicked
myModal.find('a').on('click', function(event) {
    // Prevents default behavior
    event.preventDefault();
    // Adds href attribute to variable
    var imageLocation = $(this).attr('href');
    // Add the image src to $image
    image.attr('src', imageLocation);
    // Fade in the overlay
    overlay.fadeIn('slow');
  });
  
// When next button is clicked
nextButton.on('click', function(event) {
    // Hide the current image
    $('#overlay .pict').hide();
    // Overlay image location
    var currentImgSrc = $('#overlay .pict').attr('src');
    // Image with matching location of the overlay image
    var currentImg = $('#gallery .pict[src="' + currentImgSrc + '"]');
    // Finds the next image
    var nextImg = $(currentImg.closest('.mySlides').next().find('.pict'));
    // All of the images in the gallery
    var images = $('#gallery .pict');
    // If there is a next image
    if (nextImg.length > 0) { 
      // Fade in the next image
      $('#overlay .pict').attr('src', nextImg.attr('src')).fadeIn(800);
    } else {
      // Otherwise fade in the first image
      $('#overlay .pict').attr('src', $(images[0]).attr('src')).fadeIn(800);
    }
    // Prevents overlay from being hidden
    event.stopPropagation();
  });

// When previous button is clicked
prevButton.on('click', function(event) {
    // Hide the current image
    $('#overlay .pict').hide();
    // Overlay image location
    var currentImgSrc = $('#overlay .pict').attr('src');
    // Image with matching location of the overlay image
    var currentImg = $('#gallery .pict[src="' + currentImgSrc + '"]');
    // Finds the next image
    var prevImg = $(currentImg.closest('.mySlides').prev().find('.pict'));
    // If there is a prev image
    if (prevImg.length > 0) {
        // Fade in the next image  
        $('#overlay .pict').attr('src', prevImg.attr('src')).fadeIn(800);
    } else {
        // Otherwise fade in the first image
        $('#overlay .pict').attr('src', $(images[11]).attr('src')).fadeIn(800);
    }
    // Prevents overlay from being hidden
    event.stopPropagation();
  });

	

})(jQuery);