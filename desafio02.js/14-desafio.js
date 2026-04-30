//Exercico 2:
//Implemente uma fuç

function mediaAritmetica (arr){
    let soma = 0;
    for (let i = 0; i arr.length; i ++) {
        soma += arr[i]
    }
    return soma /arr.length;
}
console.log(mediaAritmetica([2, 4, 6, 8])); //5
console.log(mediaAritmetica([8, 8, 6, 8])); //7.5


function converterParaMaiuscula(str){
    return str.toUpperCase()
}

console.log(converterParaMaiuscula("olá,mundo!")); //"OLÀ,Mundo!"
console.log(converteParaMaiuscula("javascript é incrivel!")); //"JAVASCRIPT"