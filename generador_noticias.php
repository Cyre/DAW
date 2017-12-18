<?php
/**
 * Created by PhpStorm.
 * User: Kaai
 * Date: 17/12/2017
 * Time: 14:39
 */
$number = $_GET["count"];
$noticias = file_get_contents('assets/datas/noticias.json', true);
$datos = json_decode($noticias, true);

showFourNews($number,$datos);


function showFourNews($start,$datos) {
        $count = count($datos);
        if ($start < 0 || $start > $count) {return false;}
        $end = $start + 4;
        echo "<div class=\"post\">
            <div class=\"row\">";
        for ($i = $start; $i < $end; $i++) {
            if ($i == $count) {break;}
            if ($i == $start) {
                echo "<div class=\"col-md-2 col-md-offset-2\">";
            } else {
                echo "<div class=\"col-md-2\">";
            }
            $noticia = $datos[$i];


            switch ($noticia["display"]) {
                case "imagen":
                    muestra_imagen($noticia["contenido"],$noticia["enlace"]);
                    break;
                case "titular":
                    muestra_titular($noticia["contenido"],$noticia["enlace"]);
                    break;
                case "cita":
                    muestra_cita($noticia["contenido"],$noticia["enlace"]);
                    break;
            }

        }
    echo "</div></div></body></html>";
}

function muestra_cita($contenido,$enlace) {
    $cita = $contenido["cita"];
    $autor = $contenido["autor"];
    echo "<a href=\"$enlace\">
        <blockquote>
            <p>$cita</p>
            <footer>$autor</footer>
        </blockquote>
    </a>
</div>";
}

function muestra_imagen($contenido,$enlace) {
    echo "<a href=\"$enlace\"><img src=\"$contenido\"></a></div>";
}

function muestra_titular($contenido,$enlace) {
    echo "<a href=\"$enlace\"><p>$contenido</p></a></div>";
}

?>