let frutas = ["pera", "fresa", "tuna", "uva", "piña"]
console.log(frutas[4]);

for (let i = 0; i < frutas.length; i++){
    console.log("Fruta:", frutas[i])
}
let totalFrutas = frutas.length
console.log("El total de frutas es: " + totalFrutas);


let Frutas = {"pera":2,"fresa":4,"tuna":1,"uva":3,"piña":2}
console.log(Frutas.uva);

for (let fruta in Frutas){
    console.log("Fruta:", fruta, "=", Frutas[fruta])
}

let acidas = {
    limon: 5,
    naranja: 3,
    piña: 4,
    kiwi: 2,
    uva: 6
}
let dulces = {
    manzana: 4,
    pera: 3,
    mango: 5,
    platano: 2,
    durazno: 6
}
console.log("Frutas acidas:",acidas);
totalAcidas = acidas.limon + acidas.naranja + acidas.piña + acidas.kiwi + acidas.uva
console.log("Acidas = " + totalAcidas);
console.log("Frutas dulces:",dulces);
totalDulces = dulces.manzana + dulces.pera + dulces.mango + dulces.platano + dulces.durazno
console.log("Dulces = " + totalDulces);

for (let fruta in acidas){
    console.log("Fruta acida:", fruta, "=", acidas[fruta])
}
console.log("Frutas Acidas = " + totalAcidas);

for (let fruta in dulces){
    console.log("Fruta dulce:", fruta, "=", dulces[fruta])
}
console.log("Frutas Dulces = " + totalDulces);
