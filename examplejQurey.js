/*global console, alert,prompt, NameFunction,makeprice, $*/

/*


$ ==> jQurey --> $(" Element Html").Event(function()
  {
  
  Any Statement;
  
  });

*/

// =================================================================================================================//

// Event 

/*$(document).ready(function ()

    {
        "use strict";

        $("p").hide();

    });
 
 
 ==============================================================================


var p = document.getElementById("p"),
    button = document.getElementById("button");
button.onclick = function () {
    "use strict";
    p.innerHTML = " ";

};
 
 ===========================================================================


$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        
        $("h2").hide();
    });
});



================================================================================

    
    $(document).ready(function () {
    "use strict";
    $("button").click(function () {
        
        $(this).hide(); // Its Means Event
    });
});

===============================================================================

    
$(document).ready(function () {
    "use strict";
    $("button").dblclick(function () { // Its Called Action
        
        $("h1").hide(); // Its Called Event
    });
});


===============================================================================


$(document).ready(function () { // When Pakege Download

    "use strict";

    $("button").mouseenter(function () { // When Mose Inter Happned Action

        $(this).css("color", "red"); // Event

    });

    $("button").mouseleave(function () { // When Mose Inter Happned Event

        $("h1").css("color", "blue"); // This Is Action

    });

    $("h1").click(function () { // When Clic  Happned Action
        $("button").hide();

    });


    $("h1").dblclick(function () { // When dblClic  Happned Action

        $(this).hide(); // Event


    });

});

===============================================================================


$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("h1").css("color", "red");
        $("p").css("color", "blue");
        $(this).hide();
    });

});

===============================================================================



$(document).ready(function () {
    "use strict";
    $("button").hover(
        function () // mouseenter

        {

            $("h1").css("color", "red");
            $("p").css("color", "blue");

        },

        function () // mouseleave

        {
            $("p").css("color", "red");
            $("h1").css("color", "blue");

        }

    )
});


===============================================================================


$(document).ready(function () {
    "use strict";

    $("button").click(function () {

        $("p").hide("fast", function () {
            $("button").hide("slow");
        });

        // We Can Use Anumber To Speed But Its In Mili <400> mili And I Can Write "slow" OR "Fast And Also Can Add A fun
    });
    
         $("button").mouseleave(function () {

      $("p").show(); // When He Is Deleate In Css Here We Cane Display It
});



===============================================================================



$(document).ready(function () {

    "use strict";

    $("button").hover(function () {
        $("p").toggle(); // When Mous Enter The Action Made Tow Event The First Is show The Seconds Is Hide

    });



});

===============================================================================


$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("p").toggle("slow", function () { // If He Exsited Then He Hide
            $("span").toggle("slow");

        });
        $(this).toggle(7000);

    });

});
===============================================================================


$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("div").fadeIn(2000, function () {
            $("span").fadeIn(2000);
        }); // But Its Must Be Not Ext
    });
});

===============================================================================



$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("div").fadeOut(2000, function () { // But Thy Must Be Ext
            $("span").fadeOut(2000);
        });
    });
});


===============================================================================


$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("div").fadeToggle(2000, function () { // But Thy Must Be Ext
            $("span").fadeToggle(2000);
        });
    });
});


===============================================================================


$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("div").fadeToggle(2000, function () { // But Thy Must Be Ext
            $("span").fadeToggle(2000);

        });
        $("span").css("opacity", "0.3");
    });
});

===============================================================================


$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("div").fadeTo(2000, 0.3, function () { // The opacity
            $("span").fadeTo(2000, 0.3);

        });
    });
});

===============================================================================


$(document).ready(function ()

    {
        "use strict";

        $(".open").click(function () {

            $(".box").slideDown(2000, function () {  // Show The Slide When He Is Dispay
                $(".open").css("background", "red");
            });


        });
   
   });


===============================================================================


$(document).ready(function ()

    {
        "use strict";

        $(".open").click(function () {

            $(".box").slideUp(2000, function () { // Hide The Box After He Was Show
                $(".open").hide(1500);
            });


        });

    });

===============================================================================



$(document).ready(function ()

    {
        "use strict";

        $(".open").click(function () { // Event

            $(".box").slideToggle(2000);
            $(".open").css("color", "White");

        });
    });
===============================================================================




// =================================================================================================================//

// Animate --> .animate({ Css }, speed, BackFun)

$(document).ready(function () {

    "use strict";

    $(".animate").animate({
        width: "500px"
    }, 3000, function () {
        $("span").fadeIn(3000, function () {
            $("span").click(function () {
                $(".animate").slideUp(3000, function () {
                    $("span").css("color", "blue");
                });
            });
        });

    });
});

===============================================================================


$("document").ready(function () {
    "use strict";
    $(".animate").animate({
        width: "+=200px", // Incresing 200px
        opacity: "0.7",
        left: "350px",
        right: "300px",
        top: "150px",
        height: "togggle", // To Ingormal Height And We Can Use Hide 
        borderRadius: "20px", // CampleCase
        padding: "10px"

  //  }, 2000);

    $(".animate").animate({
        width: "200px",
        left: "0",
        right: "0",
        top: "0",
        height: "100px",
        opacity: "1"
    }, 2000);
});


===============================================================================


//$(document).ready(function () {
    "use strict";
    
    
    
    $("div").animate({
        top: "10px"
    }, 2000);

 $("div").animate({
        width: "toggle",
        height: "toggle",
    }, 2000);

    $("div").animate({
        width: "toggle",
        height: "toggle",
    }, 2000);

    $("div").animate({
        left: "450px"

    }, 2000);

    $("div").animate({
        top: "200px"
    }, 2000);
   
});


=================================================

// stop() ..> To Stop Animate

$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("div").stop(true,false); // To Stop One Animate When I Clic It And Compleat If I Want To Stop All Using True
    });
    $("div").animate({
        width: "600px"
    }, 3000);
    $("div").animate({
        height: "600px",
    });
    $("div").animate({
        borderRadius: "20px",
    });
});

============================================================

=== chine ===

var div = $("div"); // We Can Use Variball TO Crach The Element
$(document).ready(function () {

    "use strict";

    div.hide(2000).show(2000).slideUp(2000).slideDown(2000).animate({
        width: "500px"
    }, 1000); // This Is Chine For The Element

});

*/

