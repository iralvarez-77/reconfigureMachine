import { describe, it, expect } from 'vitest';
import  { distributeGifts } from '../distributeGifts'

describe.skip('distributeGifts', () => {
	it('it shoulb be a function', () => {
		expect(typeof distributeGifts).toBe('function');
	});

	it('it should throw an error if two arrays are not passed to it', () => {
		expect(() => distributeGifts('no array')).toThrow();
		expect(() => distributeGifts(2)).toThrow();
		expect(() => distributeGifts(NaN)).toThrow();
		expect(() => distributeGifts([], 'no array')).toThrow();
		expect(() => distributeGifts([])).toThrow();
		expect(() => distributeGifts()).toThrow();
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
		expect(typeof distributeGifts(['a', 'b', 'c'], ['d', 'e'])).toBe('number')
		
	});

	it(' it should return 0 when the gifts greater than reeinder ', () => {
		expect(distributeGifts(['videogames', 'console'], ['midu'])).toBe(0)
    // expect(distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])).toBe(5)
	});
});
