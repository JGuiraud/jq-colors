$(document).ready(function(){
   
    var boutons = $("[type='button']");
    var couleurforbackgrd
   
    for (i=0; i<11; i++) {
        var bouton = $(boutons[i]);
        var couleurbouton = bouton.data("color");
        bouton.css( "background-color", couleurbouton);
    };

    boutons.click(function(){
        couleurforbackgrd = ($(this).data("color"));
        console.log(couleurforbackgrd);
        $("body").css("background", couleurforbackgrd);
        });
        
    var checkbox = $("[type='checkbox']")
    checkbox.click(function(){
    if ($(":checkbox").is(":checked")) {
            $(".main").css("color", couleurforbackgrd);
        } else {
            $(".main").css("color", "black");
        }
    });
});