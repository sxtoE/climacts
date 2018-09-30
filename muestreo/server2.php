<?php
    require("conexion.php");
    $cantRegistros168hs = 2016; //Si se hace un registro cada 5 minutos, 168 hs son 2016 registros. 
    
	$sql2 = "SELECT * from `registros` ORDER BY id DESC LIMIT $cantRegistros168hs";
	$a = mysqli_query($link, $sql1);
    while($resultadosArray = mysqli_fetch_array($a)){
        $A_temperatura = $resultadosArray['temperatura'];
        $A_humedad = $resultadosArray['humedad'];
        $A_presion = $resultadosArray['presion'];
        $A_uv = $resultadosArray['uv'];
        $A_viento = $resultadosArray['viento'];
        $A_lluvia = $resultadosArray['lluvia'];
        $A_dioxido = $resultadosArray['dioxido'];
        $A_monoxido = $resultadosArray['monoxido'];
        $A_amoniaco = $resultadosArray['amoniaco'];
    }
    $i1 = 0; 
    $i2 = 0;    
    $i3 = 0; 
    $constante1 = $cantRegistros168hs / 168;    //Es decir cuantos registros por hora. 
    //Aquí abajo procedemos a calcular el promedio de cada variable climática cada hora. 
    while($i1 <= 168){
        $i2 = 0; 
        while($i2 <= constante1){
            $A_prom_temperatura[$i1] = $A_prom_temperatura[$i1] + $A_temperatura[$i3];
            $A_prom_humedad[$i1] = $A_prom_humedad[$i1] + $A_humedad[$i3];
            $A_prom_presion[$i1] = $A_prom_presion[$i1] + $A_presion[$i3];
            $A_prom_uv[$i1] = $A_prom_uv[$i1] + $A_uv[$i3];
            $A_prom_viento[$i1] = $A_prom_viento[$i1] + $A_viento[$i3];
            $A_prom_lluvia[$i1] = $A_prom_lluvia[$i1] + $A_lluvia[$i3];
            $A_prom_dioxido[$i1] = $A_prom_dioxido[$i1] + $A_dioxido[$i3];
            $A_prom_monoxido[$i1] = $A_prom_monoxido[$i1] + $A_monoxido[$i3];
            $A_prom_amoniaco[$i1] = $A_prom_amoniaco[$i1] + $A_amoniaco[$i3];
            $i2++;
            $i3++;
        }
        $A_prom_temperatura[$i1] = $A_prom_temperatura[$i1] / constante1; 
        $A_prom_humedad[$i1] = $A_prom_humedad[$i1] / constante1; 
        $A_prom_presion[$i1] = $A_prom_presion[$i1] / constante1; 
        $A_prom_uv[$i1] = $A_prom_uv[$i1] / constante1; 
        $A_prom_viento[$i1] = $A_prom_viento[$i1] / constante1; 
        $A_prom_lluvia[$i1] = $A_prom_lluvia[$i1] / constante1; 
        $A_prom_dioxido[$i1] = $A_prom_dioxido[$i1] / constante1; 
        $A_prom_monoxido[$i1] = $A_prom_monoxido[$i1] / constante1; 
        $A_prom_amoniaco[$i1] = $A_prom_amoniaco[$i1] / constante1; 
        $i1 ++;
    }

    //En los arrays del tipo $A_prom_amoniaco tenemos 168 registros cada uno es el valor de su variable por hora. 

    
    
    


?>