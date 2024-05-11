

var mixer = mixitup('.grid-portfolio-container');

//hamburger menu
function openMenu(){
    document.getElementById ('navbar'). style.height = "100vh"
}
function closeMenu(){
    document.getElementById ('navbar'). style.height = "0"
}

// smoth scroll
$(function(){
    $('.menu-item a'). on('click', function(){
        $('body').animate({
           scrollTop: $($.attr(this, 'href')).offset().top
        },1000);
        
    });
});