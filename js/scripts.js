(function ($) {

    "use strict";
    Backdrop.behaviors.abng_businessone = {
      attach: function (context, settings) {  
        /**
         * Initiate glightbox
         */
        const glightbox = GLightbox({
            selector: '.glightbox'
        });
      }
    };

    Backdrop.behaviors.toggles = {
        attach: function(context, settings) {
          var $toggles = $(context).find('[data-toggle]').once('toggle');
      
          $toggles.on('click', function(){
            var $this = $(this);
            var $target = $('[data-toggleable="' + $this.attr('data-toggle') + '"]');
            $target.toggleClass('js-toggled');
          });
        }
      };    

      Backdrop.behaviors.backtotop = {
        attach: function (context, settings) {  
          var toTopButton = document.getElementById("to-top-button");

              // Get the 'to top' button element by ID
              var toTopButton = document.getElementById("to-top-button");

              // Check if the button exists
              if (toTopButton) {

                  // On scroll event, toggle button visibility based on scroll position
                  window.onscroll = function() {
                      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                          toTopButton.classList.remove("hidden");
                      } else {
                          toTopButton.classList.add("hidden");
                      }
              };

                  // Function to scroll to the top of the page smoothly
                  window.goToTop = function() {
                      window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                      });
                  };
              }

        }
      };

})(jQuery);    