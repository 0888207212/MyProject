var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//jquery table-1
$(document).ready(function() {
    $("#livingRoom").click(function() {
        $("#home-2_table-1").show();
        $("#home-2_table-2").hide();
        $("#home-2_table-3").hide();
        $("#home-2_table-4").hide();
    });
});
$(document).ready(function() {
    $("#kitchen").click(function() {
        $("#home-2_table-2").show();
        $("#home-2_table-1").hide();
        $("#home-2_table-3").hide();
        $("#home-2_table-4").hide();
    });
});
$(document).ready(function() {
    $("#bedroom").click(function() {
        $("#home-2_table-1").hide();
        $("#home-2_table-2").hide();
        $("#home-2_table-3").show();
        $("#home-2_table-4").hide();
    });
});
$(document).ready(function() {
    $("#bookstore").click(function() {
        $("#home-2_table-1").hide();
        $("#home-2_table-2").hide();
        $("#home-2_table-3").hide();
        $("#home-2_table-4").show();
    });
});

//jquery table-2
$(document).ready(function() {
    $("#living").click(function() {
        $("#home-4_table-1").show();
        $("#home-4_table-2").hide();
        $("#home-4_table-3").hide();
        $("#home-4_table-4").hide();
    });
});
$(document).ready(function() {
    $("#ket").click(function() {
        $("#home-4_table-2").show();
        $("#home-4_table-1").hide();
        $("#home-4_table-3").hide();
        $("#home-4_table-4").hide();
    });
});
$(document).ready(function() {
    $("#bed").click(function() {
        $("#home-4_table-1").hide();
        $("#home-4_table-2").hide();
        $("#home-4_table-3").show();
        $("#home-4_table-4").hide();
    });
});
$(document).ready(function() {
    $("#book").click(function() {
        $("#home-4-table-1").hide();
        $("#home-4_table-2").hide();
        $("#home-4_table-3").hide();
        $("#home-4_table-4").show();
    });
});

//all-view
$(document).ready(function() {
    $("#all-view").click(function() {
        $("#table-all-view").slideToggle("slow");
    });
});
//search-bar
$(document).ready(function() {
    $("#search").click(function() {
        $("#search-bar").slideToggle("speed");
    });
});

//cart
$(document).ready(function() {
    $("#cart-shopping").click(function() {
        $("#header-mid_cart").slideToggle("slow");
    });
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = 1;
    } else {
        mybutton.style.opacity = 0;
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}