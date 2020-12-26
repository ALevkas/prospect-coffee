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
    },

    scrollbar: {
        el: ".order__scroll",
        dragClass: "order__drag-scroll",
        draggable: true,
    },
})