var canvasAlto, canvasAncho; 
var anchoGraficos, altoGraficos; 	//Height and width of the grafics
var xSemanal; //Position referenced to left. (Big and unique canvas)
var ySemanal; //Position referenced to top. (Big and unique canvas)

//Positions of the different graphics. 
var xTemperatura, yTemperatura; 	
var xPresion, yPresion; 
var xHumedad, yHumedad; 
var xViento, yViento; 
var xLluvia, yLluvia; 
var xDioxido, yDioxido; 
var xMonoxido, yMonoxido; 
var xAmoniaco, yAmoniaco; 
//Definitions of global variables of the objects of graphics
var gr_temperatura, gr_presion, gr_humedad, gr_viento, gr_lluvia, gr_dioxido, gr_monoxido, gr_amoniaco; 




var listoDibujeActuales = false; 

jQuery(document).ready(function($){
	actualizarActuales();
  	setInterval(actualizarActuales, 600000);

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
			gr_temperatura.background(255,0,0);
			gr_presion.background(0,255,0);
			gr_humedad.background(0,0,255);
			gr_viento.background(255,0,0);
			gr_lluvia.background(0,255,0);
			gr_dioxido.background(0,0,255);
			gr_monoxido.background(255,0,0);
			gr_amoniaco.background(0,255,0);
		
			image(gr_temperatura, xTemperatura - xSemanal, yTemperatura - ySemanal, anchoGraficos, altoGraficos);
			image(gr_presion, xPresion - xSemanal, yPresion - ySemanal, anchoGraficos, altoGraficos);
			image(gr_humedad, xHumedad - xSemanal, yHumedad - ySemanal, anchoGraficos, altoGraficos);
			image(gr_viento, xViento - xSemanal, yViento - ySemanal, anchoGraficos, altoGraficos);
			image(gr_lluvia, xLluvia - xSemanal, yLluvia - ySemanal, anchoGraficos, altoGraficos);
			image(gr_dioxido, xDioxido - xSemanal, yDioxido - ySemanal, anchoGraficos, altoGraficos);
			image(gr_monoxido, xMonoxido - xSemanal, yMonoxido - ySemanal, anchoGraficos, altoGraficos);
			image(gr_amoniaco, xAmoniaco - xSemanal, yAmoniaco - ySemanal, anchoGraficos, altoGraficos);
			
		}
	}


