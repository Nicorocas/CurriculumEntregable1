function ocultar(esto)
{
	vista=document.getElementById(esto).style.display;
	if (vista=='none')
		vista='block';
	else
		vista='none';

	document.getElementById(esto).style.display = vista;
	
}


// /// funcion para escribir scripts uno tras otro aun no funciona 
// function writing (str){
// 		document.getElementById(str).style.display="none"
		
// 		var ArrayStr = str.split("");
// 		var printStr = setInterval((function(){
// 		document.getElementById(str) += ArrayStr[i]
// 		i++;
// 		if (i === ArrayStr.length)
// 			clearInterval(printStr)
			
// 		}),500)
// 		document.getElementById(str).style.display="block"
// }

// // otra idea para funcion escribiendo de youtube,


// function escribir(param) {
// 	document.getElementById(param).style.display="block"
// 	var letra = 0
// 	var texto = param
// 	if (letra <texto.lengt){
// 		document.getElementById('texto').innerHTML += texto.charAt(letra);
// 		letra++;
// 		setTimeout(typing,70);
// 	}
	
// }

// esta si que si jeje, al salir de la pagina que aparezca un alert de despedida
/// la alerta en español
const castellano = alert('Bienvenido/Welcome');
/// la alerta en ingles
