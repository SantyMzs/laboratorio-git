
function puedeRegistrarse(edad){
    if (Number.isInteger(edad) && edad >= 18){
        return true
    }

    return false
}

console.log(puedeRegistrarse(20));
console.log(puedeRegistrarse(16));
console.log(puedeRegistrarse(-5));
console.log(puedeRegistrarse("18"));