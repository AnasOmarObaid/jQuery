/*global alert, console, function, $, document*/


/* Start Scroll To Element [navbar] */

$(document).ready(function () {
    "use strict";
    $(".navbar li a").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top + 3
        }, 2000);

    });

});



/* Start Active Class And Color The Element When I Click It In The Navbar */

$(document).ready(function () {
    "use strict";
    $(".navbar li a").click(function () {
        $(this).addClass("active").parent().siblings().find('a').removeClass("active");
    });
});


/* Start Color The Navbar Element When I Reacth This Element */
$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        $(".block").each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
                var blockId = $(this).attr("id");
                $('.navbar li a[data-scroll = "' + blockId + '"]').addClass("active").parent().siblings().find('a').removeClass("active");
            }
        });
    });
});



/* Start  Scroll To Top Button */
$(window).scroll(function () {
    "use strict";
    var scrollToTop = $(".scroll-to-top");
    if ($(window).scrollTop() >= 1500) {
        if (scrollToTop.is(":hidden")) {
            scrollToTop.fadeIn(500);
        }
    } else {
        scrollToTop.fadeOut(500);
    }
});
$(document).ready(function () {
    "use strict";
    $(".scroll-to-top").click(function (ev) {
        ev.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 3000);
    });
});


/* Start First Popup  */

$(document).ready(function () {
    "use strict";
    $('.block .show-first-popup').click(function () {
        $(".first-popup").fadeIn(700);
    });
    $('.first-popup').click(function () {
        $(this).fadeOut(700);
    });
    $('.first-popup .inner').click(function (e) {
        e.stopPropagation(); // Stop Hide popup When I Click In inner
    });
    $('.first-popup .inner .close').click(function () {
        $(".first-popup").fadeOut(700);
    });
});

/* Start Second Popup */

$(document).ready(function () {
    "use strict";
    $('.block .show-second-popup').click(function () {
        $(".second-popup").fadeIn(700);
    });
    $('.second-popup').click(function () {
        $(this).fadeOut(700);
    });
    $('.second-popup .inner').click(function (e) {
        e.stopPropagation(); // Stop Hide popup When I Click In inner
    });
    $('.second-popup .inner .close').click(function () {
        $(".second-popup").fadeOut(700);
    });
});

$(document).keydown(function (e) { // Ux To Close The Popup When I Click The sec
    "use strict";
    if (e.keyCode === 27) {
        $(".second-popup").fadeOut(700);
        $(".first-popup").fadeOut(700);
    }
});


/* Start Progars */

$(document).ready(function () {
    "use strict";
    $(".block .progras span").each(function () {
        $(this).animate({
            "width": $(this).attr("data-pro") + "%"
        }, 3000, function () {
            $(this).text($(this).attr("data-pro") + "%").css({
                overflow: "hidden",
                color: "#fff",
                fontSize: "17px",
                textAlign: "center",
                paddingTop: "8px",
                borderRadius: "4px"
            }, 3000);
        });



    });
});

/* Start fixed Menu */

$(document).ready(function () {
    "use strict";
    $('.fixed-menu .fa-gear').click("click", function () {
        $(this).parent().toggleClass("fixed");
        if ($(this).parent().hasClass("fixed")) {
            $(this).parent().animate({
                left: "0"
            }, 700);

            $(".block").animate({
                paddingLeft: "270"
            }, 700);

        } else {
            $(this).parent().animate({
                left: "-290"
            }, 700);
            $(".block").animate({
                paddingLeft: "0"
            }, 700);


        }
    });
});

/* Start Change Theme Color */

$(document).ready(function () {
    "use strict";
    $(".fixed-menu .change-color li").on("click", function () {
        $("body").attr("data-change-color", $(this).data("color"));
    });
});


/* Start Gallery */
var chosenImg;
$(document).ready(function () {
    "use strict";
    $(".gallery .thumbnails img").on("click", function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        $('.master-img img').hide().attr("src", $(this).attr('src')).fadeIn(700);
    });

    // To Select When I click The Chavrone
    $(".gallery .icons .fa-chevron-right").on("click", function () {
        if ($(".gallery .thumbnails .selected").is(":last-child")) {
            $('.gallery .thumbnails img').eq(0).click();
        } else {
            $(".gallery .thumbnails .selected").next().click();
        }
    });

    $(".gallery .icons .fa-chevron-left").on("click", function () {
        if ($(".gallery .thumbnails .selected").is(":first-child")) {
            $(".gallery .thumbnails img").eq(5).click();
        } else {
            $(".gallery .thumbnails .selected").prev().click();
        }
    });
});


/* Start Products*/

$(document).ready(function () {
    "use strict";
    $('.products .fa-plus, .Secondrae-products .fa-plus').click(function () {
        $(this).toggleClass("fa-plus fa-minus");
        $(this).next('p').slideToggle();
    });
});

/* Start Error Message */
$(document).ready(function () {
    "use strict";
    $(".error-message").animate({
        right: "0"
    }, 2000, function () {
        $(this).delay(6000).animate({
            right: "-593px"
        }, 2000);
    });
});

/* Start Focus And Bluer Placehold */
var attr;
$(document).ready(function () {
    "use strict";
    $("[placeholder]").on("focus", function () {
        attr = $(this).attr("placeholder");
        $(this).attr("placeholder", " ");
    });
    $("[placeholder]").on("blur", function () {
        $(this).attr("placeholder", attr);
    });
});

/* Start Show The Message If This Is Nothing Words */

$(document).ready(function () {
    "use strict";
    $("[placeholder]").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").fadeIn().delay(3000).fadeOut();
        }
    });
});

/* Start input File */
$(document).ready(function () {
    "use strict";
    $(":input[type = 'file']").wrap(" <div class = 'wrap-fild'></div>");
    $(".wrap-fild").append("<p> Click To Chosen Filed </p>");
    $(".wrap-fild").prepend('<i class="fa fa-upload" aria-hidden="true fa-lg"></i>');
    $(".wrap-fild input[type = 'file']").change(function () {
        $(".wrap-fild p").text($(this).val().substr(12));
    });
});

/* How To Change The Dearction Depond In The Arabic OR English */
$(document).keydown(function () {
    "use strict";
    $("[placeholder]").each(function () {
        $(this).keyup(function () {
            if (($(this).val().charCodeAt(0)) > 200) {
                $(this).css({
                    direction: "rtl",
                    paddingRight: "60px"
                });
            } else {
                $(this).css({
                    direction: "ltr"
                });
            }
        });
    });
});

/* Start Tages And Hide When I Press , */
$(document).ready(function () {
    "use strict";
    $("[name = 'tges']").css({
        paddingLeft: "9px"
    });

    $("[name = 'tges']").on("keyup", function (e) {
        var uniCode = e.which; // To Git Value Of UniCode
        if (uniCode === 188) {
            var valueTages = $(this).val(),
                length = $(this).val().length,
                index = length - 1,
                newValue = $(this).val().substr(0, index);
            $(this).val("");
            $(".tages").append("<span class = 'tages-span'>" + newValue + '</span>');
            $(".tages").append("<i class = 'fa fa-times fa-lg></i>'>");
        }
        $(".our-form .ComaPrees .tages .fa-times").on("click", function () {
            $(this).prev("span").hide();
            $(this).hide();
        });

    });
});

/* Start Trim Text */
var text,
    newText;
$(document).ready(function () {
    "use strict";
    $(".trim-text p").each(function () {
        if ($(this).text().length > 100) {
            text = $(this).text();
            newText = $(this).text().substr(0, 100);
            $(this).text(newText).append("<span class = 'more'> ... more</span>");
        }
    });
    $(".trim-text p").on("click", ".more", function () {
        $(".trim-text p").text(text).append("<span class = 'less'> ... less</span>");
    });
    $(".trim-text p").on("click", ".less", function () {
        $(".trim-text p").text('');
        $(".trim-text p").text(newText).append("<span class = 'more'> ... more</span>");
    });
});

/* Start Bounce */
$(document).ready(function () {
    "use strict";
    $(".button-bounce").click(function () {
        $(this).animate({
            marginLeft: "-=13px" // To Keep The margin As Should Be
        }, 700).animate({
            marginLeft: "+=13px" //  The Total Is The Same margin
        }, 700);
        $(this).click();
    });
});

/* Make The Div Same Height */
var maxHehigt = 0;
$(".make-div div").each(function () {
    "use strict";
    if ($(this).height() > 0) {
        maxHehigt = $(this).height();
    }
    $(".make-div div").css("min-height", maxHehigt);
});

/* Start Carder */
var zindex = 0;
$(document).ready(function () {
    "use strict";
    $(".make-cardes .card").on("click", function () {
        $(this).animate({
            left: "-50%",
            marginTop: "90px"
        }, 400);
        zindex -= 1;
        $(this).animate({
            zIndex: zindex
        }, 10);
        $(this).animate({
            left: "20%",
            marginTop: "0"
        }, 700);
    });
});

