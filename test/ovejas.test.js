import {describe, it, expect} from 'vitest'
import { contarOvejas } from '../ovejas'

/**
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre. No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.

  for ( let i = 0; i < ovejas.length; i++) {
    let na = ovejas[i].name 
    
    if ( ovejas[i].color === 'rojo' && expReg.test(na) )  {
      newOvejas.push(ovejas[i])
    }
  }
 */

describe.skip('contarOveas', () => {

  it('it should be a function', () => {
    expect( typeof contarOvejas).toBe('function')
  })

  it('it should throw an error if an array is not passed to it', () => {
    expect(() => contarOvejas('no array')).toThrow()
    expect(() => contarOvejas(2)).toThrow()
    expect(() => contarOvejas(NaN)).toThrow()
    expect(() => contarOvejas(undefined)).toThrow()
  })

  it('it should return an array ', () => {
    const result = contarOvejas([
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' }
  ])
    expect( Array.isArray(result) ).toBe(true)
  })
})