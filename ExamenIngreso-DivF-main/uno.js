//Andres Almeida
function mostrar()
{
	let nombreIngresado;
	let tipoIngresado;
	let precioIngresado;
	let unidadesIngresadas;
	let categoriaIngresada;
	let fabricanteIngresado;

	let contadorComprasAlcohol = 0;
	let contadorComprasIac = 0;
	let contadorComprasQuat = 0;
	let acumuladorComprasAlcohol = 0;
	let acumuladorComprasIac = 0;
	let acumuladorComprasQuat = 0;
	let promedioComprasAlcohol = 0;
	let promedioComprasIac = 0;
	let promedioComprasQuat = 0;

	let acumuladorDesinfectante = 0;
	let acumuladorBactericida = 0;
	let acumuladorDetergente = 0;
	let categoriaConMasUnidades;
	let unidadesMax = 0;
	let acumuladorDetergentesBaratos = 0;

	let precioMax = 0;
	let fabricantePrecioMax;
	let categoriaPrecioMax;
	let productoPrecioMax;

	for(let i = 0; i < 5; i++){

		//INGRESO DE DATOS Y VALIDACION
		nombreIngresado = prompt("Ingrese el nombre del producto:");

		do{
			tipoIngresado = prompt("Ingrese el tipo de producto:");
		}while(tipoIngresado != "ALCOHOL" && tipoIngresado != "IAC" && tipoIngresado != "QUAT");

		do{
			precioIngresado = parseFloat(prompt("Ingrese el precio:"));
		}while(precioIngresado < 100 || precioIngresado > 300);

		do{
			unidadesIngresadas = parseInt(prompt("Ingrese la cantidad de unidades:"));
		}while(unidadesIngresadas < 1 || unidadesIngresadas > 1000);

		do{
			categoriaIngresada = prompt("Ingrese la categoria del producto:")
		}while(categoriaIngresada != "desinfectante" && categoriaIngresada != "bactericida" && categoriaIngresada != "detergente");
	
		fabricanteIngresado = prompt("Ingrese el fabricante:");
	
		//LOGICA
		switch(tipoIngresado){
			case "ALCOHOL":
				contadorComprasAlcohol ++;
				acumuladorComprasAlcohol += unidadesIngresadas;
				break;
			case "IAC":
				contadorComprasIac ++;
				acumuladorComprasIac += unidadesIngresadas;
				break;
			case "QUAT":
				contadorComprasQuat ++;
				acumuladorComprasQuat += unidadesIngresadas;
				break;
		}

		switch(categoriaIngresada){
			case "desinfectante":
				acumuladorDesinfectante += unidadesIngresadas;
				break;
			case "bactericida":
				acumuladorBactericida += unidadesIngresadas;
				break;
			case "detergente":
				acumuladorDetergente += unidadesIngresadas;
				if (precioIngresado <= 200){
					acumuladorDetergentesBaratos += unidadesIngresadas;
				}
				break;
		}

		if (precioIngresado > precioMax){
			precioMax = precioIngresado;
			fabricantePrecioMax = fabricanteIngresado;
			categoriaPrecioMax = categoriaIngresada;
		}
		
	
	}

	if (acumuladorDesinfectante > acumuladorBactericida && acumuladorDesinfectante > acumuladorDetergente){
		categoriaConMasUnidades = "Desinfectante";
	}
	else if (acumuladorBactericida > acumuladorDetergente){
		categoriaConMasUnidades = "Bactericida";
	}
	else{
		categoriaConMasUnidades = "Detergente";
	}

	promedioComprasAlcohol = acumuladorComprasAlcohol/contadorComprasAlcohol;
	promedioComprasIac = acumuladorComprasIac/contadorComprasIac;
	promedioComprasQuat = acumuladorComprasQuat/contadorComprasQuat;

	document.write("El promedio de compra de ALCOHOL es de " + promedioComprasAlcohol + " unidades. <br>"); //Informe A
	document.write("El promedio de compra de IAC es de " + promedioComprasIac + " unidades. <br>"); //Informe A
	document.write("El promedio de compra de QUAT es de " + promedioComprasQuat + " unidades. <br>"); //Informe A

	document.write("La categoria con mas unidades es " + categoriaConMasUnidades + ".<br>"); //Informe B

	document.write("La cantidad de detergentes con precios menores a 200 es de " + acumuladorDetergentesBaratos + ".<br>"); //Informe C

	document.write("El producto mas caro fue " + productoPrecioMax + ". Su fabricante fue " + fabricantePrecioMax + " y su categoria fue " + categoriaPrecioMax + ". <br>"); //Informe D

}
