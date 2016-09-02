# Minux-s-libwebdraw
Biblioteca de dibujo de diversas figuras y formas en canvas-javascript.

Se accede a las funciones de la siguiente manera:<br>
<pre><code>Minux.función(parametro1, parametro2, ...., parametroN)</code></pre>
<br>
### Rectángulo con las esquinas redondeadas:
<pre><code>Minux.roundedRectangle(context, Ancho, Alto, EsquinaX, EsquinaY, Proporcion);</code></pre>

*context*: es el contexto de canvas <br>
*Ancho*: ancho del rectangulo<br>
*Alto*: alto del rectangulo<br>
*EsquinaX*: es la coordenada x de la esquina superior izquierda del rectángulo<br>
*EsquinaY*: es la coordenada y de la esquina superior izquierda del rectángulo<br>
*Proporción*: es el denominador que divide el lado del rectángulo más corto, este denominador da la distancia en la que empieza a curvarse la esquina, su valor mínimo es 2, ya que como es denominador da 1/2 del lado mas corto, eso es que empieza a curvarse desde la mitad del lado mas corto.

### Elipse:
<pre><code>Minux.elipse(context, EjeMayor, EjeMenor, CentroX, CentroY, PixelExtra);</code></pre>

*context*: es el contexto de canvas<br>
*EjeMayor*: es la medida del eje mayor de la elipse<br>
*EjeMenor*: es la medida del eje menor de la elipse<br>
*CentroX*: coordenada en x del centro de la elipse <br>
*CentroY*: coordenada en y del centro de la elipse<br>
*PixelExtra*: recibe el valor de true o false. Para algunas medidas de la elipse muy singulares, su contorno del lado izquierdo parece no se cerrarse, cuando pase eso PixelExtra puede tomar el valor de true para evitar esa "grieta", en los demás casos no es necesario.

