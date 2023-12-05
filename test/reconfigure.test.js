import { describe, it, expect } from 'vitest';

describe.skip('ReconfigureMachine', () => {
	it('it should be a function', () => {
		expect(typeof canReconfigure).toBe('function');
	});

	it('it should be throw an error if parameters are not a string', () => {
		expect(() => canReconfigure(2)).toThrow();
		expect(() => canReconfigure(NaN)).toThrow();
		expect(() => canReconfigure(undefined)).toThrow();
		expect(() => canReconfigure('2', 2)).toThrow();
		expect(() => canReconfigure(2, '2')).toThrow();
		// expect( () => canReconfigure()).toThrow()
		// expect( () => canReconfigure("2")).toThrow()
	});

	it('my function should be return a boolean', () => {
		expect(typeof canReconfigure('acd', 'xyz')).toBe('boolean');
	});

	it('it should be FALSE if parameters.lenght are not the same', () => {
		expect(canReconfigure('AA', 'MID')).toBe(false);
	});

	it('it should be TRUE if the second parameter has repeating charactersFrom and respect the order', () => {
		expect(canReconfigure('XBOX', 'XOBX')).toBe(true);
		// expect(canReconfigure('MMM', 'MID')).toBe(true);
		// expect(canReconfigure('XBOX', 'XXBO')).toBe(true);
	});

	it('it should be FALSE if the second parameter has repeating charactersFrom', () => {
		expect(canReconfigure('CON', 'JUU')).toBe(false);
	});
});
