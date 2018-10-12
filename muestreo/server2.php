<?php
    require("conexion.php");
    $cantRegistros168hs = 2016; //Si se hace un registro cada 5 minutos, 168 hs son 2016 registros. 
    
	$sql2 = "SELECT * from `registros` ORDER BY id DESC LIMIT $cantRegistros168hs";
    $a = mysqli_query($link, $sql2);
    while($resultadosArray = mysqli_fetch_array($a)){
        $A_temperatura[] = $resultadosArray['temperatura'];
        $A_humedad[] = $resultadosArray['humedad'];
        $A_presion[] = $resultadosArray['presion'];
        $A_uv[] = $resultadosArray['uv'];
        $A_viento[] = $resultadosArray['viento'];
        $A_lluvia[] = $resultadosArray['lluvia'];
        $A_dioxido[] = $resultadosArray['dioxido'];
        $A_monoxido[] = $resultadosArray['monoxido'];
        $A_amoniaco[] = $resultadosArray['amoniaco'];
    }   //Hasta aquí tenemos los arrays con 2016 registros, todo correcto. 
    $i1 = 0; 
    $i2 = 0;    
    $i3 = 0; 
    $constante1 = $cantRegistros168hs / 168;    //Es decir cuantos registros por hora. 
    
   

    //Aquí abajo procedemos a calcular el promedio de cada variable climática cada hora. 
    $k = 0; 
    while($k <= 168){ //Inicializamos los arrays de promedios en vacíos
        $A_prom_temperatura[$k] = 0; 
        $A_prom_humedad[$k] = 0; 
        $A_prom_presion[$k] = 0; 
        $A_prom_uv[$k] = 0;
        $A_prom_viento[$k] = 0; 
        $A_prom_lluvia[$k] = 0; 
        $A_prom_dioxido[$k] = 0; 
        $A_prom_monoxido[$k] = 0; 
        $A_prom_amoniaco[$k] = 0;
        $k++;
    }
    
    $i1 = 0; 
    while($i1 <= 167){
        $i2 = 0;     
        while($i2 <= $constante1 -1 ){
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
        $A_prom_temperatura[$i1] = $A_prom_temperatura[$i1] / $constante1; 
        $A_prom_humedad[$i1] = $A_prom_humedad[$i1] / $constante1; 
        $A_prom_presion[$i1] = $A_prom_presion[$i1] / $constante1; 
        $A_prom_uv[$i1] = $A_prom_uv[$i1] / $constante1; 
        $A_prom_viento[$i1] = $A_prom_viento[$i1] / $constante1; 
        $A_prom_lluvia[$i1] = $A_prom_lluvia[$i1] / $constante1; 
        $A_prom_dioxido[$i1] = $A_prom_dioxido[$i1] / $constante1; 
        $A_prom_monoxido[$i1] = $A_prom_monoxido[$i1] / $constante1; 
        $A_prom_amoniaco[$i1] = $A_prom_amoniaco[$i1] / $constante1; 

        //Redondeamos para que no molesten los decimales
       $A_prom_temperatura[$i1] = round($A_prom_temperatura[$i1],0);
       $A_prom_humedad[$i1] = round($A_prom_humedad[$i1],0);
       $A_prom_presion[$i1] = round($A_prom_presion[$i1],0);
       $A_prom_uv[$i1] = round($A_prom_uv[$i1],0);
       $A_prom_viento[$i1] = round($A_prom_viento[$i1],0);
       $A_prom_lluvia[$i1]  = round($A_prom_lluvia[$i1],0);
       $A_prom_dioxido[$i1] = round($A_prom_dioxido[$i1],0);
       $A_prom_monoxido[$i1] = round($A_prom_monoxido[$i1],0);
       $A_prom_amoniaco[$i1] = round($A_prom_amoniaco[$i1],0);

        $i1++;
    }

    //En los arrays del tipo $A_prom_amoniaco tenemos 168 registros cada uno es el valor de su variable por hora. 
    
        $prepararParaJson['temperatura'] =  $A_prom_temperatura;
        $prepararParaJson['humedad'] = $A_prom_humedad; 
        $prepararParaJson['presion'] = $A_prom_presion;
        $prepararParaJson['uv'] = $A_prom_uv;
        $prepararParaJson['viento'] = $A_prom_viento;
        $prepararParaJson['lluvia'] = $A_prom_lluvia; 
        $prepararParaJson['dioxido'] = $A_prom_dioxido; 
        $prepararParaJson['monoxido'] = $A_prom_monoxido; 
        $prepararParaJson['amoniaco'] = $A_prom_amoniaco; 
       
        //Llamo a las funciones para sacar maximo y minimo, y las meto en dos posiciones del json 

        //Guardo en el array $maximos[] los valores maximos de cada variable climática en la semana    
        $maximos[0] = maximoDelArray($A_prom_temperatura);
        $maximos[1] = maximoDelArray($A_prom_humedad);
        $maximos[2] = maximoDelArray($A_prom_presion);
        $maximos[3] = maximoDelArray($A_prom_uv);
        $maximos[4] = maximoDelArray($A_prom_viento);
        $maximos[5] = maximoDelArray($A_prom_lluvia);
        $maximos[6] = maximoDelArray($A_prom_dioxido);
        $maximos[7] = maximoDelArray($A_prom_monoxido);
        $maximos[8] = maximoDelArray($A_prom_amoniaco);
        
        $prepararParaJson['maximos'] = $maximos;    //Preparo el json con maximos

        //Guardo en el array $minimos[] los valores minimos de cada variable climática en la semana
        $minimos[0] = minimoDelArray($A_prom_temperatura);
        $minimos[1] = minimoDelArray($A_prom_humedad);
        $minimos[2] = minimoDelArray($A_prom_presion);
        $minimos[3] = minimoDelArray($A_prom_uv);
        $minimos[4] = minimoDelArray($A_prom_viento);
        $minimos[5] = minimoDelArray($A_prom_lluvia);
        $minimos[6] = minimoDelArray($A_prom_dioxido);
        $minimos[7] = minimoDelArray($A_prom_monoxido);
        $minimos[8] = minimoDelArray($A_prom_amoniaco);

        $prepararParaJson['minimos'] = $minimos;//Preparo el json con minimos
    

        //En este superpaquete json están todos los datos
        
       echo json_encode($prepararParaJson);

        
       
        function maximoDelArray($arraysito){
            $a = $arraysito[0];
            $b = count($arraysito); 
            $i = 0; 
            while($i < $b){
                if($arraysito[$i] > $a){
                    $a = $arraysito[$i];
                }
                $i++;
            }
            return($a);      //Devuelve la posición del array donde está el valor máximo
        }
        function minimoDelArray($arraysito){
            $a = $arraysito[0];
            $b = count($arraysito);
            $i = 0; 
            while($i < $b){
                if($arraysito[$i] < $a){
                    $a = $arraysito[$i];
                }
                $i++;
            }
            return($a);       //Devuelve la posición del array donde está el valor mínimo
        }

    
    
    


?>