/*global alert, $, console*/

/* Start Fixed Menu */
$(document).ready(function () {
    "use strict";
    $(".fixed-menu .fa-gear").on("click", function () {
        $(this).parent().toggleClass("show");

        if ($(this).parent().hasClass("show")) {
            $(this).parent().animate({
                top: "0"
            }, 600);
            $(".simple-system,.Partical-system").animate({
                top: "160px"
            }, 600);
        } else {
            $(this).parent().animate({
                top: "-160px"
            }, 600);
            $(".simple-system,.Partical-system").animate({
                top: "0px"
            }, 600);
        }
    });

    /* Selctor The Type Of System */
    var data;
    $(".fixed-menu .unorder li").on("click", function () {
        data = $(this).data("type");
        if (data === "simple") {
            $(".Partical-system").slideUp(function () {
                $(".simple-system").slideDown();
            });

        } else {
            $(".simple-system").slideUp(function () {
                $(".Partical-system").slideDown();
            });

        }

    });
    /* Start Color The List */
    $(".fixed-menu .unorder li").click(function () {
        $(this).addClass("selctor").siblings().removeClass("selctor");
    });

    /* Start Animation The Simple System */
    $(".simple-system").animate({
        margin: "30px auto"
    }, 1600, function () {
        $(".simple-system h3").fadeToggle(500, function () {
            $(".simple-system .start-simple .number-simple").fadeToggle(500, function () {
                $(".simple-system span").fadeToggle(500, function () {
                    $(".simple-system .start-simple .select-simple-style").fadeToggle(500, function () {
                        $(".simple-system .start-simple .button-simple").fadeToggle(500, function () {
                            $(".simple-system .start-simple .result-simple").fadeToggle(500);
                        });
                    });
                });
            });
        });
    });

});

/* Start Evalute The Numbre */
$(document).ready(function () {
    "use strict";
    var typeSystem,
        result,
        finalResult,
        typeSystemForPartical,
        typeSestemForParticalMain,
        resultForPartical,
        finalResultForParticl;
    $(".simple-system .start-simple .number-simple").keyup(function () {
        result = $(this).val();
    });
    $(".simple-system .start-simple .select-simple-style").change(function () {
        typeSystem = $(this).val();
        // Start Select The System Depond The Type Of System
        if (typeSystem === "decimal") {
            finalResult = result + " This To decimal";


        } else if (typeSystem === "binary") {
            finalResult = result + " This To binary";




        } else if (typeSystem === "octal") {
            finalResult = result + " This To octal";




        } else if (typeSystem === "hexadecmal") {
            finalResult = +result + " This To hexadecmal";



        } else {
            $(".simple-system .start-simple .number-simple").val("");
            $(".simple-system .start-simple .result-simple").val("");

        }

    });

    // When I Click The button Show The Result
    $(".simple-system .start-simple .button-simple").on("click", function () {
        $(".simple-system .start-simple .result-simple").val(finalResult);
    });

    /* Start Partical System */
    $(".Partical-system .start-Partical .number-Partical").keyup(function () {
        resultForPartical = $(this).val();
    });

    $(".Partical-system .start-Partical .select-Partical-style").change(function () {
        typeSestemForParticalMain = $(this).val();
        $(".Partical-system .start-Partical .select-Partical-style-system").change(function () {
            typeSystemForPartical = $(this).val();
            if (typeSestemForParticalMain === typeSystemForPartical) {
                $(this).val($(this).val("Soory"));
            }


            if (typeSestemForParticalMain === "decimal" && typeSystemForPartical === "binary") {
               
                
                finalResultForParticl = parseInt(resultForPartical, 10);



            } else if (typeSestemForParticalMain === "decimal" && typeSystemForPartical === "octal") {
                finalResultForParticl = parseInt(resultForPartical, 10);



            } else if (typeSestemForParticalMain === "decimal" && typeSystemForPartical === "hexadecmal") {
                finalResultForParticl = parseInt(resultForPartical, 10);




            } else if (typeSestemForParticalMain === "binary" && typeSystemForPartical === "decimal") {
                finalResultForParticl = parseInt(resultForPartical, 2);



            } else if (typeSestemForParticalMain === "binary" && typeSystemForPartical === "octal") {
                finalResultForParticl = parseInt(resultForPartical, 2);




            } else if (typeSestemForParticalMain === "binary" && typeSystemForPartical === "hexadecmal") {
                finalResultForParticl = parseInt(resultForPartical, 2);





            } else if (typeSestemForParticalMain === "octal" && typeSystemForPartical === "decimal") {
                finalResultForParticl = parseInt(resultForPartical, 8);




            } else if (typeSestemForParticalMain === "octal" && typeSystemForPartical === "binary") {
                finalResultForParticl = parseInt(resultForPartical, 8);



            } else if (typeSestemForParticalMain === "octal" && typeSystemForPartical === "hexadecmal") {
                finalResultForParticl = parseInt(resultForPartical, 8);




            } else if (typeSestemForParticalMain === "hexadecmal" && typeSystemForPartical === "decimal") {
                finalResultForParticl = parseInt(resultForPartical, 16);




            } else if (typeSestemForParticalMain === "hexadecmal" && typeSystemForPartical === "binary") {
                finalResultForParticl = parseInt(resultForPartical, 16);



            } else if (typeSestemForParticalMain === "hexadecmal" && typeSystemForPartical === "octal") {
                finalResultForParticl = parseInt(resultForPartical, 16);


            } else {
                $(".Partical-system .start-Partical .result-Partical ").val("Error Input");
            }

            // When I Click The button Show The Result
            $(".Partical-system .start-Partical .button-Partical").on("click", function () {
                $(".Partical-system .start-Partical .result-Partical").val(" ");
                $(".Partical-system .start-Partical .result-Partical").val(finalResultForParticl);
                console.log(finalResult);
            });
        });
    });
});
