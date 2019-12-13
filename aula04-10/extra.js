// use Map, filter, forEach, find e ou Reduce.

// //1
// const numbers = [
//   1,
//   3,
//   4,
//   6,
//   8,
//   9,
//   56,
//   34,
//   23,
//   2,
//   89,
//   101,
//   320,
//   12,
//   13,
//   45,
//   40,
//   43,
//   88
// ]

// // retorne numeros multiplos de 3

// const multiplosde3 = numbers.filter(function(numeros){
//     return numeros % 3 == 0
// })
//  console.log(multiplosde3)

// // retorne numeros multiplos de 3 e de 5

// const multiplosde5 = numbers.filter(function(numeros2){
//     return numeros2 % 5 == 0
// })
//  console.log(`Os multiplos de 3 sao ${multiplosde3} e os multiplos de 5 são ${multiplosde5}`)


// 2
// const palavrinhas = [
//   "bolacha",
//   "biscoito",
//   "bombom",
//   "bala",
//   "abestalhado",
//   "MASSA",
//   "pastilha"
// ]
// // // retorne palavras que tenham menos de 5 letras

// // const resultado = palavrinhas.filter(function(palavras){
// //     return palavras.length <= 5
// // })
// // console.log(`As palavras que tem menos de 5 letras são ${resultado}`)

// //3
// const numbers = [3, 4, 5, 6, 6, 7]
// // // itere pela array modificando todos os items, multiplicando eles por 3.
// const resultado = numbers.map(function(modificado){
//     return modificado * 3
// })
// console.log (`O resultado da multiplicacao por 3 é ${resultado}`)

// // // depois printe quantos numeros são maiores que 10
//  const maiorque10 = resultado.filter(function(maior){
//      return maior > 10
//  })
//  console.log(`Os numeros que são maiores que 10 são ${maiorque10}`)


// // // depois quantos são menores que 10.

// const menorque10 = resultado.filter(function(menor){
//     return menor < 10
// })
// console.log(`O numero que é menor que 10 é ${menorque10}`)
// // // printe o numero menor que 10.


const numbers = [
  1,
  3,
  4,
  6,
  8,
  9,
  56,
  34,
  23,
  2,
  89,
  101,
  320,
  12,
  13,
  45,
  40,
  43,
  88
]
// // calcule o valor total da soma dos items da array numbers
// const valorTotal = numbers.reduce(function(total,num){
//     return total + num
// })
// console.log (`O valor total da soma dos items da array numbers é ${valorTotal}`)
//5 -
const mulheres = [
  {
    user: 234,
    name: "Marcia",
    idade: 40,
    hobbies: ["estudar", "comer", "falar"]
  },
  {
    user: 235,
    name: "Lorena",
    idade: 20,
    hobbies: ["dançar", "assistir tv", "estudar"]
  },
  {
    user: 236,
    name: "Patricia",
    idade: 24,
    hobbies: ["correr", "acampar", "surfar"]
  },
  {
    user: 237,
    name: "Mariana",
    idade: 15,
    hobbies: ["skate", "bicicleta", "break dance"]
  },
  {
    user: 238,
    name: "Isis",
    idade: 34,
    hobbies: ["ler", "estudar", "discutir"]
  },
  {
    user: 239,
    name: "Pietra",
    idade: 23,
    hobbies: ["jogar dominó", "sinuca", "cartas"]
  }
]

// // retore a mulher que tiver o user = 238
// const usuario238 = mulheres.find(function(usuario){
//     return usuario.user == 238
// })

// console.log(`O nome do usuario 238 é ${usuario238.name}`)
// // retorne o nome das mulheres que gostam de estudar

const estudar = mulheres.filter(item => item.hobbies.indexOf("cartas") > -1)
    console.log(estudar)

    estudar.map(item=>{
        console.log(item.name)
    })
