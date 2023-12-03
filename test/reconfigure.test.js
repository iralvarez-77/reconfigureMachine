import { describe, it, expect } from 'vitest';

/*
Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

*/
const canReconfigure = (from, to) => {
	if (typeof from !== 'string' || typeof to !== 'string') throw new Error();
	if (from.length !== to.length) return false;

	const charactersRepeated = {};
	for (let character of to) {
		if (character in charactersRepeated) {
			return false;
		} else {
			charactersRepeated[character] = 1;
		}
	}
};

describe('ReconfigureMachine', () => {
	it('it should be a function', () => {
		expect(typeof canReconfigure).toBe('function');
	});

	it('it should be throw an error if parameters are not a string', () => {
		expect(() => canReconfigure(2)).toThrow();
		expect(() => canReconfigure(NaN)).toThrow();
		// expect( () => canReconfigure()).toThrow()
		expect(() => canReconfigure(undefined)).toThrow();
		// expect( () => canReconfigure("2")).toThrow()
		expect(() => canReconfigure('2', 2)).toThrow();
		expect(() => canReconfigure(2, '2')).toThrow();
	});

	it('it should be FALSE if parameters.lenght are not the same', () => {
		expect(canReconfigure('AA', 'MID')).toBe(false);
	});

	it('it should be FALSE if the second parameter has repeating characters', () => {
		expect(canReconfigure('CON', 'JUU')).toBe(false);
	});

	// it ('it should be TRUE if the second parameter has repeating characters and respect the order', () => {
	//   expect(canReconfigure('MII', 'QII')).toBe(true)
	// })

	// it ('it should be FALSE if the second parameter has repeating characters and does not respect the order', () => {
	//   expect(canReconfigure('MII', 'QII')).toBe(false)
	// })
});
