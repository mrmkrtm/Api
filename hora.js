
function devolverHora(){
	
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	var reloj = hour + " : " +  minute + " : " + second;

	return reloj;

}; 

/*
const github = require('')

function contarEstrellas(){


}*/