// =================================================================================================================

// Get & Set 

/*

  1 ==> $("Element").text() ==> Get The Element & Set The Element
  
  2 ==> $("Element").html() ==> Will Out The Text Withe Css
  
  3 ==> $("Element").val() ==> Get The Element & Set The Element In Filed
  
  4 ==>$("Element").attr() ==> To Trransorme Any Thing lso Chance Attr


// ====== Get The Element And Set The Element  ======== //

var div = $("div").text(); // To Get The Element And We Can Set The Element
$("p").text(div + "This Is P"); // لكن هدا لا يأخد التنسيقات الخاصة في الديف



// ======  Will Out The Text Withe Css ======== //


var div = $("div").html();
$("p").html(div);



// ======== Get The Element & Set The Element In Filed ======//


var p = $("p").text();
$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("input").val(p + "Engineer"); // Get The Value Of Filed

    });
});



// ============ To Trransorme Any Thing =========================//

var attr;
$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        attr = $("a").attr("class");
        $("input").val(attr);
    });
});


*/

// =================================================================================================================//

// Add Element To Div 

/*

  1 ==> $("div").append("<p> Anas </p>") --> To Add Element يعني بصير من مكونات العنصر But Its Add To Last 
  
  2 ==> $("div").prepend("<p> Anas</p>") --> The Same Of append But Its Add Element In First
  
  3 ==> $("div").after("<p> Anas </p> ") --> To Add The Element After The Div
  
  4 ==> $("div").befor("<p> Anas </p>") --> To Add The Element before The Div
  
  5 ==> $("<p> Anas </p>).appendTo("div") --> The Same Thing In Add
  
  6 ==> $("<p> Anas </p>).prepend("div") --> The Same Thing In Add


// ====== To Add Element BY append() ====== //


$(document).ready(function () {
    "use strict";
    $("div").append("<h1> Im Full Stack </h1>"); // Add Element To Div
    $("div").append("<span> <a href = '#' > Google </a> </span>"); // To Add Element To Div

});



// ====== To Add Element BY prepend() ====== //


$(document).ready(function () {
    "use strict";
    $("div").prepend("<h1> Im Full Stack </h1>"); // Add Element To Div
    $("div").prepend("<span> <a href = '#' > Google </a> </span>"); // To Add Element To Div

});



// ===== To Add The Element After The Div =====//

$(document).ready(function () {
    "use strict";
    $("div").after("<h1> Im Full Stack </h1>"); // Add Element after The Div
    $("div").after("<span> <a href = '#' > Google </a> </span>"); // To Add Element To Div

});

// ===== To Add The Element before The Div =====//

$(document).ready(function () {
    "use strict";
    $("div").before("<h1> Im Full Stack </h1>"); // Add Element Befor The Div
    $("div").before("<span> <a href = '#' > Google </a> </span>"); //This Is Before The Div
});


$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("button").after( " <br> <input type = 'file' >")
    });
});  */


// =================================================================================================================//

// Remove


/*
 
   1 ==> $("Element").remove() --> To Deleate The Element Comblitlay
   
   2 ==> $("Element").empty() --> To Empty The Element



// ====== To Deleate The Element Comblitlay ===== //


$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $(".jqeury").remove(:continis('This'))  // The Div Can Not Show
      
    });
});


// ====== To Empty The Element ============//


$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $(".jqeury").empty();
    });

*/

// ===============================================================================================================//

// Css Class


/*

1 ==> $("Element").addClass("nameClass") --> To Add Class Of The Element

2 ==> $("Element").removeClass("nameClass") --> To Remove Class Of The Element

3 ==> $("Element").toggleClass("nameClass") --> If There Exite Class Then he Delete The Class


// ====== To Add Class Of The Element =======//


$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $(".div1").addClass("test"); // Selctor The Element To Addded Classs
    });
});



// ====== To Remove Class Of The Element =======//

change The Color

$(document).ready(function () {
    "use strict";
    $(".button-red").click(function () {
        $(".div1").addClass("red-class").removeClass("div1, blue-class");
    });
    $(".button-red").click(function () {
        $(".blue-class").addClass("red-class").removeClass("blue-class, div1");
    });

    $(".button-blue").click(function () {
        $(".red-class").addClass("blue-class").removeClass("div1, red-class");
    });

});



// ====== To Remove Class Of The OR Add Class Of The Element =======//


$(document).ready(function () {
    "use strict";
    $(".test").click(function () {
        $(this).toggleClass("test2"); // When Click The Class Then He Change The Attrbiot
    });
});
*/


