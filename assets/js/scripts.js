$('.project1Button').on('click', function(){
    // var overlay = $("<div class='overlay'></div>").text("");  // Create text with jQuery

    // var overlayjQuery = $( "p" ).add( "div" ).addClass("overlay");

    $("body").append("<div class='overlay'></div>");
    $(".overlay").css({
        "backgroundColor": "rgb(10, 10, 10)",
        "position": "fixed",
        "top": "0",
        "height": "100vh",
        "width": "100vw",
        "opacity": "0.8",
    })
    // var project1Card = $("<div class='overlay'></div>").text("");
})

$('.overlay').on('click', function() {
    console.log('clicked!')
    $(this).remove();
})