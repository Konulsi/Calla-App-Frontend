$('#topbtn').click(function () {
    $('html').animate({
        scrollTop: 0
    }, 900)

})



$(window).scroll(function () {
    var header = $('.fixed-nav'),
        scroll = $(window).scrollTop();
    let logoImg = $(".logo img")
            if (scroll >= 150) {
        header.css({
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'right': '0',
            'z-index': '99999',
            'background-color' : 'white',
            'box-shadow': 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
        });
        logoImg.css({
            'margin-top': '-40px',
            'width': '14%'
        })
    } else {
        header.css({
            'position': 'relative',
            'box-shadow': 'none'
        });
        logoImg.css({
            'margin-top': '0px',
            'padding-top': '4%',
            'width': '22%'
        })
    }
});






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

    hamburgerIcon.addEventListener("click", function () {
        hamburgerMenuList.classList.toggle("close")

    })

    //responsive navbar
    let userIcon = document.querySelector(".right-icons .icons i");
    let logReg = document.querySelector(".right-icons .icons .log-reg")

    userIcon.addEventListener("click", function (e) {
        e.preventDefault();
        logReg.classList.toggle("d-none");
    })

    //search
    $(".search").on("click", function (e) {
        e.preventDefault()
        $(".search-input").removeClass("d-none");
    })

    $(".close-icon").on("click", function () {
        $(".search-input").addClass("d-none");
        $(".search-input input").val("");
    })

    //responsive search
    $(".search-input").on("click", function () {
        $(".right-icons .icons .log-reg").addClass("d-none");
    })

    $(".search").on("click", function (e) {
        $(".right-icons .icons .log-reg").addClass("d-none");
    })

    





})