// ==================================================================================================================//

// get And set Css 

/*

  1 ==> $("Element").css("Name Of The Element") --> Get The Name Of The Element Froem Css
  
  2 ==> $("Element").css("color", " Value Of Color ") --> Set The Element For Css 



// ==========  Get The Name Of The Element Froem Css ======== //


var color;
$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        color = $("p").css("padding"); // Get The Element From Css
        $("input").val(color);
        $("<span></span>", {
            text: color
        }).appendTo("body");
    });
}); 



// ==========  Set The Element For Css  ======== //

var input;
$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        input = $("input").val(); // To Set The Element To Css 
        $("p").css({
            "color": input,
            "padding": "30px"
        });
    });
});
*/


// ==================================================================================================================//

// Domensions

/**

1 ==> (document).witdth() ==> Get The Witdh Of The Window OR Any Element 




// ==============  Get The Witdh Of The Windo ============//


$(document).ready(function () {
    "use strict";
    var dw = $(document).width();
    console.log(dw);
    if (dw === 1366) {
        $("body").append("<span> This Is A Big Screan </span>").css("color", "blue");
    } else
         ($("body").append("<span> This Is A Big Screan </span>").css("color", "red"));

    var w1 = $(".w").width(); // Get The Width From Div
    console.log(w1);

});

$(document).ready(function () {
    "use strict";
    $(".w").click(function () {
        $(this).width("+=" + 50); // To Cahnge The Width
    });
});


$(document).ready(function () {
    "use strict";
    $(".left").click(function () {
        $(this).width("+=" + 50);
        $(".right").width("-=" + 50);
    });
    $(".right").click(function () {
        $(this).width("+=" + 50);
        $(".left").width("-=" + 50);
    });


});
*/

// ==================================================================================================================//


// Traversing // 

/*

  1 ==> $("Element").parent() ==> Get The Name Of The Parent Of This Element
  
  2 ==> $("Element").parents() ==> Get The Name Of The All Parent Of This Element
  
  3 ==> $("Element").panrentsUntil("Name Element") ==> When He Comes The Selcted Class He Will Stop
  
  4 ==> $("Element").children() ==> Get The Name Of The Children Of This Element
  
  5 ==> $("Element").find("Element") ==> Get The All Element ON This Element
  
  6 ==> $("Element").siblings() ==> Get The All Siblings Of Thes Element But Not This Element
  
  7 ==> $("Element").next() ==> The Element Next From This Will Be Applay Any Thing
  
  8 ==> $("Element").prev() ==> The Element previous From This Will Be Applay Any Thing
  
  9 ==> $("Element").nextAll() ==> All The Element Next
  
  10 ==> $("Element").prevAll() ==> All Previous Element Next
  
  11 ==> $("Element").nextUntil() ==> When He Comes The Selcted Class He Will Stop
  
  12 ==> $("Element").prevUntil() ==> When He Comes The Selcted Class He Will Stop
  
  13 ==> $("Element").first() ==> Get The First Element
  
  14 ==> $("Element").last() ==> Get The Last Element
  
  15 ==> $("Element").eq(Number) ==> To Select The Element BY Use Index
  
  16 ==> $("Eleemnt").filter()
  
  17 ==> $("Element").not() ==> Made The Any Things But Not This Element
  
  
  
// ============== Get The Name Of The Parent Of This Element  ======//


$(document).ready(function () {
    "use strict";

    var parents = $("span").parent().css("border", " 2px solid blue"); // Tts Mens The Parent Of Span
    console.log(parents);
});


// =========== Get The Name Of The All Parent Of This Element ========== //


$(document).ready(function () {
    "use strict";
    $("span").parents(".top").css("border", "2px solid black"); // Get The All Parents Of This Element OR Selctor
});


// =========  When He Comes The Selctop Class He Will Stop ========== //

$(document).ready(function () {
    "use strict";
    $("span").parents("p").hide(2000); // When He Araive The Selctor Class He Will Stop 
});



// ====== Get The Name Of The Children Of This Element ======== //


$(document).ready(function () {
    "use strict";
    $(".top").children(".jquery").css({ // Get The Children Of The Div This Is Selctor To The Name Class 
        border: "2px solid blue"
    });
});


// ========= Get The All Element ON This Element ========== //


$(document).ready(function () {
    "use strict";
    $(".top ").find(".jqurey").css("border", "2px solid blue"); // To Find This Element 
});


$(document).ready(function () {
    "use strict";
    $("div").find($("p:contains('Love')")).css("border", "2px solid blue"); // To Find This Inclouding Love
});



// ============ Get The All Siblings Of Thes Element But Not This Element ====== //

$(document).ready(function () {
    "use strict";
    $(".se,p").click(function () {
        $(this).siblings().slideToggle(2000); // The Brothers Get The Css

    });
}); 


// ========== The Element Next From This Will Be Applay Any Thing ========= //


$(document).ready(function () {
    "use strict";
    $("div,p").click(function () {
        $(this).next().css("border", "4px solid blue"); // The Next Element Will Hide Just The Next

    });
}); 


// =========== The Element previous From This Will Be Applay Any Thing ========//

$(document).ready(function () {
    "use strict";
    $("div,p").click(function () {
        $(this).prev().css("border", "4px solid blue"); // The previous Element Will Hide Just The Next

    });
}); 


// ============= All The Element Next ==================//


$(document).ready(function () {
    "use strict";
    $(".main-sport").click(function () {
        $(this).nextAll(".sport").slideToggle(2000); // All The Element Next

    });

    $(".main-foot").click(function () {
        $(this).siblings(".foot").slideToggle(2000); // All The Element Next

    });

}); 


// ============= All Previous Element Next =========== //



$(document).ready(function () {
    "use strict";
    $(".main-sport").click(function () {
        $(this).prevAll(".sport").slideToggle(2000); // All The Element Previous

    });

    $(".main-foot").click(function () {
        $(this).prevAll(".foot").slideToggle(2000); // All The Element Previous

    });

}); 



// ============ When He Comes The Selcted Class He Will Stop ======== //


$(document).ready(function () {
    "use strict";
    $(".main-sport").click(function () {
        $(this).nextUntil(".until-sport").slideToggle(2000); // He Stop When Reach The Selctor Class

    });

    $(".main-foot").click(function () {
        $(this).nextUntil(".until-Foot").slideToggle(2000); // He Stop When Reach The Selctor Class

    });

}); 


// ===============  Get The First Element ===============// 

$(document).ready(function () {
    "use strict";
    $("section").first().css("color", "blue"); // The First sextion Of All sections
});  


// =========== Get The Last Element ================//

$(document).ready(function () {
    "use strict";
    $(".section1").click(function () {
        $(".section1").last().css("border", "4px solid #00f"); // The Last Div Of All Divs 
    });
}); 


// ===============  To Select The Element BY Use Index ===========//

$(document).ready(function () {
    "use strict";

    $("div").eq(2).css("border", "4px solid blue"); // Select The Three Div
}); 


// ================ Filter ================ //


$(document).ready(function () {
    "use strict";
    $("div").filter(".select").next().css("border", "4px solid blue"); // Select The Enement Withe The Select Class
}); 
$(document).ready(function () {
    "use strict";
    $("div").filter(function (Anas) { // To Select The Element 2
        return Anas === 1;
    }).next().css("border", "3px solid blue");
}); 


// ============= Made The Any Things But Not This Element =========//


$(document).ready(function () {
    "use strict";

    $(this).not().css("border", "4px solid blue"); // Made The Any Things But Not This Element


}); */

