// Start  Menu
var menu = document.getElementById("menu");
function closemenu() {
    menu.style.right = "-250vh";
}
function openmenu() {
    menu.style.right = "0";
}
// End  Menu
// Start Lets Talk Hover
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});
document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});
$('.lets-talk').hover(function () {
    $('.cursor').addClass("cursor-content", 200);
}, $('.lets-talk').mouseout(function () {
    $('.cursor').removeClass("cursor-content", 200);
}));
// End Lets Talk Hover
var slider = $('.slider-count');
var slideCount = slider.find('.swiper-slide').length;
var slideIndex = 0;
$('.portfolio-next').on('click', function() {
    slideIndex++;
    if (slideIndex >= slideCount-1) {
        $('#right-grey-btn').show();
        $('#right-white-btn').hide();
    }
    if(slideIndex===1){
        $('#left-grey-btn').hide();
        $('#left-white-btn').show();
    }

});
$('.portfolio-prev').on('click', function() {
    slideIndex--;
    if (slideIndex > 0) {
        $('#right-grey-btn').hide();
        $('#right-white-btn').show();
    }
    if(slideIndex ===0){
        $('#left-grey-btn').show();
        $('#left-white-btn').hide();
    }
});



var service_slider = $('.service-slider');
var slideCountTotal = service_slider.find('.swiper-slide').length;

var serviceIndex = 0;
$('.swiper-button-new-next').on('click', function() {
    serviceIndex++;
    //console.log(slideCountTotal,serviceIndex)
    if (serviceIndex >= slideCountTotal-1) {
        $('#right-gray-service').show();
        $('#right-white-service').hide();
    }
    if(serviceIndex ===1){
        $('#left-gray-service').hide();
        $('#left-white-service').show();
    }

});
$('.swiper-button-new-prev').on('click', function() {
    serviceIndex--;
    if (serviceIndex > 0) {
        $('#right-gray-service').hide();
        $('#right-white-service').show();
    }
    if(serviceIndex === 0){
        $('#left-gray-service').show();
        $('#left-white-service').hide();
    }
});

//do this if document is ready
$(document).ready(function() {
    //STICKY NAVBAR
    var lastScrollTop; // This Varibale will store the top position
    window.addEventListener('scroll',function(){
    //on every scroll this funtion will be called
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //This line will get the location on scroll
    if(scrollTop > lastScrollTop){ //if it will be greater than the previous
        $("#extrasol-navbar").css("top","-120px");
    }
    else {
        $("#extrasol-navbar").css("top","0");
    }
    lastScrollTop = scrollTop; //New Position Stored
    });


    // put your page initialization code here
    if (document.getElementById("home-body")) {
        // Create a media query
        const mediaQuery = window.matchMedia('(min-width: 1600px)');
        if (mediaQuery.matches) {
            const sr = ScrollReveal({
                origin: 'top',
                distance: '50px',
                duration: 2000,
                reset: false
            });
            sr.reveal(`.header-bg h1`, {
                interval: 200,
                origin: 'left'
            })
            sr.reveal(`.header-img`, {
                interval: 200,
                origin: 'right'
            })
            sr.reveal(`.slider-bg h1`, {
                origin: 'left',
                interval: 200
            })
            sr.reveal(`.slider-txt`, {
                origin: 'left',
                interval: 200
            })
            sr.reveal(`.slider-bg button`, {
                origin: 'left',
                interval: 200
            })
            sr.reveal(`.swiper-btn`, {
                origin: 'right',
                interval: 200
            })
            sr.reveal(`.img-text h1`, {
                origin: 'left',
                interval: 200
            })
            sr.reveal(`.img-text p`, {
                origin: 'left',
                interval: 200
            })
            sr.reveal(`.img-text img`, {
                origin: 'right',
                interval: 200
            })
            sr.reveal(`.p-text`, {
                interval: 200
            })
            sr.reveal(`.trusted`, {
                origin: 'left',
                interval: 200
            })
            sr.reveal(`.trusted img`, {
                origin: 'top',
                interval: 200
            })
            sr.reveal(`.business-img`, {
                origin: 'left',
                interval: 200
            })
            sr.reveal(`.business-img img`, {
                origin: 'top',
                interval: 200
            })
            sr.reveal(`.report-form`, {
                origin: 'left',
                interval: 200
            })
            sr.reveal(`.report-img`, {
                origin: 'right',
                interval: 200
            })
            sr.reveal(`.p-b`, {
                origin: 'right',
                interval: 200
            })
            sr.reveal(`.mt`, {
                origin: 'top',
                interval: 200
            })
            sr.reveal(`.achieve-img`, {
                origin: 'top',
                interval: 200
            })
            sr.reveal(`.achieve-img p`, {
                origin: 'left',
                interval: 200
            })
        }
    }
    else {}

    var swiper_one = $(".mySwiper");

    if(swiper_one) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3.5,
            spaceBetween: 30,
            centeredSlides: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                220: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                420: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                520: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                },
                1380: {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                },
                1700: {
                    slidesPerView: 4.5,
                    spaceBetween: 50,
                },
            },
            navigation: {
                nextEl: ".swiper-button-new-next",
                prevEl: ".swiper-button-new-prev",
            },
        });
    }

    var swiper_two = $(".mySwiper-two");
    if(swiper_two) {

        var swiper = new Swiper(".mySwiper-two", {
            spaceBetween: 30,
            grabCursor: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
});