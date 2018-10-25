var canvasAlto, canvasAncho; 
var anchoGraficos, altoGraficos; 	//Height and width of the grafics
var xSemanal; //Position referenced to left. (Big and unique canvas)
var ySemanal; //Position referenced to top. (Big and unique canvas)

//Positions of the different graphics. 
var xTemperatura, yTemperatura; 	
var xPresion, yPresion; 
var xUv, yUv; 
var xHumedad, yHumedad; 
var xViento, yViento; 
var xLluvia, yLluvia; 
var xDioxido, yDioxido; 
var xMonoxido, yMonoxido; 
var xAmoniaco, yAmoniaco; 
//Definitions of global variables of the objects of graphics
var gr_temperatura, gr_presion, gr_uv, gr_humedad, gr_viento, gr_lluvia, gr_dioxido, gr_monoxido, gr_amoniaco; 

//Arrays wich have 2016  values for semanal graphs
var promTemperatura = [];
var promHumedad = []; 
var promPresion = [];
var promUv = [];
var promViento = [];
var promLluvia = [];
var promDioxido = [];
var promMonoxido = [];
var promAmoniaco = [];
var maximos = [];
var minimos = []; 

var nana = false;
var dibujados = false; 
//Object received from json of semanal data
var objectSemanal = 0; 

//ancho y alto de los elipses de cada valor de cada grafico semanal
var anchoElipses = 3, altoElipses = 3; 

var anchoElipses1 = 0.003; 
var altoElipses1 = 0.003;

var listoDibujeActuales = false; 

