let data = new Array(5).fill(null);
Object.preventExtensions(data);
data[0] = "Miguel";
data[1] = "Oscar";
data[2] = "Juan";
data[4] = "William";
console.log(data);
console.log(``);
console.log(`Indice`);
for (let i in data){
    console.log(`For in: ${i}.`);
}
console.log(``);
console.log(`Valor`);
for (let v of data){
    console.log(`For of: ${v}`);
}
console.log(``);
console.log(`Indice y Valor`);
for (let [indice,valor] of Object.entries(data)) {
    console.log(` Object.entries: ${indice} = ${valor}`);
}
    
