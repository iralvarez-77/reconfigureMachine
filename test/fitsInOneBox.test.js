import { describe, it, expect}from 'vitest'
/**
  Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo. Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, anchura y altura.

Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar todas las cajas en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así sucesivamente).

Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una longitud de 2, una anchura de 3 y una altura de 2.

Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2. Veamos unos ejemplos:

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]) // true
En el ejemplo anterior, la caja más pequeña entra en la caja más grande. Por lo tanto, es posible empaquetar todas las cajas en una sola. Ahora veamos un caso que no:

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

fitsInOneBox(boxes) // false
En el ejemplo anterior, la caja más pequeña entra en la caja del medio, pero la caja del medio no entra en la caja más grande. Por lo tanto, no es posible empaquetar todas las cajas en una sola.

Ten en cuenta que las cajas pueden no venir en orden:

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

fitsInOneBox(boxes) // true
En el ejemplo anterior, la primer caja cabe en la tercera, y la tercera en la segunda. Por lo tanto, es posible empaquetar todas las cajas en una sola.

Cosas a tener en cuenta:

Las cajas no se pueden rotar ya que los elfos nos han dicho que la máquina no está preparada.
Las cajas pueden venir desordenadas de tamaño.
Las cajas no son siempre cuadradas, pueden ser rectangulares.
 */

function fitsInOneBox(boxes) {
  
  console.log('boxes', boxes);
  if ( !(boxes instanceof Array) || boxes.length === 0 ) throw new Error()

  for ( let box of boxes ) {
    if ( typeof box !== 'object' || box instanceof Array ){
      console.log('no es un array completo de objetos');
      throw new Error('it should be an objects´ array')
    }
  }
  console.log('es un array completo de objetos');


  return false
}

describe ('fitsInOneBox', () => {
  it ('fitsInOneBox should be a funtion', ()=> {
    expect(typeof fitsInOneBox).toBe('function')
  }),

  it ('fitsInOneBox should trhow an error if parameter is not an array', ()=> {
    expect(() => fitsInOneBox('')).toThrow()
  })

  it ('fitsInOneBox should return a boolean', ()=> {
    expect(typeof fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ])).toBe('boolean')
  })

  it ('fitsInOneBox should trhow an error when all items of array´s parameter are not objects', ()=> {
    expect(() => fitsInOneBox(['a', 'b'])).toThrow()
    expect(() => fitsInOneBox(['a', []])).toThrow()
  })

  it ('fitsInOneBox should trhow an error if some of parameters are an array', ()=> {
    expect(() => fitsInOneBox([{}, []])).toThrow()
  })

  it ('fitsInOneBox should throw an error when array parameter is empty', ()=> {
    expect(() => fitsInOneBox([])).toThrow()
  })

  // it ('fitsInOneBox should trhow an error if parameter is a number', ()=> {
  //   expect(() => fitsInOneBox(2)).toThrow()
  // })

  // it ('fitsInOneBox should trhow an error if parameter is NaN', ()=> {
  //   expect(() => fitsInOneBox(NaN)).toThrow()
  // })
})