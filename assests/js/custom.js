$(document).ready(function(){

    $('.all-clients').owlCarousel({
        // items:2,
        autoplay:true,
        loop:true,
        mouseDrag:false,
        animateIn:'fadeIn',
        animateOut:'fadeOut',
        // navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

    $('.resource-element-all').owlCarousel({
        autoplay:true,
        loop:true,
        margin:20,
        nav:true,
        animateIn:'fadeIn',
        animateOut:'fadeOut',
        
        responsive:{
            0:{
               items:1
            },
            600:{
               items:2
            },
            1000:{
               items:3
            }
        }

    });

    $('.price-table-all').owlCarousel({
        autoplay:true,
        loop:true,
        margin:20,
        nav:true,
        animateIn:'fadeIn',
        animateOut:'fadeOut',
        
        responsive:{
            0:{
               items:1
            },
            600:{
               items:2
            },
            1000:{
               items:4
            }
        }
    });
});