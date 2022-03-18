
// let data = new Array(5).fill(null);
// Object.preventExtensions(data);
// data.fill("Miguel", 4);
function saludar() {
    return "Hola Como estas";
}
let data = {
    nombre: "William",
    apellido : "Rojas",
    edad: 45,
    saludar
}

let datos = Object.entries(data).map(function(elemt){
    let obj = {};
    if(typeof(elemt[1]) == "function"){
        obj.saludar = data.saludar();
    }else{
        if(elemt[0] == "nombre"){
            obj[elemt[0]] = `${elemt[1].toUpperCase()} Carlos`;
        }else{
            obj[elemt[0]] = elemt[1];
        }
    }
    return obj;
})

console.log(data);
console.log(Object.assign({}, ...datos) );

