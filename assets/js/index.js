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
    ias.extension(new IASNoneLeftExtension({text: "No hay más noticias nuevas."}));

    /* Email validation */

    function checkEmail() {

        var email = document.getElementById('correo');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(email.value)) {
            alert('Please provide a valid email address');
            email.focus;
            return false;
        }
    }

    var ajaxreq = false, ajaxCallback;

    function ajaxRequest(data) {
        try {
            ajaxreq = new XMLHttpRequest();
        } catch (error) {
            try {
                ajaxreq = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (error) {
                return false;
            }
        }
        var name = data['name'];
        var email = data['email'];
        var subject = data['subject'];
        var message = data['message'];
        var json = "{ \"name\" : \"" + name + "\" , \"email\" : \"" + email + "\", \"subject\" : \"" + subject + "\", \"message\": \"" + message + "\"}";
        ajaxreq.open(POST, json);
        ajaxreq.onreadystatechange = ajaxResponse;
        ajaxreq.send(null);

    }

    function ajaxResponse() {
        if (ajaxreq.readyState != 4) return;
        if (ajaxreq.status == 200) {
            if (ajaxCallback) ajaxCallback();
        } else {
            alert("Request failed: " + ajaxreq.statusText);
        }
        return true;
    }
});



