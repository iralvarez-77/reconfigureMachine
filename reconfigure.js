
/*
Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

*/

export const canReconfigure = (from, to) => {
	if (typeof from !== 'string' || typeof to !== 'string') throw new Error();
	if (from.length !== to.length) return false;

	const charactersFrom = {};
	const charactersTo = {};
	for (let i = 0; i < from.length; i++) {
		let charFrom = from[i];
		let charTo = to[i];

    //verificar que siga el orden
		if ( charFrom in charactersFrom && charactersFrom[charFrom] !== charTo) return false
    // Verifica que el segundo parámetro no tenga caracteres repetidos sin tenerlos el primer parámetro
		if ( charTo in charactersTo && charactersTo[charTo] !== charFrom ) return false

		charactersFrom[charFrom] = charTo;
		charactersTo[charTo] = charFrom;
	}
	return true;
};