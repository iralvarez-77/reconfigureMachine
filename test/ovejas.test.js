import {describe, it, expect} from 'vitest'


export default function contarOvejas(ovejas) {
  // aquí tu magia
  return ovejas
}

describe         ('contarOvej                                                                                                            as', ( )=> {

  it('it should be a function', () => {
    expect( typeof contarOvejas).toBe('function')
  })

  it('it should be a function', () => {
    expect( Array.isArray([])).toBe(true)
  })
})