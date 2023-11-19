// // ENTREGÁVEL
// function Calculadora(numbe1, numbe2, operacoes) {
//     let resultado
//     numbe1 = parseInt(prompt(numbe1))
//     numbe2 = parseInt(prompt(numbe2))
    

//     switch (operacoes) {
//         case "+":
//             resultado = numbe1 + numbe2
//             break;
//         case "-":
//             resultado = numbe1 - numbe2
//             break;
//         case "*":
//             resultado = numbe1 * numbe2
//             break;
//         case "/":
//             resultado = numbe1 / numbe2
//             break;
//         case "e":
//             let marcador = 1
//             resultado = numbe1 * numbe1
//             while (marcador < numbe2 - 1) {
//                 resultado = resultado * numbe1
//                 marcador++
//             }
//             break;
//     }
//     if (resultado == undefined || resultado > 1000000)
//         resultado = "ERRO"

//     return resultado
// }