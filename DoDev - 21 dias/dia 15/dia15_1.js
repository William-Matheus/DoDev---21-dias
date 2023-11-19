//rrays e Funções
// let arrayA = [34, 15, 87, 42, 59, 28, 6, 75, 19, 11];
// let arrayB = [98, 23, 5, 66, 40, 21, 92, 17, 65, 50];
// let posicao = 0;
// let numerosEmComum = []
// recebeArray(arrayA, arrayB);

// function recebeArray(arrayA, arrayB){
//     for(let a = 0; a < 4; a++){
//         let recebeArrayA = parseInt(prompt(`Digite um número ${a + 1}º`));
//         let recebeArrayB = parseInt(prompt(`Digite outro número ${a + 1}º:`));

//         if (recebeArrayA == arrayA && recebeArrayB == arrayB){
//             numerosEmComum[posicao] = recebeArray
//         }
//     }
// }

// console.log(`Números em comum: ${numerosEmComum}`)

let arrayA = [34, 15, 87, 5, 59, 28, 6, 75, 40, 17];
let arrayB = [28, 34, 5, 66, 40, 15, 92, 17, 65, 50];


recebeArray(arrayA, arrayB);

function recebeArray(arrayUm, arrayDois){
    let numerosEmComum = []
    let posicaoNumero = 0;

    for(let x = 0; x < arrayUm.length; x++){

        for (let y = 0; y < arrayDois.length; y++){
            if (arrayUm[x] == arrayDois[y]){
                numerosEmComum[posicaoNumero] = arrayUm[x]
                posicaoNumero++
                y = arrayDois.length
            }
        }
    }
    return numerosEmComum

    
}

console.log(`Números em comum: ${recebeArray(arrayA, arrayB)}`)
