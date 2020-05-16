jQuery(document).ready(function($) {

    // VAR
    var listItem = $('.menu-list-descktop li');
    var mobileMenuIcon = $('#mobile__menu-icon');
    var menuListMobile = $('.menu-list-mobile');

    listItem.mouseenter(function () { 
        $(this).find('.sub-menu').fadeIn();
    });

    listItem.mouseleave(function () { 
        $(this).find('.sub-menu').fadeOut();
    });

    mobileMenuIcon.on('click',function() {
        menuListMobile.toggle();
    });

    setInterval( function() {
        var size = window.innerWidth;
        
        if ( size > 768 ) {
            menuListMobile.hide();
        }  
    }, 1);
    
}); ////////////////////////////////