$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide up btn
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // typing animated
    var typed = new Typed(".typing", {
        strings: ["\"Software Engineer\"", "\"Programmer\"", "\"Full Stack Developer\""],
        typeSpeed: 50,
        backSpeed: 10,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["\"Software Engineer\"", "\"Programmer\"", "\"Full Stack Developer\""],
        typeSpeed: 50,
        backSpeed: 10,
        loop: true
    });
    
    // toggle menu btn
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

    //drop down qualification card
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("mouseover", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + "px";
        });
        coll[i].addEventListener("mouseout", function() {
            this.classList.toggle("active");            
            var content = this.nextElementSibling;
            content.style.maxHeight = null
        });
    }
});