(function() {

    var button = document.querySelector('#js-menu__hamburger');
    var menu = document.querySelector('#js-menu-nav__list');
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    button.addEventListener('click', function() {

        button.classList.toggle('open');
        menu.classList.toggle('menu-nav__hide')
    });

    window.addEventListener('resize', () => {
        viewportWidth = window.innerWidth || document.documentElement.clientWidth;

        if (viewportWidth > 768 & menu.classList.contains('menu-nav__hide')) {

            button.classList.toggle('open');
            menu.classList.toggle('menu-nav__hide')
        }

    }, false);

})();