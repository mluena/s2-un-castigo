/*La hemos fastidiado. Otra vez. Y el profe nos ha castigado, ¡y encima sin tener la razón! Nos ha pedido que escribamos 100 veces en la pizarra una frase. ¿Podremos hacer un poco de trampa para que nos ayude JavaScript?*/
'use strict';

for (var i=0; i<=100; i++) {

	var content = document.querySelector('.copia');
	content.innerHTML += '<li>Viva JavaScript</li>'
}
