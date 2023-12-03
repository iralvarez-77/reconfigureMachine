// // const texto = 'lkkiihtl'


// // for ( let i = 0 ; i < texto.length ; i++) {
// //   console.log(texto[i])
// //   console.log([i])
// // }




// // const characters = texto.forEach((element, index) => {
// //   console.log(element);
// //   console.log(index);
// // });

// // console.log(characters);


// // const characteresRepeated = {};

// // for (let character of characters) {
// //   if (character in characteresRepeated) {
// //     characteresRepeated[character]++;
// //     // const claves = Object.keys(characteresRepeated)
// //     // console.log(claves);
// //   } else {
// //     characteresRepeated[character] = 1;
// //   }
// // }

// // console.log(characteresRepeated);


// // console.log(character);
// // // console.log(characteresRepeated);
// // let characters = 'lkkiihtl';
// // const characteresRepeated = {};

// // for (let character in characters) {
// //   console.log(character);

// // }

// // console.log(characters.indexOf());


// const miObjeto = {};

// function agregarPropiedad(objeto, clave, valor) {
//   if (objeto.hasOwnProperty(clave)) {
//     // Si la clave ya existe, agregamos el nuevo valor al array existente
//     objeto[clave].push(valor);
//   } else {
//     // Si la clave no existe, creamos un nuevo array con el primer valor
//     objeto[clave] = [valor];
//   }
// }

// // Ejemplos de uso:
// agregarPropiedad(miObjeto, 'frutas', 'manzana');
// agregarPropiedad(miObjeto, 'frutas', 'plátano');
// agregarPropiedad(miObjeto, 'frutas', 'manzana');
// agregarPropiedad(miObjeto, 'colores', 'rojo');
// agregarPropiedad(miObjeto, 'colores', 'verde');

// console.log(miObjeto);


// const canReconfigure = (from) =>  {

//   const characteresRepeated = {}

//   for ( let i = 0 ; i < from.length ; i++) {
//     let clave = from[i]
//     let valor = i
//     if ( clave in characteresRepeated ) {
//       characteresRepeated[clave].push(valor)
//       // return false
//       console.log("probando", characteresRepeated[clave]);
//     } else {
//       characteresRepeated[clave] = [valor]
//     }
//   }

//   console.log("aqui", characteresRepeated);
// }

// canReconfigure('kldykd')
// // console.log(canReconfigure('kldy'));



function canReconfigure(from, to) {

const charactersRepeated = {};
	for (let character of to) {
		if (character in charactersRepeated) {
      console.log("termina");
			return false;
		} else {
			charactersRepeated[character] = 1;
		}
	}
  //   mapping[clave] = valor

  console.log("result", charactersRepeated);
  }

// Ejemplo de uso:
const machineConfig1 = 'abma';
const machineConfig2 = 'xbba';

const result = canReconfigure(machineConfig1, machineConfig2);
//console.log(result);  // Output: true
