
var Minux = {

	
	roundedRectangle : function(context, ancho, alto, esquinaX, esquinaY, proporcion){			
			
		if(ancho >= alto){				
			var radioCircunferencia = alto/(proporcion * 1.0);
		}else{
			var radioCircunferencia = ancho/(proporcion * 1.0);
		}
		
		var resHorizontal = ancho - (2*radioCircunferencia);
		var resVertical = alto - (2*radioCircunferencia);	
		
		context.beginPath();

		context.arc(esquinaX + radioCircunferencia, esquinaY + radioCircunferencia, radioCircunferencia, Math.PI, 3*Math.PI/2, false);
		context.lineTo(esquinaX + resHorizontal + radioCircunferencia, esquinaY);

		context.arc(esquinaX + radioCircunferencia + resHorizontal, esquinaY + radioCircunferencia, radioCircunferencia, 3*Math.PI/2, 0, false);
		context.lineTo(esquinaX + ancho, esquinaY + radioCircunferencia + resVertical);

		context.arc(esquinaX + radioCircunferencia + resHorizontal, esquinaY + radioCircunferencia + resVertical, radioCircunferencia, 0, Math.PI/2, false);
		context.lineTo(esquinaX + radioCircunferencia, esquinaY + alto);

		context.arc(esquinaX + radioCircunferencia, esquinaY + radioCircunferencia + resVertical, radioCircunferencia, Math.PI/2, Math.PI, false);
		context.lineTo(esquinaX, esquinaY + radioCircunferencia);

		context.stroke();
	},


	elipse : function(context, ejeMayor, ejeMenor, centroX, centroY, pixelExtra){
		
		var a = ejeMayor/2.0;
		var b = ejeMenor/2.0;

		var aa = a*a;
		var bb = b*b;

		var numPixeles = 1;

		context.beginPath();
		context.moveTo(centroX - a, centroY - y);

		for(var x = (-1*a); x <= a; x += numPixeles){
			
			var y = b * (Math.sqrt(1-(x*x/aa)));
			
			context.lineTo(centroX + x, centroY - y);
		}

		for(var x = a; x >= (-1*a); x -= numPixeles){
			
			var y = b * (Math.sqrt(1-(x*x/aa)));
			
			context.lineTo(centroX + x, centroY + y);
		}
		
		if(pixelExtra == true){

			x = -1*a + numPixeles;
			y = b * (Math.sqrt(1-(x*x/aa)));

			context.lineTo(centroX - a, centroY - y);
		}
		
		context.stroke();
		context.closePath();
	}

	
}
