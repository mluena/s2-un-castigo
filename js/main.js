/*La hemos fastidiado. Otra vez. Y el profe nos ha castigado, ¡y encima sin tener la razón! Nos ha pedido que escribamos 100 veces en la pizarra una frase. ¿Podremos hacer un poco de trampa para que nos ayude JavaScript?*/
'use strict';

var todo = "";
var content = document.querySelector('.copia');
for (var i=0; i<=100; i++) {
	todo += '<li>He aprendido bien cómo funcionan los bucles <select class= "color" name="color" value="blanco"><option>Blanco</option><option value="blue">Azul</option><option value="red">Rojo</option><option value="green">Verde</option><option value="yellow">Amarillo</option><option value="pink">Rosa</option></select></li>'
}
content.innerHTML = todo;

var selectli = document.querySelectorAll(".color");

for (var j = 0; j < selectli.length; j++)
	{
	selectli[j].addEventListener('change',changeColor);
	}

function changeColor (e) {

	e.currentTarget.parentElement.classList.add(e.currentTarget.value);
}