// ==================================================================================================================//

// Referance selectors //

/*

  1 ==> $("*") ==> Its Means Eevrey Element
  
  2 ==> $(".nameClass") ==> The Element Inclode The Same Name Of Class Will Be Applay 
  
  3 ==> $("Element") ==> This Is Global Elemeent And He Not Contant Withe Any Class 
  
  4 ==> $("p:first, div:first, aside:last") ==> The First p & First div & Last aside
  
  5 ==> $("Element, .nameClass, Element:last") ==> We Can Also Contan Element Withe Class

  6 ==> $("Element:even") ==> Applay The First And Not Applat The Second
  
  7 ==> $("Element:odd") ==> Applay The Second And Not Applat The First
  
  8 ==> $("Element:first-child") ==> Selctor The First Element Who Is The First Also If He Was Alot Of Element
  
  9 ==> $("Element:Last-child") ==> Selctor The Last Element Who Is The First Also If He Was Alot Of Element
  
  10 ==> $("Element:first-of-type") ==> The First Type Of This Element
  
  11 ==> $("Element:last-of-type") ==> The last Type Of This Element
  
  12 ==> $("Element:nth-child(number)") ==> Selctor The Choosen Number
  
  13 ==> $("Element:nth-last-child(3)") ==> Begane From Last To Start
  
  14 ==> $("Element:nth-of-type(3)") ==> Selectors The P Who Have The Third 
  
  15 ==> $("Element:only-child).css(Any Thing) ==> Just The Only Child Of The Barints 
  
  16 ==> $("Element:only-of-type).css(Any Thing) ==> At Lest One Of Thes Element
  
  17 ==> $("Element > Element") ==> Just The Diract Child
  
  18 ==> $("div + p") ==> For Example If There P After The Div Then Selector It
  
  19 ==> $("div ~ p") ==> For Example The Siblings p Of Type Div Will Selctor 

  20 ==> $("div:eq(Number)")
  
  21 ==> $("div:gt(Number)") ==> This Get The Greater Than Number

  22 ==> $("div:lt(Number)") ==> This Get The laower Than Number
  
  23 ==> $(":header") ==> Selector The All Header On Side
  
  24 ==> $(":animated") ==> Selector The All Element Who Is Animate
  
  25 ==> $("input").focus() ==> Made Focuse In Input Aotomatic
  
  26 ==> $(":focus") ==> Selector The Element Who Is Focuse
  
  27 ==> $("Element contains('Word')") ==> Selector The Element Who Contains This Word
  
  28 ==> $("div:has('p')") ==> Select The Div Who Has A p And Any Element
  
  28 ==> $("div:has('.nasmeClass')") ==> Select The Div Who Has Name Class
  
  29 ==> $("div:empty") ==> Selctor The Empty Element
  
  29 ==> $("div:parint") ==> Selctor The Element Who Has A Parint
  
  30 ==> $(":hidden") ==> Selctor The Element Who Is Hide
  
  31 ==> $("div:visible") ==> Selctor The Element Who Is Show
  
  32 ==> $("root") ==> Selctor The First On The Document
  
  33 ==> $("Eleemnt:lan(lan)") ==> Selctor The Element withe Hes Lan
  
  33 ==> $("[atr]") ==> $("[attribute = 'Name Attr']").Any Think For Any Element
  
  34 ==> $(":input") ==> Selctor The Element Whos input
  
  35 ==> $(":text") ==> Selctor The Element Whos input Text
  
  35 ==> $(":password") ==> Selctor The Element Whos input password
  
  36 ==> $(":password") ==> Selctor The Element Whos input submit
  
  36 ==> $(":atrr") ==> Selctor The Element input
  
  37 ==> $("Element:atrr") ==> Find IN This Element
  
  38 ==> $(":disabled") ==> Selector The input Whos Disabled
  
  39 ==> $(":enabled") ==> Selector The input Whos Enable
  
  40 ==> $(":checked") ==> Selector The input Whos checked
  
  41 ==> $(":selected") ==> Selector The input

==========================================
 

$(document).ready(function () { // The All Element Hide
    "use strict";
    $("body *").click(function () { // All The Element In Body
        $(this).css("border", "4px solid blue");
    });
});  


==========================================


$(document).ready(function () {
    "use strict";
    $(".anas, .ahmad").click(function () { // When I Click The Class Withe The Name anas-last Will Be Hide
        $(".anas - last, .ahmad, hassen").toggle(2000); // Tow Class Will Hide
    });
}); 


==========================================


$(document).ready(function () {
    "use strict";
    $("p:first, div:first, aside:first").css("border", "3px solid red"); // Ass Like Filter
}); 



==========================================



$(document).ready(function () {
    "use strict";
    $("p, .anas, aside:last").css("border", "3px solid red"); // Contan Element And Class
});


==========================================



$(document).ready(function () {
    "use strict";
    $("div:even, p:odd, aside:even").css("border", "3px solid red"); // Applay The First And Not Applat The Second
});


==========================================



$(document).ready(function () {
    "use strict";
    $("div:odd, p:odd, aside:odd").css("border", "3px solid red"); //Applay The Second And Not Applat The First
    $("div:even, p:even, aside:even").css("border", "3px solid blue");
});

==========================================


$(document).ready(function () {
    "use strict";
    $("p:first-child").css("border", "4px solid red"); // Select The First Child Of The Element
});


==========================================


$(document).ready(function () {
    "use strict";
    $("p:last-child").css("border", "4px solid red"); // Select The lat Child Of The Element
});


==========================================



$(document).ready(function () {
    "use strict";
    $("p:first-of-type").css("border", "4px solid red"); // The First Type Of This Element
});



==========================================



$(document).ready(function () {
    "use strict";
    $("p:last-of-type").css("border", "4px solid red"); // The Last Type Of This Element
});



==========================================



$(document).ready(function () {
    "use strict";
    $("p:nth-child(2)").css("border", "4px solid red"); // The Last Type Of This Element
});

==========================================


$(document).ready(function () {
    "use strict";
    $("p:nth-last-child(2)").css("border", "4px solid red"); // Begane Last To Start
});

==========================================


$(document).ready(function () {
    "use strict";
    $("p:nth-of-type(2)").css("border", "4px solid red"); // Begane Last To Start
});


==========================================



$(document).ready(function () {
    "use strict";
    $("p:only-child").css("border", "4px solid red"); // Just The Only Child Of Barints 
});


==========================================


$(document).ready(function () {
    "use strict";
    $("div:only-of-type").css("border", "4px solid red"); // At Lees One Element Of This Element
});


==========================================


$(document).ready(function () {
    "use strict";
    $("div > p").css("border", "4px solid red");
    $("div > span").css("border", "4px solid red"); //  Select The Cild Have Include None Elenemnt
});



==========================================



$(document).ready(function () {
    "use strict";
    $("div + p").css("border", "4px solid red"); // If There P After The Div Then Selector It
});



==========================================


$(document).ready(function () {
    "use strict";
    $("div ~ p").css("border", "4px solid red");
});


==========================================



$(document).ready(function () {
    "use strict";
    $("p eq(2)").css("border", "4px solid red");
});



==========================================



$(document).ready(function () {
    "use strict";
    $("ul li:gt(1)").css("border", "4px solid red"); // The Greter Than 2 Will Selctor It Note The Index Start 0
});


==========================================



$(document).ready(function () {
    "use strict";
    $("ul li:lt(2)").css("border", "4px solid red"); // The Lower Than 1 Will Selctor It Note The Index Start 0
});


==========================================



$(document).ready(function () {
    "use strict";
    $(":header").css("border", "4px solid red"); // Selctor The All h On The Side
});



==========================================


$(document).ready(function () {
    "use strict";
    $("div,p").animate({
        width: "500px"
    }, 4000);
    $("div").animate({
        height: "400px"
    }, 4000);
    $("h1").click(function () {
        $(":animated").css("position", "absolute");
        $(":animated").css("right", "300px");
    });

});



==========================================



$(document).ready(function () {
    "use strict";
    $("input[type = 'text']").focus();
    $(":focus").css("padding", "20px"); 
});



==========================================




$(document).ready(function () {
    "use strict";
    $("p:contains('JavaScript')").css("border", "10px solid red"); // Selector The Element Who Contains Word
});



==========================================



$(document).ready(function () {
    "use strict";
    $("div:has('p')").css("border", "10px solid red"); // Select The div Who Have A p And Any Element
});


==========================================



$(document).ready(function () {
    "use strict";
    $("div:has('.anas')").css("border", "10px solid red"); // Select The div Who Have A Name Class From The Element
});


==========================================



$(document).ready(function () {
    "use strict";
    $("div:empty").css({
        background: "red",
        width: "200px",
        height: "10px"
    }, 3000); // Select The Empty Element
});


==========================================


$(document).ready(function () {
    "use strict";
    $("button").click(function () { // Select The Hide Element
        $(":hidden").fadeIn(2000);
    });
});


==========================================



$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("div:hidden").slideDown(2000);
        $("div:visible").slideUp(2000); // Select The Show Element
    });
});


==========================================


$(document).ready(function () {
    "use strict";
    // $("[src]").evenet --> Selctor All src In Project
    // $("[title]").event --> Selctor All src include title
    // $("[alt]").event --> Selctor All src Include alt
    // $("[alt = 'img 2']") --> Selctor img Who Has alt = 'img 2'
    // $("[title = 'img 2']") --> Selctor img Who Has title = 'img 2'
    // $("Element[Atrr = 'Name Attr']") --> Selctor The Element Who Have atrr ==> $("p[lang]") OR $("div[lang]")
    // $("div[lang != 'ar']") --> Selctor All din Whos lang Any Thing But This lang Not Equal ar
    // $("[title], [lang]") --> Selctor The Element Who Have This Attr
    // $("img[title* = 'My']") --> Selector The Imge Who Include In Word My
    //$("img[title != 'Test 1'], div[lang = 'en'], p[class = 'en']").css("border", "3px solid blue");
    //$("img[title *= 'Your']").css("border", "3px solid blue"); --> Selctor The Element Whos Hane Your
    //$("img[title ~= 'My']").css("border", "3px solid blue");
    //$("img[title ^= 'anas']").css("border", "3px solid blue");// ==> Select The Eleemnt Start anas
});


==========================================


$(document).ready(function () {
    "use strict";
    $(":input").css("display", "block"); // Select The All input
});


==========================================



$(document).ready(function () {
    "use strict";
    $(":text").css("border", "4px solid red"); // Select The All Text
});


==========================================


$(document).ready(function () {
    "use strict";
    $(":password").css("border", "3px solid red"); // Select The All password
});

==========================================


$(document).ready(function () {
    "use strict";
    $(":submit").css("border", "3px solid red"); // Select The All sibmit
});


==========================================



$(document).ready(function () {
    "use strict";
    $(".input :submit").css("border", "3px solid red"); // Search In This Element
});


==========================================


$(document).ready(function () {
    "use strict";
    $(":disabled").fadeOut(3000); // Selctor The Disabled Element
});


==========================================


$(document).ready(function () {
    "use strict";
    $(":enabled").fadeOut(3000); // Selctor The Enable Element
});


==========================================


$(document).ready(function () {
    "use strict";
    $(":checked").css("border", "3px solid red"); // Selctor The Enable Element
});


==========================================


$(document).ready(function () {
	"use strict";
	console.log($("option").val());
});

==========================================
*/


