$(document).ready(function(){
    $('.navbar').addClass("sticky");

    $(window).scroll(function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    $('.email-btn').click(function(){
        var copyText = "b.hegedus45@gmail.com";
      
        navigator.clipboard.writeText(copyText);
        var obj = document.getElementById("email-clipboard");
        var orig = obj.style.color;
        obj.style.color = 'rgb(3, 161, 252)';
        setTimeout(function(){
             obj.style.color = orig;
        }, 500);

    });
});