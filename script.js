//https://coderwall.com/p/uf2pka/normalize-twitter-bootstrap-carousel-slide-heights

function carouselNormalization() {
  var items = $('#carouselPortfolio .carousel-item'), //grab all slides
  heights = [], //create empty array to store height values
  shortest; //create variable to make note of the shortest slide

  if (items.length) {
    function normalizeHeights() {
      items.each(function() { //add heights to array
        heights.push($(this).height());
      });
      shortest = Math.min.apply(null, heights); //cache largest value
      items.each(function() {

        //check to see if the picture is vertical
        if ($(this).height() > $(this).width()){
          $("img", this).css('height',shortest + 'px');
          $("img", this).css('width', 'auto');
          $("img", this).css({'margin': '0 auto'})

        }
        else {
          $("img", this).css('height',shortest + 'px');
        }

      });
    };
    normalizeHeights();

    // jQuery(window).on('resize orientationchange', function () {
    //   shortest = 0, heights.length = 0; //reset vars
    //   items.each(function() {
    //     $(this).css('height',shortest + 'px');
    //
    //   // jQuery('.carousel-inner').css('height','0'); //reset min-height
    // });
    // normalizeHeights(); //run it again
    // });
  }
}

carouselNormalization();
