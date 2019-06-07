jQuery(document).ready(function () {

  (function () {
    jQuery('.pan-layout').on('click', '.pan-layout-header__menutoggle', function (e) {
      var $layout = jQuery(e.delegateTarget);
      $layout.toggleClass('pan-menu-open');
    });

    jQuery('.pan-layout').on('click', '.pan-layout-overlay', function (e) {
      var $layout = jQuery(e.delegateTarget);
      $layout.removeClass('pan-menu-open');
    });
  })();
  
});


jQuery(document).on('pageinit', function () {

  (function () {
    jQuery('.pan-layout').on('swipeleft', function (e) {
      var $layout = jQuery(e.currentTarget);
      $layout.removeClass('pan-menu-open');
    });
  })();

});
