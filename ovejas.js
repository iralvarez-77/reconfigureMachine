// export function contarOvejas(ovejas) {

//   if ( !Array.isArray(ovejas) ) throw new Error()

//   const expReg = /(?=.*n)(?=.*a)/i

//   const ovejasFiltradas = ovejas.filter(({name, color}) => {
//     return color === "rojo" && expReg.test(name) 
//   })
  
//   return ovejasFiltradas
// }

const packOfGifts = ["book", "123", "ball"]

const ArrOfString = (packOfGifts) => {

  for (let gift of packOfGifts) {
    if (typeof gift !== 'string') {
      return false

    } 
  }
  return true
}

console.log("fn", ArrOfString(packOfGifts));


// const prueba = []
// console.log(Array.isArray(prueba));
// console.log(prueba.length === 0);