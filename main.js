$(document).ready(function()  {
    $('.header').height($(window).height());
    console.log($(window).height());
})

$(".btn-fav").click(function(){
    $(".alert").toggleClass("hidden");
    setTimeout(hideAlert, 1500);
})

function hideAlert(){
    
    $(".alert").addClass("hidden");
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})