let blur = (function() {
    let wrapper = document.querySelector('.js-hero'),
        form = document.querySelector('.js-hero__bg');

    return {
        set: function() {
            let imgWidth = document.querySelector('.header').offsetWidth,
                imgHeight = document.querySelector('.header').offsetHeight,
                posLeft = -wrapper.offsetLeft,
                posTop = -wrapper.offsetTop - 105,

                blurCSS = form.style;

            blurCSS.width = `${imgWidth}px`;
            blurCSS.height = `${imgHeight}px`;
            blurCSS.transform = `translate(${posLeft}px,${posTop}px)`;
        },
    };
}());

blur.set();

window.onresize = function() {
    blur.set();
};