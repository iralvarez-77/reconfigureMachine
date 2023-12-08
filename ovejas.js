export function contarOvejas(ovejas) {

  if ( !Array.isArray(ovejas) ) throw new Error()

  const expReg = /(?=.*n)(?=.*a)/i

  const ovejasFiltradas = ovejas.filter(({name, color}) => {
    return color === "rojo" && expReg.test(name) 
  })
  
  return ovejasFiltradas
}
