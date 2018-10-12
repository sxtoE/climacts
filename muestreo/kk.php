<?php
$link = mysqli_connect("LOCALHOST", "root", "", "estem");
$i = 0; 

//mysqli_query($link, "DELETE  from `registros` WHERE 1");

mysqli_query($link, "INSERT into `registros`(`temperatura`,`humedad`,`presion`,`uv`,`viento`,`lluvia`,`dioxido`,`monoxido`,`amoniaco`) VALUES ('$i','$i','$i','$i','$i','$i','$i','$i','$i')");

while($i < 300){
mysqli_query($link, "INSERT into `registros`(`temperatura`,`humedad`,`presion`,`uv`,`viento`,`lluvia`,`dioxido`,`monoxido`,`amoniaco`) VALUES ('$i','$i','$i','$i','$i','$i','$i','$i','$i')");
    $i++;
}




?>