jQuery(document).ready(function($){
	actualizarActuales();
	actualizarSemanales();  
	
	setInterval(actualizarActuales, 600000);
	setInterval(actualizarSemanales, 600000);

	function actualizarActuales(){
      $.ajax({
           url:"server1.php",
           method:"POST",
           success: function (devol){
           $("#actuales").html(devol);
           listoDibujeActuales = true; 
           if(listoDibujeActuales == true){
			   calcularMeasuresCanvas();
	        }
         }
	  });
	}
	
	function actualizarSemanales(){
		$.ajax({
			type:"POST",
			dataType: "json",
			url: "server2.php",
			success: function(data){
				objectSemanal = data;
				console.log(objectSemanal);
								
			}
		});	
	}

	

     function calcularMeasuresCanvas(){
     	if(listoDibujeActuales == true){
     		//Obtener width, height del div donde irá el canvas: 
			var constante = 1083; 
			constante = constante / 1258;
			var constante2 = 214.22; 
			constante2 = constante2 / 470.4;
			var anchoDiv = $("#semanal").css("width");
			var cantCaractAnchoDiv = anchoDiv.length;
			anchoDiv = anchoDiv.slice(0,  cantCaractAnchoDiv - 2);
			var altoDiv = constante*anchoDiv; 

			//En anchoGrafic, altoGrafic tengo ancho y alto de los graficos (son todos igualitos)
			var anchoGrafic = $("#SG_temperatura").css("width");
			var cantCaractAnchoGrafic = anchoGrafic.length;
			anchoGrafic = anchoGrafic.slice(0, cantCaractAnchoGrafic - 2);
			
			var altoGrafic = constante2*anchoGrafic;
			anchoGraficos = anchoGrafic; 
			altoGraficos = altoGrafic; 
		
				
			//En anchoDiv, altoDiv 	tengo ancho y alto de la caja donde meteré el canvas del mismo tamaño. 
			canvasAlto = altoDiv; 
			canvasAncho = anchoDiv;

			//Position of generic canvas and specific graphs
			var O_semanal = document.getElementById('semanal');
			var posicionSemanal = O_semanal.getBoundingClientRect();
			xSemanal = posicionSemanal.left;
			ySemanal = posicionSemanal.top; 
			var O_temperatura = document.getElementById('SG_temperatura');
			var posicionTemperatura = O_temperatura.getBoundingClientRect();
			xTemperatura = posicionTemperatura.left;
			yTemperatura = posicionTemperatura.top;
			var O_presion = document.getElementById('SG_presion');
			var posicionPresion = O_presion.getBoundingClientRect();
			xPresion = posicionPresion.left;
			yPresion = posicionPresion.top;
			var O_uv = document.getElementById('SG_uv');
			var posicionUv = O_uv.getBoundingClientRect();
			xUv = posicionUv.left;
			yUv = posicionUv.top;
			var O_humedad = document.getElementById('SG_humedad');
			var posicionHumedad = O_humedad.getBoundingClientRect();
			xHumedad = posicionHumedad.left;
			yHumedad = posicionHumedad.top;
			var O_viento = document.getElementById('SG_viento');
			var posicionViento = O_viento.getBoundingClientRect();
			xViento = posicionViento.left;
			yViento = posicionViento.top;
			var O_lluvia = document.getElementById('SG_lluvia');
			var posicionLluvia = O_lluvia.getBoundingClientRect();
			xLluvia = posicionLluvia.left;
			yLluvia = posicionLluvia.top;
			var O_dioxido = document.getElementById('SG_dioxido');
			var posicionDioxido = O_dioxido.getBoundingClientRect();
			xDioxido = posicionDioxido.left;
			yDioxido = posicionDioxido.top;
			var O_monoxido = document.getElementById('SG_monoxido');
			var posicionMonoxido = O_monoxido.getBoundingClientRect();
			xMonoxido = posicionMonoxido.left;
			yMonoxido = posicionMonoxido.top;
			var O_amoniaco = document.getElementById('SG_amoniaco');
			var posicionAmoniaco = O_amoniaco.getBoundingClientRect();
			xAmoniaco = posicionAmoniaco.left;
			yAmoniaco = posicionAmoniaco.top;
			
			//That was the position of every graph and the unique canvas
			
			setup();
			
			draw();
		
	
	
	
		}	
	}
});

	function setup(){
		if(listoDibujeActuales == true){
			var cnvTotal = createCanvas(canvasAncho, canvasAlto);
			cnvTotal.position(xSemanal, ySemanal);
			
			
			
			
			
			gr_temperatura = createGraphics(anchoGraficos, altoGraficos);		//Graficos de cada unidad
			gr_presion = createGraphics(anchoGraficos, altoGraficos);
			gr_uv = createGraphics(anchoGraficos, altoGraficos);
			gr_humedad = createGraphics(anchoGraficos, altoGraficos);
			gr_viento = createGraphics(anchoGraficos, altoGraficos);
			gr_lluvia = createGraphics(anchoGraficos, altoGraficos);
			gr_dioxido = createGraphics(anchoGraficos, altoGraficos);
			gr_monoxido = createGraphics(anchoGraficos, altoGraficos);
			gr_amoniaco = createGraphics(anchoGraficos, altoGraficos);
		}
	}

	
	function draw(){
		if(listoDibujeActuales==true){
			gr_temperatura.background(255,255,255);
			gr_presion.background(255,255,255);
			gr_uv.background(255,255,255);
			gr_humedad.background(255,255,255);
			gr_viento.background(255,255,255);
			gr_lluvia.background(255,255,255);
			gr_dioxido.background(255,255,255);
			gr_monoxido.background(255,255,255);
			gr_amoniaco.background(255,255,255);
		
			

			//Procedemos a dibujar los axis X e Y 
			
			gr_temperatura.line(10,altoGraficos-30,anchoGraficos-10,altoGraficos-30); //Eje X 
			gr_temperatura.line(30,altoGraficos-10,30,10);	//Eje Y
			gr_presion.line(10,altoGraficos-30,anchoGraficos-10,altoGraficos-30); //Eje X 
			gr_presion.line(30,altoGraficos-10,30,10);	//Eje Y
			gr_uv.line(10,altoGraficos-30,anchoGraficos-10,altoGraficos-30); //Eje X 
			gr_uv.line(30,altoGraficos-10,30,10);	//Eje Y
			gr_humedad.line(10,altoGraficos-30,anchoGraficos-10,altoGraficos-30); //Eje X 
			gr_humedad.line(30,altoGraficos-10,30,10);	//Eje Y
			gr_viento.line(10,altoGraficos-30,anchoGraficos-10,altoGraficos-30); //Eje X 
			gr_viento.line(30,altoGraficos-10,30,10);	//Eje Y
			gr_lluvia.line(10,altoGraficos-30,anchoGraficos-10,altoGraficos-30); //Eje X 
			gr_lluvia.line(30,altoGraficos-10,30,10);	//Eje Y
			gr_dioxido.line(10,altoGraficos-30,anchoGraficos-10,altoGraficos-30); //Eje X 
			gr_dioxido.line(30,altoGraficos-10,30,10);	//Eje Y
			gr_monoxido.line(10,altoGraficos-30,anchoGraficos-10,altoGraficos-30); //Eje X 
			gr_monoxido.line(30,altoGraficos-10,30,10);	//Eje Y			
			gr_amoniaco.line(10,altoGraficos-30,anchoGraficos-10,altoGraficos-30); //Eje X 
			gr_amoniaco.line(30,altoGraficos-10,30,10);		//Eje Y
		
			
			

			//Ahora que están dibujadas las lineas, hay que llamar a la funcion que nos dibujará los valores en forma de puntos
			//Para dibujar los valores necesitamos escalar los gráficos. 
			//En eje X, se escala fácil, 2016 marcas 1 cada 5 min, y 7 líneas visibles una por día. 
			//En eje Y, no se escala nada fácil.
			
			//En el objeto objectSemanal tenemos todos los datos de los puntitos. 
			
			var zeroX = 10;
			var zeroY = altoGraficos - 30;
			var textoX = zeroX-8; //Posición del texto sobre el eje ordenadas (dice x porque es izq der)
			//text(objectSemanal.minimos[0], zeroX, zeroY);  
			//Vamos a dibujar sobre el gráfico de temperatura: 
			 
			if(objectSemanal != 0 && nana == false){  //necesario para que no se repita. 
				promTemperatura = objectSemanal.temperatura; 
				promPresion = objectSemanal.presion;
				promUv = objectSemanal.uv; 
				promHumedad = objectSemanal.humedad; 
				promViento = objectSemanal.viento; 
				promLluvia = objectSemanal.lluvia; 
				promDioxido = objectSemanal.dioxido; 
				promMonoxido = objectSemanal.monoxido; 
				promAmoniaco = objectSemanal.amoniaco; 
				maximos = objectSemanal.maximos; 
				minimos = objectSemanal.minimos; 
	
				nana = true; 
				
			}

			
			//Acabamos de obtener arrays con todos los puntos, ahora dibujemos esos puntos 
			//Setear máximos mínimos y medio
			gr_temperatura.text(minimos[0],textoX, zeroY);
			gr_temperatura.text(maximos[0],textoX, 10);
			var medio = maximos[0] - minimos[0]; 
			valormedio = medio / 2; 
			medio = Math.round(valormedio);
			medio = medio + int(minimos[0]);
			gr_temperatura.text(medio, textoX, ((altoGraficos-10) / 2));
			gr_temperatura.text(objectSemanal.fechasGraf[6], zeroX+((anchoGraficos-30)/7)*1, zeroY +12);
			//alert(anchoGraficos);
			gr_temperatura.text(objectSemanal.fechasGraf[5], zeroX + ((anchoGraficos-30)/7)*2, zeroY + 12);
			gr_temperatura.text(objectSemanal.fechasGraf[4], zeroX + ((anchoGraficos-30)/7)*3, zeroY + 12);
			gr_temperatura.text(objectSemanal.fechasGraf[3], zeroX + ((anchoGraficos-30)/7)*4, zeroY + 12);
			gr_temperatura.text(objectSemanal.fechasGraf[2], zeroX + ((anchoGraficos-30)/7)*5, zeroY + 12);
			gr_temperatura.text(objectSemanal.fechasGraf[1], zeroX + ((anchoGraficos-30)/7)*6, zeroY + 12);
			
			gr_temperatura.text(objectSemanal.fechasGraf[0], anchoGraficos - 30, zeroY+12);
			
			//Eso fue la preparación de los gráficos con las fechas que ve el usuario. Ahora los puntos: 




			
			

			
			
			

			
			i = 0; 			

			//if(dibujados != true){
				while(i < 2016){
					if((promTemperatura[i] > minimos[0]) && (promTemperatura[i] < maximos[0])){

						var puntazo = promTemperatura[i];
									
						
						 
						
						
						gr_temperatura.ellipse(((((anchoGraficos-40)/2016))*i)+30, puntazo,0.1,0.1); //Cada uno de los 2016 puntos
						
					}
					i++;	
				}
			//	dibujados = true; 
			//}	

			
			//Procedemos a proyectar las imagenes. 
			image(gr_temperatura, xTemperatura - xSemanal, yTemperatura - ySemanal, anchoGraficos, altoGraficos);
			image(gr_presion, xPresion - xSemanal, yPresion - ySemanal, anchoGraficos, altoGraficos);
			image(gr_uv, xUv - xSemanal, yUv - ySemanal, anchoGraficos, altoGraficos);
			image(gr_humedad, xHumedad - xSemanal, yHumedad - ySemanal, anchoGraficos, altoGraficos);
			image(gr_viento, xViento - xSemanal, yViento - ySemanal, anchoGraficos, altoGraficos);
			image(gr_lluvia, xLluvia - xSemanal, yLluvia - ySemanal, anchoGraficos, altoGraficos);
			image(gr_dioxido, xDioxido - xSemanal, yDioxido - ySemanal, anchoGraficos, altoGraficos);
			image(gr_monoxido, xMonoxido - xSemanal, yMonoxido - ySemanal, anchoGraficos, altoGraficos);
			image(gr_amoniaco, xAmoniaco - xSemanal, yAmoniaco - ySemanal, anchoGraficos, altoGraficos);
			
		}
	}




	
	