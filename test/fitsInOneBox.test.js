import { describe, it, expect } from 'vitest';
import { fitsInOneBox } from '../fitsInOneBox';

describe('fitsInOneBox', () => {
	it('fitsInOneBox should be a funtion', () => {
		expect(typeof fitsInOneBox).toBe('function');
	}),
		it('fitsInOneBox should trhow an error if parameter is not an array', () => {
			expect(() => fitsInOneBox('')).toThrow();
		});

	it('fitsInOneBox should return a boolean', () => {
		expect(
			typeof fitsInOneBox([
				{ l: 1, w: 1, h: 1 },
				{ l: 2, w: 2, h: 2 },
			])
		).toBe('boolean');
	});

	it('fitsInOneBox should trhow an error when all items of array´s parameter are not objects', () => {
		expect(() => fitsInOneBox(['a', 'b'])).toThrow();
		expect(() => fitsInOneBox(['a', []])).toThrow();
	});

	it('fitsInOneBox should trhow an error if some of parameters are an array', () => {
		expect(() => fitsInOneBox([{}, []])).toThrow();
	});

	it('fitsInOneBox should throw an error when array parameter is empty', () => {
		expect(() => fitsInOneBox([])).toThrow();
	});

	it('fitsInOneBox should throw an error when array parameter has only one element.', () => {
		expect(() => fitsInOneBox([{}])).toThrow();
	});

	it('it should return false , cuando la altura de la caja menor sea > a la altura de la caja mayor', () => {
		const result = fitsInOneBox([
			{ l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 }
		]);

		expect(result).toBe(false);
	});

	// it('prueba false', () => {
	//   const result = fitsInOneBox([
	//     { l: 1, w: 1, h: 1 },
	//     { l: 2, w: 3, h: 2 }
	//   ]);

	// expect(result).toBe(false);
	// });

	// it ('fitsInOneBox should trhow an error if parameter is a number', ()=> {
	//   expect(() => fitsInOneBox(2)).toThrow()
	// })

	// it ('fitsInOneBox should trhow an error if parameter is NaN', ()=> {
	//   expect(() => fitsInOneBox(NaN)).toThrow()
	// })
});
