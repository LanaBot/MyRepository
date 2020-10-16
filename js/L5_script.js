$(function(){
    let paragraph = $("<p>")
    paragraph.append("new text")
    $("body").append(paragraph)
});

$(function(){
    let seconds = 0
    let counting = false
    let interval

    $("#play-pause").click(function(){
        if(counting == false){
            counting = true
            interval = setInterval(function(){
                seconds++
                $("#time").text(seconds)
            },1000)

            $(".info").show()
            $(this).text("Pause")
        } else{
            counting = false
            clearInterval(interval)
            $(".info").hide()
            $(this).text("Play")
        }
    })

    $("#start").click(function(){
        counting = true
        interval = setInterval(function(){
            seconds++;
            $("#time").text(seconds)
        },1000)
    })
    $("#stop").click(function(){
        clearInterval(interval)
        counting = false

    })
    $("#reset").click(function(){
        clearInterval(interval)
        seconds = 0
        $("#time").text(seconds)
        $("#play-pause").text(play)
        $(".info").hide()
    })
})
