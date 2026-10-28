function presentar(nombre){
    if(!nombre.trim()){
        return "Nombre no valido";
    }

    return `hola, ${nombre}`;
}

console.log(presentar("Ana"));