$(function () {
    $(document).on('click', ".nav li", function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

});