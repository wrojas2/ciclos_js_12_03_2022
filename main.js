let data = new Array(5).fill(null);
Object.preventExtensions(data);
data.fill("William", 4);

console.log("PRIMER CASO") 
data.forEach(function(element){  
    console.log(element) 
 });

 lista = {
    nombre: "WILLIAM",
    apellido: "ROJAS"
 }
 console.log(" ") 
 console.log("SEGUNDO CASO") 
 // object.Keys permite mostrar los nombres de las variables
 // object.values permite mostrar el valor de las variables
 // object.entries
 // V es el valor, i es el indice y clone clona el array
 Object.entries(lista).forEach(function(v,i,clone){
     console.log(clone);      
 });
console.log(" ") 
console.log("TERCER CASO - PROTOTIPO FORECH") 
addEventListener("submit", function(e){
   Array.from(e.target).forEach(element=>{
       if(element.nodeName != "BUTTON"){
           console.log(element.value);
       }
       else{
           console.log(element.dataset.envio);
       }       
    })
    e.preventDefault();
})

 
 
