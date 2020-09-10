const APIurl = "https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products";

function filtroId3 (elemento) {

 if(elemento.id === 3){
 return true;
 }else{
 return false
 }
}

fetch(APIurl)
.then((response)=>{
 console.log(response.status)
 return response.json()
})
.then((dataJSON)=>{
 console.log(dataJSON)

 const resultado = dataJSON.filter(pepito => pepito.id === 3)

 console.log(resultado[0].price)
})