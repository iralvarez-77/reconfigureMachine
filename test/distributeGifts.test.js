import { describe, it, expect } from 'vitest';
/**
Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un límite de peso máximo que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2

Cosas a tener en cuenta:

Las cajas de regalos no se pueden dividir.
Los nombres de los regalos y los renos siempre serán mayores que 0.
 */



function distributeGifts(packOfGifts, reindeers) {
  // const arrOfString = (packOfGifts) => {
  //   for (let gift of packOfGifts) {
  //     if (typeof gift !== 'string') {
  //       return false
  //     } 
  //   }

  //   return true 
  // }

  // if ( !arrOfString(packOfGifts) || !arrOfString(reindeers) ) throw new Error()
	const packOfGiftsArr = Array.isArray(packOfGifts);
	const reindeersArr = Array.isArray(reindeers);

	if (!packOfGiftsArr || !reindeersArr) throw new Error();

	if (
		(packOfGiftsArr && packOfGifts.length === 0) ||
		(reindeersArr && reindeers.length === 0)
	) throw new Error();

  if (!packOfGifts.every((gift) => typeof gift === 'string') || !reindeers.every((reindeer) => typeof reindeer === 'string')) throw new Error()
  



	return 0
}

describe('distributeGifts', () => {
	it('it shoulb be a function', () => {
		expect(typeof distributeGifts).toBe('function');
	});

	it('it should throw an error if two arrays are not passed to it', () => {
		expect(() => distributeGifts('no array')).toThrow();
		expect(() => distributeGifts(2)).toThrow();
		expect(() => distributeGifts(NaN)).toThrow();
		expect(() => distributeGifts([], 'no array')).toThrow();
		expect(() => distributeGifts([])).toThrow();
	});

	it('it should  throw an error if one of two arrays is empty', () => {
		expect(() => distributeGifts([], [])).toThrow();
		expect(() => distributeGifts(['dancer'])).toThrow();
		expect(() => distributeGifts(['dancer'], [])).toThrow();
		expect(() => distributeGifts([], ['dancer'])).toThrow();
	});

	it(' all array´s elements should be strings', () => {
		expect(() => distributeGifts(['o',2, undefined], [2,NaN,'k'])).toThrow()
		// expect(() => distributeGifts(["fs", "gf"],["fr"])).toThrow()
		expect(() => distributeGifts(["fs", "gf"],[])).toThrow()
		expect(() => distributeGifts(["fs", "gf"],[2,3])).toThrow()
	})

	it(' it should return a number', () => {
		expect(typeof distributeGifts(["fs", "gf"],["fr"])).toBe('number')
	});
});
