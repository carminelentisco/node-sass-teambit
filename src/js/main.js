console.log('Sono stato inserito correttamente');

// setup

var menuList = $('.menu-list li');
var subMenu = $('sub-menu');
menuList.on('mouseenter', function() {
    var menuListItem = $(this).menuList;
    $('.sub-menu').show();
});