// ======================================================================================================================//

/*
 Reverance Event
*/


/*

  1 ==> $("Element").baid(" Event ", function(){});
  
  2 ==> $("Element").baid("Event Event", function(){}); ==>If One Of This Event Are Exsist they Will Work But For Same Event
  
  3 ==> $("Element").baid({
    Event:function() {Action;},
    Even: function (){Action;},
    Event: function (){Action1; Action2};);
  });   ==> If The Event Exsist Its Work FAE
  
  3 ==> $("Father").on(Event,childSelctor[Op],Data,function,Map) ==> Sigle Event
  
  4 ==> $("Father").on(Event1 Event2,childSelctor[Op],Data,function,Map) ==> Multi Event
  
  5 ==> Map Event In 1613
  
  6 ==> x.prevntDefalte ==> To Stop The Defalte Value
  
  7 ==> x.isDefaltePrevent ==> To Check The Element Is preventDevalte Or Not
  
  8 ==> $("Element").on("keydown", function(){ Action };); 
  
  9 ==> $("Element").on("keypress", function(){ Action };); 
  
  10 ==> $("Element").on("keyup", function(){ Action };); 
  
  11 ==> $("Element").on("change", function(){ Action };);
  
  12 ==> .focus ==> When I Stop On Input
  
  13 ==> .blur ==> When I Dont Focus
  
  14 ==> .one ==> The Same As on But Its Work Juat One Time
  
  15 ==> .select() ==> Selctor The All Text 
  
  16 ==> .resize ==> To Calc The Wt And The he
  
  17 ==> .scrol() And .scrolTop()
  
  18 ==> function(e) ==> e.pagex OR e.pagey
  
  19 ==> summit 
  
  20 ==> .delay(Number) ==> Put Butwen 2 Event 
  
  21 ==> .clone(true, fals) ==> Cloneing The Element
  
  22 ==> .detach ==> The Same As remove() But The Diffrent Is remove() Is Del The All Data But The detach() Not Del t data
  
  23 ==> $("Element").hasClass(".nameClass")
  
  24 ==> .offset({top:,left:}) ==> Ruturn The left and The top From The Document
  
  25 ==> .position({top:, left:}) ==> The Same offset The Diffreant Is The The POstion Form Element Not For The Doucument
  
  26 ==> $("Element").prop("attr", false) ==> The Same The .attr() 
  
  27 ==> $("Elememt").replaseWith("Any Element") ==> $("input").replaceWith("<p> Anas </p>")
  
  28 ==> $("span").wrap("<div></div>") ==> if Ther was span Then Made Strucher On Span -->[div] And .unrap() ==> Delete
  
  29 ==> .each() ==> Cheacking In The Element
  
  30 ==> $("Element").has("Element") ==> Do SomeThink


=============================================

// Single Event

$(document).ready(function () {
    "use strict";
    $(".normal").bind("click", function () {
        $(this).hide(200);
    });
    // Mult Event

    $(".normal").bind("mouseenter mouseleave", function () { // If One Ther Exist Then Its Work
        $(this).toggleClass("color");
    });

    // Map Event

    $(".Mpm").bind({
        click: function () {
            $(this).text("This Is Click");
        },
        dblclick: function () {
            $(this).text(" This Is Bouble Click");
        }
    });
});

=============================================

// Single Event
$(document).ready(function () {
    "use strict";
    $(".anas").on("click", ".normal", function () {
        $(this).hide(200);
    });

    // The Child Selctor Is Op
    $(".normal").on("click", function () {
        $(this).hide();
    });
    // Multi Event
    $(".anas").on("mouseenter mouseleave", ".normal", function () {
        $(this).toggleClass("color"); // This Pointer ,normal
    });
    $("body").on("click", "button", function () {
        $(".normal").toggleClass("back");
    });

    //Map Event
    $("body").on({
        click: function () {
            $(".normal").append("<p> Youe Clic Me</p>");
            $(".normal").after("<p>Red</p>");
        },
        dblclick: function () {
            $(".normal").after("<p> Youe Duble Clic Me</p>");
        },
        mouseenter: function () {
            $(".normal").toggleClass("color");

        },
        mouseleave: function () {
            $(".normal").toggleClass("color");
        }

    }, "button");
});

=============================================

$(document).ready(function () { // To Add And Delate The Element
    "use strict";
    $("body").on("click", "button", function () {
        $(".add").append("<p> This Is After Button </p>");
    });
    $(".add").on("click", "p", function () {
        $(this).siblings().hide(100);
    });
});

=============================================


$(document).ready(function () {
    "use strict";
    $("a").on("click", function (x) { // To Stop The Link
      
        if (x.isDefaultPrevented) { // Check The Link Is preventDevalte Or Not
            alert(" Ops The Link Is Not Work");
        } else {
            alert(" The Link Is Work");
        }
    });
});

=============================================

$(document).ready(function () {
    "use strict";
    $("input").on("keydown", function () {
        $("div").text(" This Is keydown");
    });
});

=============================================


$(document).ready(function () {
    "use strict";
    $("input").on("keypress", function () { // Do The Actoin When I Press The Kew
        $("div").text(" This Is keydown");
    });
});

=============================================

$(document).ready(function () {
    "use strict";
    $("input").on("keyup", function () { // Do The Actoin When I go far
        $("div").text(" This Is keydown");
    });
});

=============================================


$(document).ready(function () {
    "use strict";
    $("input").on("change", function () { // Do The Actoin When Ther Was Change 
        $("div h2").text($(this).val());
    });
    $("textarea").on("change", function () { // Do The Actoin When Ther Was Change 
        $("div p").text($(this).val());
    });
    $("select").on("change", function () {
        var color = $("select").val();
        $("div").css("background", color);
    });
});


=============================================


$(document).ready(function () {
    "use strict";
    $("input").on("focus change", function () {
        $("span").toggle(3000, function () {
            $(this).toggle(3000);
        });
    });
});


=============================================

$(document).ready(function () {
    "use strict";
    $("input").on("blur change", function () {
        $("span").toggle(3000, function () {
            $(this).toggle(3000);
        });
    });
});


=============================================


$(document).ready(function () {
    "use strict";
    var re;
    $("input").on("blur", function () {
        var input = $("input").val();
        re = input.search(/[a-z]/gi);
        console.log(re);
        if (re < 0) {
            $("span").toggle(2000).text("This Is Wrong Write Like ==> anasOmar1999");
        } else {
            $("span").toggle(2000).text("This Is The Writ Way");
        }

    });
});


=============================================

$(document).ready(function () {
    "use strict";
    $("p").one("click", function () { // Just One Time
        $(this).animate({
            fontSize: "+=5px"
        });
    });
});


=============================================

$(document).ready(function () {
    "use strict";
    $("textarea").on("click", function () {
        $(this).select();
        $("textarea").after("<p> Your Copy The Text</p>").display().hide(200);
    });
});

=============================================


$(document).ready(function () {
    "use strict";
    $(window).on("resize", function () {
        var w = $(window).width(),
            h = $(window).height();
        console.log(w, h);
    });
    
=============================================


$(document).ready(function () {
    "use strict";
    $(window).on("scroll", function () {
        var sv = $(window).scrollTop();
        console.log(sv);
        if (sv > 1000) {
            $("div").fadeIn();
        } else {
            $("div").hide();
        }
    });
});

  
=============================================


$(document).ready(function () {
    "use strict";
    $("html").mousemove(function (e) {
        $("span").text("x-page : " + e.pageX + " " + "y-page " + e.pageY);
    });

=============================================


$(document).ready(function () {
    "use strict";
    $("html").click(function (e) {
        $("div").show().offset({
            left: e.pageX,
            top: e.pageY
        });
    });
    
=============================================


$(document).ready(function () {
    "use strict";
    $("form").submit(function (e) { // In The Form We Selctor submit
        e.preventDefault();
    });
});

=============================================


// Cheack The Word

$(document).ready(function () {
    "use strict";
    var name = $("form").val();
    if (name === "Conferm") {
        $("span").text("The Accound Is Deleteing ").show().hide(2000);
    } else {

        $("form").submit(function (e) {
            $("span").text(" Pleas Enter The Right Word").show().slideUp(3000);
            e.preventDefault();
        });
    }

});
=============================================


$(document).ready(function () {
    "use strict";
    $("button").on("click", function () {
        $("span").show(1000).delay(4000).hide(3000);
    });
});

=============================================


$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $(".main").clone(true).appendTo("body"); //("<span> Hello </span>").appendTo("div")
    }); // (div).append("<span> Hello </span>")

    $("div").click(function () {
        $(".main").css("color", "red");
    });

});


=============================================


$(document).ready(function () {
    "use strict";
    var element = $("div");
    $("#remeve").on("click", function () {
        element.remove();
    });

    $("#add").on("click", function () {
        element.prependTo("body");
    });
    $("div").click(function () {
        $(this).css("color", "red");
    });
});

=============================================



$(document).ready(function () {
    "use strict";
    $("li").each(function () { // To Selctor The All li
        if ($(this).hasClass("chose")) {
            $(this).css("color", "red");
        }
    });
});

=============================================


$(document).ready(function () {
    "use strict";
    $("html").on("click", function (x) {
        $("div").show(1000).offset({
            top: x.pageY,
            left: x.pageX
        });
    });
});

=============================================
/

$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        console.log("The Scrol Top Is " + $(this).scrollTop());
        console.log("The Offset top Is " + $("div").offset().top);
        if ($(this).scrollTop() >= $("div").offset().top) {
            $("div").css({
                background: "black"
            });
        }

    });

});

=============================================


$(document).ready(function () {
    "use strict";
    console.log($("p").position().top); // Get The position For The p From Inter The Element Not For The Document
});

=============================================


$(document).ready(function () {
    "use strict";

    $(".displayed").click(function (e) {
        e.preventDefault();

        $("input").prop({
            disabled: "disabled",
            name: "Anas"

        }); // The Same Attr
        $(".remove").click(function () {
            $("input").prop({
                disabled: false,
                name: "Anas"
            });
        });

    });
});

=============================================

var input = $("input").val();
$(document).ready(function () {
    "use strict";
    $(".seletor").on("click", function () {
        $(this).replaceWith("<input type = 'text' value = ' " + $(this).text() + "'  >");
        $("button").fadeIn();
    });
   
    $("button").click(function () {
        $("input").replaceWith("<div class = '.seletor'>" + $("input").val() + "</div>");
        $("button").hide();
    });

});

=============================================


$(window).scroll(function () {
    "use strict";
    console.log("Window Scroll ==> " + $(this).scrollTop());
    console.log("The Offset Top ==> " + $(".test").offset().top);

    if ($(window).scrollTop() >= $(".test").offset().top) {
        $(".test").animate({
            opacity: "1"
        });
    }
    if ($(window).scrollTop() >= $(".test2").offset().top) {
        $(".test2").animate({
            opacity: "1"
        });
    }
    $("button").click(function () {
        $(window).scrollTop($(".test").offset().top);
    });

});
=============================================


$(document).ready(function () {
    "use strict";
    $(".add").on("click", function () {
        $("span").wrap("<div></div>");
    });

    $(".remove").on("click", function () {
        $("span").unwrap();
    });

});

=============================================


$(document).ready(function () {
    "use strict";
    $("li").each(function () { // Checking In The Element
        if ($(this).hasClass("test")) {
            $(this).css("color", "red");
        }
    });
});

=============================================


$(document).ready(function () {
    "use strict";
    $("p, div, h2").has(".test, span").css("color", "red");
});

=============================================


$(document).ready(function () {
    "use strict";
    $("span").click(function () {
        if ($(this).is("span")) {
            console.log("yes");
        } else {
            console.log("No");
        }
    });

});

س=============================================
*/