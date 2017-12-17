$(document).ready(function(){

    /* Active class nav */

    $('.nav li').click(function(){
        $('.nav li').removeClass("active");
        $(this).addClass("active");
    });

    /* Image filter */

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

    /* Ininite scroll*/

    var ias = jQuery.ias({
        container: '#container',
        item: '.post',
        pagination: '#pagination',
        next: '.next'
    });

    ias.extension(new IASSpinnerExtension());
    ias.extension(new IASTriggerExtension({offset: 2}));
    ias.extension(new IASNoneLeftExtension({text: "You reached the end"}));

});



