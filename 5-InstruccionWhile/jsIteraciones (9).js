function mostrar()
{

	var contador;
	var respuesta;
	var maximo;
	var minimo;
	// declarar variables

	contador=0;
	respuesta="si";

	do
	{
		contador=contador+1
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(contador==1)
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado>maximo)
			{
				maximo=numeroIngresado;
			}
			if(numeroIngresado<minimo)
			{
				minimo=numeroIngresado;
			}
		}
		
		respuesta=prompt("Ingrese 'no' para salir");
	}while(respuesta!="no" || isNaN(numeroIngresado));
	
		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;
}//FIN DE LA FUNCIÓN