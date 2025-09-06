$(document).ready(function() {
    // Mobile menu toggle
    $('.hamberger').click(function() {
        $('.mobile-nav').addClass('open');
    });
    
    $('.times').click(function() {
        $('.mobile-nav').removeClass('open');
    });
    
    // Close mobile menu when clicking on a link
    $('.mobile-nav ul li a').click(function() {
        $('.mobile-nav').removeClass('open');
    });
    
    // Ensure header and footer are loaded
    setTimeout(function() {
        if ($("#header-placeholder").is(':empty')) {
            console.error("Header not loaded. Check if partials/header.html exists.");
        }
        if ($("#footer-placeholder").is(':empty')) {
            console.error("Footer not loaded. Check if partials/footer.html exists.");
        }
    }, 1000);
});