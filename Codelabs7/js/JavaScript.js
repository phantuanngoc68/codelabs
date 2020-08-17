$(document).ready(function () {
    $(".nav-bar-item").mouseenter(function () {
        $(".sub-nav").hide();
        $(this).children().show()
    });
    $(".nav-bar-item").click(function () {
        $(".sub-nav").hide();
    });
    $(".nav-bar-item").mouseleave(function () {
        $(".sub-nav").hide();
    })
})