<?php
$i1 = 0; 
$i2 = 0; 
$i3 = 0; 
$constante1 = $cantRegistros168hs / 168; 
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





?>