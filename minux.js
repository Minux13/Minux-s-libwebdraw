

var Minux = {

	
	roundedRectangle : function(){
			
			
		
			
	
	
	
	},


	elipse : function(context, ejeMayor, ejeMenor, centroX, centroY, anchoDeLinea){
		
		var a = ejeMayor/2.0;
		var b = ejeMenor/2.0;

		/*context.beginPath();
		var CF = Math.sqrt(a*a - b*b);	//Centro al foco
		var FA = a - CF;				//Foco al extremo del diametro mayor

		var v1 = a + CF;				//vertices de los focos al un punto de la elipse
		var v2 = FA
		 
		for(var x = (-1*a); x <= a; x += anchoDeLinea){
			
			console.log(x)

			y = b * (Math.sqrt(1-(x*x/(a*a))))
			
			context.beginPath();
			context.arc(centroX + x, centroY + y, anchoDeLinea, 0,(2*Math.PI),true);
			context.arc(centroX + x, centroY - y, anchoDeLinea, 0,(2*Math.PI),true);
			context.fill();
		}
		*/

		var ancho = anchoDeLinea/2;

		var numPixeles = anchoDeLinea/2;
		
		for(var x = (-1*a); x <= a; x += numPixeles){
			
			var y = b * (Math.sqrt(1-(x*x/(a*a))))
			
			context.beginPath();
			context.arc(centroX + x, centroY + y, ancho, 0,(2*Math.PI),true);
			context.arc(centroX + x, centroY - y, ancho, 0,(2*Math.PI),true);
			context.fill();

		}

		for(var y = (-1*b); y <= b; y += numPixeles){
			

			var x = a * (Math.sqrt(1-(y*y/(b*b))))
			
			context.beginPath();
			context.arc(centroX + x, centroY + y, ancho, 0,(2*Math.PI),true);
			context.arc(centroX - x, centroY + y, ancho, 0,(2*Math.PI),true);
			context.fill();

		}
	},

	fillElipse : function(context, ejeMayor, ejeMenor, centroX, centroY){
		
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
		
		x = -1*a + numPixeles;
		y = b * (Math.sqrt(1-(x*x/aa)));

		context.lineTo(centroX - a, centroY - y);
		context.stroke();


		/*for(var y = (-1*b); y <= b; y += numPixeles){			
			
			var x = a * (Math.sqrt(1-(y*y/(b*b))))

			context.beginPath();
			context.moveTo(centroX - x, centroY - y);
			context.lineTo(centroX + x, centroY - y);
			context.stroke();

			context.beginPath();
			context.moveTo(centroX - x, centroY + y);
			context.lineTo(centroX + x, centroY + y);
			context.stroke();

		}
		
		/*for(var x = (-1*a); x <= a; x += numPixeles){
			
			var y = b * (Math.sqrt(1-(x*x/(a*a))))
			
			context.beginPath();
			context.moveTo(centroX - x, centroY - y);
			context.lineTo(centroX + x, centroY - y);
			context.stroke();

			context.beginPath();
			context.moveTo(centroX - x, centroY + y);
			context.lineTo(centroX + x, centroY + y);
			context.stroke();
		}

		for(var y = (-1*b); y <= b; y += numPixeles){			
			
			var x = a * (Math.sqrt(1-(y*y/(b*b))))

			context.beginPath();
			context.moveTo(centroX - x, centroY - y);
			context.lineTo(centroX + x, centroY - y);
			context.stroke();

			context.beginPath();
			context.moveTo(centroX - x, centroY + y);
			context.lineTo(centroX + x, centroY + y);
			context.stroke();

		}*/
	}
}

