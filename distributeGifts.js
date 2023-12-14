/**
 * // let counter = 0
  // for (let gift of  packOfGifts ) {
  //   counter = counter + gift.length
  //   console.log(gift);
  // }
  // console.log(counter);

  // let weight = 0 
  // for (let reindeer of reindeers) {
  //   weight = weight + reindeer.length * 2
  // }
  // console.log("weight",weight);


  // return 0
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



export function distributeGifts(packOfGifts, reindeers) {
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

  const weightPackOfGifts = packOfGifts.reduce((total, gift) => {
    return total + gift.length
  }, 0 )
  console.log("gift",weightPackOfGifts);
  const weightReindeers = reindeers.reduce(( total, reindeer) => {
    return total + reindeer.length * 2
  }, 0)
  console.log("reindeer", weightReindeers);
  console.log(weightPackOfGifts > weightReindeers);

  if ( weightPackOfGifts > weightReindeers ) return 0

  return Math.trunc( weightReindeers / weightPackOfGifts)
}
