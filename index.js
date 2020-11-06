/**
 * Infinite Scroll + Masonry + ImagesLoaded
 */
$(function () {
  $('.post-grid').imagesLoaded(function () {
      var $container = $('.post-grid');
      // initialize
      $container.masonry({
          itemSelector: '.post-grid__item',
          horizontalOrder: true
      });

      var msnry = $container.data('masonry');

      $container.infiniteScroll({
          path: '.next-posts-link',
          hideNav: '.blog-pagination',
          append: '.post-grid__item',
          outlayer: msnry,
          history: false
      });

  });
});
