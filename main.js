
numero0Al10:
for (let i = 0; i<10;i++){  
    if (i==2 || i== 6){ 
       console.log("Numero Ingnorado");
       continue numero0Al10;
    }
    console.log(i);
}

multiplicando:
for (let i = 1; i<=10;i++){ 
    console.log(`%c Tabla del ${i}`,"color:red;")
    multiplicador:
    for (let x = 1; x<=10; x++){
        let resultado = i*x;
        if (resultado%3==0){
            console.log(`${i} x ${x} = ${i*x} = PAREMOS`);
            continue multiplicando;
        } 
        console.log(`${i} x ${x} = ${resultado}`);
    }  
   
}