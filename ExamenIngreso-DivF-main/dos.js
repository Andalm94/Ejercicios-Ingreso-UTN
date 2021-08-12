function mostrar()
{
  let nombreIngresado;
  let situacionLaboralIngresada;
  let cantidadMateriasIngresada;
  let sexoIngresado;
  let notaPromedioIngresada;
  let edadIngresada;

  let promedioMax = 0;
  let nombrePromedioMax;

  let soloEstudianteEdadMax = 0;
  let nombreEstudianteEdadMax = 0;

  let contadorNotasTrabajando = 0;
  let contadorNotasBuscando = 0;
  let contadorNotasSoloEstudiante = 0;
  let acumuladorNotasTrabajando = 0;
  let acumuladorNotasBuscando = 0;
  let acumuladorNotasSoloEstudiante = 0;
  let promedioNotasTrabajando = 0;
  let promedioNotasBuscando = 0;
  let promedioNotasSoloEstudiante = 0;

  let materiasMin = 8;
  let nombreMateriasMin;
  let edadMateriasMin = 0;


  let respuesta = "si";
  while(respuesta == "si"){
    //INGRESO DE DATOS Y VALIDACION

    nombreIngresado = prompt("Ingrese el nombre del alumno:");

    do{
      situacionLaboralIngresada = prompt("Ingrese la situacion laboral del alumno:");
    }while(situacionLaboralIngresada != "buscando" && situacionLaboralIngresada != "trabajando" && situacionLaboralIngresada != "solo estudiante");

    do{
      cantidadMateriasIngresada = parseInt(prompt("Ingrese la cantidad de materias:"));
    }while(cantidadMateriasIngresada < 1 || cantidadMateriasIngresada > 7);

    do{
      sexoIngresado = prompt("Ingrese el sexo del alumno:");
    }while(sexoIngresado != "femenino" && sexoIngresado != "masculino" && sexoIngresado != "no binario");

    do{
      notaPromedioIngresada = parseFloat(prompt("Ingrese la nota promedio del alumno:"));
    }while(notaPromedioIngresada < 1 || notaPromedioIngresada > 10);
  
    do{
      edadIngresada = parseInt(prompt("Ingrese la edad del alumno:"));
    }while (edadIngresada < 18 || edadIngresada > 100);

  
    if (situacionLaboralIngresada == "trabajando" || situacionLaboralIngresada == "buscando"){
      if(notaPromedioIngresada > promedioMax){
        promedioMax = notaPromedioIngresada;
        nombrePromedioMax = nombreIngresado;
      }
    }

    switch(situacionLaboralIngresada){
      case "trabajando":
        contadorNotasTrabajando ++;
        acumuladorNotasTrabajando += notaPromedioIngresada;
        break;
      case "buscando":
        if(cantidadMateriasIngresada < materiasMin){
          materiasMin = cantidadMateriasIngresada;
          nombreMateriasMin = nombreIngresado;
          edadMateriasMin = edadIngresada;
        }
        contadorNotasBuscando ++;
        acumuladorNotasBuscando += notaPromedioIngresada;
        break;
      default:
        if(edadIngresada > soloEstudianteEdadMax){
          soloEstudianteEdadMax = edadIngresada;
          nombreEstudianteEdadMax = nombreIngresado;
        }
        contadorNotasSoloEstudiante ++;
        acumuladorNotasSoloEstudiante += notaPromedioIngresada;
        break;
    }
  
  
    respuesta = prompt("¿Desea seguir cargando alumnos?");
  }

  promedioNotasTrabajando = acumuladorNotasTrabajando / contadorNotasTrabajando;
  promedioNotasBuscando = acumuladorNotasBuscando / contadorNotasBuscando;
  promedioNotasSoloEstudiante = acumuladorNotasSoloEstudiante / contadorNotasSoloEstudiante;

  document.write("El nombre del alumno que está trabajando o buscando trabajo con mejor promedio es " + nombrePromedioMax + "</br>"); //A
  
  document.write("El nombre del alumno mas viejo que solo es estudiante es " + nombreEstudianteEdadMax + "</br>"); //B

  document.write("El promedio de notas de quienes estan trabajando es " + promedioNotasTrabajando + ".</br>"); //C
  document.write("El promedio de notas de quienes estan buscando trabajo es " + promedioNotasBuscando + ".</br>"); //C
  document.write("El promedio de notas de quienes solo son estudiantes es " + promedioNotasSoloEstudiante + ".</br>"); //C

  document.write("El nombre del alumno que cursa menos materias y está buscando trabajo es " + nombreMateriasMin + " y tiene" + edadMateriasMin + " años.</br>"); //D
}
