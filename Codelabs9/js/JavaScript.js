$(document).ready(function () {
    //User click on navbar item -> Toggle submenu
      $(".nav-bar-item").click(function() {
          $(this).find(".sub-nav").toggle();
      }) 
    //User click on menu button - mobile
    $(".menu-button").click(function() {
        $(".navbar-and-logo__container").toggle();
    })
    //Prevent closing menu if user click on sub navigation
    $(".sub-nav").click(function(event) {
        event.stopPropagation();
    })
    //User click on sub-menu link
    $(".nav-bar-item").click(function(event) {
        if ($(this).hasClass("active"))
            { //When a clicked menu item is already opened -> Close current openings
                $(".nav-bar-item").removeClass("active");
                $(".sub-nav").hide();
        }
        else 
            { //hide all opening other sub-nav & menu item
                $(".nav-bar-item").removeClass("active");
                $(".sub-nav").hide();
                //Show selected sub-nav 
                $(this).addClass("active");
                $(this).find(".sub-nav").toggle();
                event.stopPropagation();
            }        
    })

    //User click outside the sub-nav -> close sub-nav
   $("body, html").click(function() {
       $(".nav-bar-item").removeClass("active");
       $(".sub-nav").hide();
   })
    
     $(".owl-carousel").owlCarousel();
})

//OWL CAROUSEL
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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
})