<?php
	include("conexion.php");
	//En $link tenemos la conexion
	$sql1 = "SELECT * from `registros` ORDER BY id DESC LIMIT 1";
	$a = mysqli_query($link, $sql1);
	echo "<h2>Valores Actuales:</h2> <br/>";
	while($result = mysqli_fetch_array($a)){
		echo "Id:";
		echo $result['id'];
		echo "<br/>Time:";
		echo $result['time'];
		echo "<br/>temperatura:";
		echo $result['temperatura'];
		echo "<br/>Humedad:";
		echo $result['humedad'];
		echo "<br/>Presion:";
		echo $result['presion'];
		echo "<br/>Uv:";
		echo $result['uv'];
		echo "<br/>Viento:";
		echo $result['viento'];
		echo "<br/>Lluvia:";
		echo $result['lluvia'];
		echo "<br/>Dioxido:";
		echo $result['dioxido'];
		echo "<br/>Monoxido:";
		echo $result['monoxido'];
		echo "<br/>Amoniaco:";
		echo $result['amoniaco'];

	}



	







?>
<!DOCTYPE html>
<html>
<head>
	<title>Estación Meteorológica</title>
</head>
<body>
	<h2>Estacion meteorologica CTS</h2>
	<div id="up">

	</div> 
</body>
</html>