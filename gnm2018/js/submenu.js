(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.submenu_Behavior = {
    attach: function (context, settings) {
      $('.dropdown-submenu button').once('submenu-click').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
