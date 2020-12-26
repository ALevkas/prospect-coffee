let wrapper = document.querySelector('.wrapper');

let pageSlider = new Swiper('.page', {
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",
    direction: 'vertical',
    slidesPerView: 'auto',
    parallax: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    watchOverflow: true,
    speed: 800,

    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    pagination: {
        el: ".page__pagination",
        type: "bullets",
        clickable: 'true',
        bulletClass: "page__bullet",
        bulletActiveClass: "page__bullet_active",
    },

    scrollbar: {
        el: ".page__scroll",
        dragClass: "page__drag-scroll",
        draggable: true,
    },

    init: false,

    on: {
        init: function () {
            menuSlider();
            setScrollType();
            wrapper.classList.add('_loaded');
        },
        slideChange: function () {
            activeClassRemove();
            menuLinks[pageSlider.realIndex].classList.add('_active');
        },
        resize: function() {
            setScrollType();
        }
    }
})

let menuLinks = document.querySelectorAll('.menu__link');

const menuSlider = () => {
    if (menuLinks.length > 0) {
        menuLinks[pageSlider.realIndex].classList.add('_active');
        for (const [index, item] of menuLinks.entries()) {
            item.addEventListener('click', (e) => {
                activeClassRemove();

                pageSlider.slideTo(index, 800);
                item.classList.add('_active');

                e.preventDefault();
            });
        }
    }
}

const activeClassRemove = () => {
    const menuLinkActive = document.querySelector('.menu__link._active');
    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active');
    }
}

const setScrollType = () => {

    if (wrapper.classList.contains('_free')) {
        wrapper.classList.remove('_free');
        pageSlider.params.freeMode = false;
    }

    for (const slide of pageSlider.slides) {
        const slideContent = slide.querySelector('.screen__content');

        if (slideContent) {
            const slideContentHeight = slideContent.offsetHeight;

            if (slideContentHeight > window.innerHeight) {
                wrapper.classList.add('_free');
                pageSlider.params.freeMode = true;
                break;
            }
        }
    }
}

pageSlider.init();

let orderSlider = new Swiper('.order', {
    wrapperClass: "order__wrapper",
    slideClass: "order__image",
    direction: 'horizontal',
    slidesPerView: 'auto',
    parallax: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    watchOverflow: true,
    speed: 1200,

    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    pagination: {
        el: ".order__pagination",
        type: "bullets",
        clickable: 'true',
        bulletClass: "order__bullet",
        bulletActiveClass: "order__bullet_active",
    }
})