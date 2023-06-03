$('#topbtn').click(function () {
    $('html').animate({
        scrollTop: 0
    }, 900)

})


$(document).ready(function () {


    //search
    let searchInput = $(".search-input");
    let rightIcons = $(".right-icons");

    $(".close-icon").on("click", function () {
        $(searchInput).addClass("d-none");
        $(rightIcons).removeClass("d-none");
        $(".search-input input").val("");
    })

    $(".search-icon").on("click", function (e) {
        e.preventDefault()
        $(rightIcons).addClass("d-none");
        $(searchInput).removeClass("d-none");

    })

  
    //hamburger-menu

    let hamburgerIcon = document.querySelector(".hamburger-icon i");
    let hamburgerMenuList = document.querySelector(".hamburger-menu-list .nav-menu")
    
    hamburgerIcon.addEventListener("click", function(){
        hamburgerMenuList.classList.toggle("close")

    })



})