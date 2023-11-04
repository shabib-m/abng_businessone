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
    
})(jQuery);    