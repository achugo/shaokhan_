(function($) {
  // Begin jQuery
  $(document).ready(function() {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function(e) {
      $(this)
        .siblings(".nav-dropdown")
        .toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown")
        .not($(this).siblings())
        .hide();
      e.stopPropagation();
    });
    $("nav ul .mobile-bottom a").click(function(e) {
      $(this)
        .siblings(".nav-dropdown")
        .toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown")
        .not($(this).siblings())
        .hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function() {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $(".nav-toggle").click(function() {
      if ($(".x-men").length == 0) {
        $(".nav-toggle").addClass("x-men");
        $("nav ul").fadeIn("fast");
      } else {
        $("nav ul").fadeOut("fast");
      }
    });

    // $("#nav-toggle1").click(function() {
    //   if ($(".x-men").length == 0) {
    //     $("#nav-toggle1").addClass("x-men");
    //     $("nav ul").fadeIn("fast");
    //   } else {
    //     $("nav ul").fadeOut("fast");
    //   }
    // });

    $(".linkM").click(function() {
      if (window.matchMedia("(max-width: 700px)").matches) {
        $(".nav-toggle").removeClass("x-men");
        $(".nav-toggle").removeClass("active");
        $("nav ul").fadeOut("fast");
      }
    });

    // Hamburger to X toggle
    $(".nav-toggle").on("click", function() {
      if (this.classList.contains("active")) {
        this.classList.remove("x-men");
      }
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery
