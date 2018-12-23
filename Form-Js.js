/*global $*/


$(document).ready(function () {
    "use strict";
    $(".form-js").animate({
        position: " absolute",
        top: "150px"
    }, 2000);
    $(".form-js").animate({
        right: "350px"
    }, 2000);

    $(".form-js").animate({
        width: "500px"
    }, 2000);
    $(".form-js").animate({
        height: "350px"
    }, 2000, function () {
        $(".form-js img").fadeIn(2000, function () {
            $(".form-js input").fadeIn(2000, function () {
                $(".form-js button").fadeIn(2000, function () {
                    $(".form-js p").slideDown(2000, function () {
                        $(".form-js span").slideDown(2000);
                    });
                });
            });
        });
    });
});

$(document).ready(function () {
    "use strict";
    $(".form-js span").click(function () {
        $(".form-js").hide(4000);
        $(".password").fadeIn(7000);
    });
});