/* Start Show Warrning */
function warrning() {
    "use strict";
    $(".warning").fadeOut(900, function () {
        $(this).fadeIn(900);
        warrning();
    });
}
warrning();

/* Start toDo List */
$(document).ready(function () {
    "use strict";
    var myInput = $(".to-do-text");
    $(".form-input").on("submit", function (ev) {
        ev.preventDefault();
        if (myInput.val() !== "") {
            $("<li>" + myInput.val() + "</li>").prependTo(".what-is-shoud-finish");
            $(".to-do-text").val("");
        }

    });
    $(".what-is-shoud-finish").on("click", "li", function () {
        $(this).css("text-decoration", "line-through");
        $(this).delay(300).fadeOut(500);
    });
});
/* Start Typer */

$(document).ready(function () {
    "use strict";
    var theText = $(".typer span").data("text"),
        theTextLength = theText.length,
        n = 0,
        theTyper = setInterval(function () { // The Function Delay 800Ms then reverse hesself
            $(".typer").each(function () {
                $(this).html($(this).html() + theText[n]); // Becuse If The First One Added And If We Are Dont Use this Well remove
            });
            n += 1;
            if (n >= theTextLength) {
                clearInterval(theTyper);
            }
        }, 33);

});

/* Start Show Menu Navbar */
$(document).ready(function () {
    "use strict";
    // Start Home Navbar
    $('[data-scroll="home"]').mouseenter(function () {
        $(".about-us-navbar").slideUp(200, function () {
            $(".smoal-navbar").slideUp(200, function () {
                $(".services-navbar").slideUp(200, function () {
                    $(".home-navbar-menu").slideDown(200);
                });
            });
        });
    });
    $('.home-navbar-menu').mouseleave(function () {
        $(this).slideUp();
        $(".about-us-navbar").slideUp(200);
        $(".services-navbar").slideUp(200);
        $(".services-navbar").slideUp(200);
    });

    // Start About Us Navbar
    $('[data-scroll="about-us"]').mouseenter(function () {
        $(".home-navbar-menu").slideUp(200, function () {
            $(".smoal-navbar").slideUp(200, function () {
                $(".services-navbar").slideUp(200, function () {
                    $(".about-us-navbar").slideDown(200);
                });
            });
        });

    });
    $('.about-us-navbar').mouseleave(function () {
        $(this).slideUp(200);
        $(".home-navbar-menu").slideUp(200);
        $(".services-navbar").slideUp(200);
    });

    // Start Services Navbar
    $('[data-scroll="services"]').mouseenter(function () {
        $(".about-us-navbar").slideUp(200, function () {
            $(".home-navbar-menu").slideUp(200, function () {
                $(".services-navbar").slideDown(200);
            });
        });
    });
    $('.services-navbar').mouseleave(function () { // Notes That We Dont Use This Navbar hide
        $(".home-navbar-menu").slideUp(200);
        $(".about-us-navbar").slideUp(200);
    });

    // When I Click The block div The navbar Will hide
    $(".block").on("click", function () {
        $(".about-us-navbar").slideUp(200);
        $(".home-navbar-menu").slideUp(200);
        $(".smoal-navbar").slideUp(200, function () {
            $('.services-navbar').slideUp();
        });

    });
    // Start Smoal navbar 
    $(".services-navbar .global-services p").eq(1).click(function () {
        $('.smoal-navbar').slideDown();
    });
});

// =======================================================================================================================//

/* Start Start Continer Box */
// Change The Info When I Click It
var data;
$(document).ready(function () {
    "use strict";
    $(".block .continer .info div").each(function () {
        $(this).click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            data = $(this).data("type");
            if (data === "all") {
                $(".block .continer .beautify-foto").slideUp(function () {
                    $(".block .continer .normal-foto").slideUp(function () {
                        $(".block .continer .all-foto").slideDown();
                    });
                });
            } else if (data === "beautify") {
                $(".block .continer .all-foto").slideUp(function () {
                    $(".block .continer .normal-foto").slideUp(function () {
                        $(".block .continer .beautify-foto").slideDown();
                    });
                });
            } else {
                $(".block .continer .all-foto").slideUp(function () {
                    $(".block .continer .beautify-foto").slideUp(function () {
                        $(".block .continer .normal-foto").slideDown();
                    });
                });
            }
        });
    });
});
