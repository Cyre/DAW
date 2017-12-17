$(document).ready(function(){
    $('.nav li').click(function(){
        $('.nav li').removeClass("active");
        $(this).addClass("active");
    });

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "todos")
        {
            $('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});
