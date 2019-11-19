export const SLIDER_SETTINGS = {
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5.025,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    lazyLoad: "progressive",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4.025
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3.025,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2.025,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.5,
            }
        }
    ]
}