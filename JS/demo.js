$(document).ready(function(){
    $(".parter-tutorials").click(function(){
        $(".tutorials").toggle();
        $(".references").hide();
        $(".examples").hide();
        $(".exercises").hide();
    })
})

$(document).ready(function(){
    $(".close-btn").click(function(){
        $(".tutorials").hide();
    })
})

$(document).ready(function(){
    $(".parter-references").click(function(){
        $(".references").toggle();
        $(".examples").hide();
        $(".tutorials").hide();
        $(".exercises").hide();
    })
})

$(document).ready(function(){
    $(".close-btn").click(function(){
        $(".references").hide();
    })
})

$(document).ready(function(){
    $(".parter-examples").click(function(){
        $(".examples").toggle();
        $(".tutorials").hide();
        $(".references").hide();
        $(".exercises").hide();
    })
})

$(document).ready(function(){
    $(".close-btn").click(function(){
        $(".examples").hide();
    })
})

$(document).ready(function(){
    $(".parter-exercises").click(function(){
        $(".exercises").toggle();
        $(".tutorials").hide();
        $(".references").hide();
        $(".examples").hide();
    })
})

$(document).ready(function(){
    $(".btn-tutorials").click(function(){
        $(".file-tutorials").toggle();
    })
})

$(document).ready(function(){
    $(".btn-references").click(function(){
        $(".file-references").toggle();
    })
})

$(document).ready(function(){
    $(".btn-examples").click(function(){
        $(".file-examples").toggle();
    })
})

$(document).ready(function(){
    $(".btn-exercises").click(function(){
        $(".file-exercises").toggle();
    })
})

$(document).ready(function(){
    $(".close-btn").click(function(){
        $(".exercises").hide();
    })
})

$(document).ready(function(){
    $(".btnn").click(function(){
        $(".button").toggle();
    })
})

$(document).ready(function(){
    $(".cls-btn").click(function(){
        $(".button").hide();
    })
})

$(document).mouseup(function(e){
    let container = $(".tutorials");
    if(!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
})

$(document).mouseup(function(e){
    let container = $(".references");
    if(!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
})

$(document).mouseup(function(e){
    let container = $(".examples");
    if(!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
})

$(document).mouseup(function(e){
    let container = $(".exercises");
    if(!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
})

$(document).mouseup(function(e){
    let container = $(".button");
    if(!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
})