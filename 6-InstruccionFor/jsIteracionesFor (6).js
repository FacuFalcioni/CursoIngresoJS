function mostrar()
{
	var numeroIngresado;
	var numero;


	numeroIngresado=prompt("Ingrese un numero");

	for(numero=2;numero<numeroIngresado;numero=numero+2)
	{
		console.info("Numero par: ", numero);
	}
}//FIN DE LA FUNCIÓN
