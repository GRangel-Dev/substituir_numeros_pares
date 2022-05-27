// TROQUE TODOS OS ELEMENTOS PARES E DIFERENTES DE ZERO DE UM ARRAY PELO NÚMERO 0. SE O ARRAY FOR VAZIO, RETORNE -1.
// EXEMPLO: INPUT -> [1,3,4,6,80,33,23,90]
//         OUTPUT -> [1,3,0,0,0,33,23,0]
//          INPUT -> []
//         OUTPUT -> -1

function substituiPares(array){
     if(!array.length) return -1;

  for(let i = 0; i < array.length; i++){
       if(array[i] === 0){
            console.log('Voce já é zero!');

       }else if(array[i] % 2 === 0){
          console.log(`Subtituindo ${array[i]} por 0...`)
       }
  } 
  return array;  
}
let arr = [1,3,4,6,80,33,23,90];
console.log(substituiPares([]));
console.log("-----------------------");
console.log(substituiPares(arr));

