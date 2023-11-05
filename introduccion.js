

let miNombre = "felipe"

let miApellido = "avella piña"

let miEdad = 22

let miMascota = "kira"

let edadMascota = 5

console.log("EJERCICIO 6")

console.log(miNombre, miApellido, miEdad, miMascota, edadMascota)

console.log("EJERCICIO 7")

let nombreCompleto = miNombre + " " + miApellido
console.log(nombreCompleto)

console.log("EJERCICIO 8")

let textoPresentacion = {
    miNombre,
    miApellido,
    miEdad,
    miMascota,
    edadMascota
}
console.log(textoPresentacion)

console.log("EJERCICIO 9")

let operaciones = {
    sumaEdades: miEdad + edadMascota,
    restaEdades: miEdad - edadMascota,
    productoEdades: miEdad * edadMascota,
    divisionEdades: miEdad / edadMascota
}
console.log(operaciones)

console.log("EJERCICIO 10")

let Minombre = prompt("Ingrese nombre")
let Miapellido = prompt("Ingrese apellido")
let Miedad = prompt("Ingrese edad")
let Mimascota = prompt("Ingrese nombre de mascota")
let Edadmascota = prompt("Ingrese edad de mascota")

console.log(Minombre, " ", Miapellido, " ", Miedad, " ", Mimascota, " ", Edadmascota)

let operaciones2 = {
    sumaEdades: Miedad + Edadmascota,
    restaEdades: Miedad - Edadmascota,
    productoEdades: Miedad * Edadmascota,
    divisionEdades: Miedad / Edadmascota
}
console.log(operaciones2)

console.log("EJERCICIO 11")

let alumno = {
    nombre : 'felipe',
    apellido : 'avella',
    curso : 'JavaScript',
    nota : 4.9,
    promedio : 4.1
}
console.table(alumno)

console.log("EJERCICIO 12")

let mascota = {
    nombre : 'kira',
    raza : 'pitbull',
    edad : 4,
    color : 'barzino',
    operada : true
}
console.table(mascota);

console.log("EJERCICIO 13")

const frutas =[ "manzana", "banano", "uvas", "durazno", "melon"]
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

console.log("EJERCICIO 14")

let numeros =[ 1, 2, 3, 4, 5]
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

console.log("EJERCICIO 15")

let familia =[ "madre", "padre", "hijo", "nietos", "abuelos"]
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

console.log("EJERCICIO 16")

let textoAleatorio = frutas[1] + numeros[3] + familia[4]
console.log(textoAleatorio)

console.log("EJERCICIO 17")


let edadCompañero = prompt("Ingrese la edad del compañero")
let edadesiguales = Miedad == edadCompañero
let soyMayor = Miedad > edadCompañero
let soymenor = Miedad < edadCompañero
console.log("a. Mi edad es igual a la de mi compañero:"+edadesiguales)
console.log("b. Mi edad es mayor a la de mi compañero:"+soyMayor)
console.log("c. Mi edad es menor a la de mi compañero:"+soymenor)

console.log("EJERCICIO 18")

let comparacion = Miedad > 18

console.log("soy mayor de edad: "+ comparacion +", su edad es: "+ Miedad)

console.log("EJERCICIO 19")

let altura = prompt("Ingrese altura")
if(Miedad > 6 && altura > 120){

    console.log("Puede subir a la atracción," +" su edad es: "+Miedad+", su altura: "+altura)

}else{
    console.log("No Puede subir a la atracción " + Miedad + altura)
}

console.log("EJERCICIO 20")
let vip = "vip" 
let pase = prompt("que tipo de pase tiene vip, normal O limitado")
let ingreso = vip = vip
let saldo = prompt("Total de saldo")
let Total = saldo>1000

if(ingreso && Total ){
    console.log("La persona puede pasar,"+" su tipo de pase es: "+pase+", su saldo es: "+saldo)
}else{
    console.log("La persona no puede pasar, "+pase+saldo)
}

