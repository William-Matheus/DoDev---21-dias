// ToDo DoDev
// class ToDo{
//     Texto
//     Prioridade
//     Feito = false
//     constructor(texto, prioridade){
//         this.Texto = texto
//         this.Prioridade = prioridade
//     }
// }

// function CriarToDo(texto, prioridade, toDoArr){
//     let toDoObj = new ToDo(texto, prioridade)
//     if (!toDoArr.some(a => a.Texto == texto))
//         toDoArr.push(toDoObj)
//         return toDoObj
// }

// function AtualizarToDo(textoAntigo,textoNovo, toDoArr){
//     let melhorado = false
//     toDoArr.forEach(todo => { textoAntigo
//         if(todo.Texto == textoAntigo){
//             todo.Texto = textoNovo
//             melhorado = true
//         }
//     })
//     return melhorado
// }

// function ConcluirToDo(toDoArr, texto){
//     let terminado = false
//     toDoArr.forEach(todo => {
//             if (todo.Texto == texto){
//                 if(todo.Feito)
//                 todo.Feito = false
//             else{
//                 todo.Feito = true
//             }
//         }
//     })
//     return terminado
// }

// function ExcluirToDo(toDoArr, texto){
//     let item
//     let excluido = false 
//     toDoArr.forEach(todo => {
//         if (todo.Texto = texto){
//             item = toDoArr.indexOf(todo)
//             excluido = true
//         }
//     })
//     toDoArr.splice(item, 1)
//     return excluido
// }

// function PesquisarToDo(toDoArr, texto){
//     let busca = false
//     toDoArr.forEach(todo => {
//         if (todo.Texto.includes(texto)){
//             busca = true
//         }
//     })
//     return busca
// }

// function OrdenarCrescente(toDoArr){
//     toDoArr.sort((a, b) => a.Prioridade - b.Prioridade)
//     return toDoArr
// }

// function OrdenarDecrescente(toDoArr){
//     toDoArr.sort((a,b)=> b.Prioridade - a.Prioridade)
//     return toDoArr
// }
