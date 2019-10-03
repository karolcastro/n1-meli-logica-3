// 1 - Usando um loop, crie uma matriz 5 x 5 cujos elementos são:
// 1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25

//function matriz (linha,col,inicio){ } pode ser usado
const arr = []
let count = 1
for (let i = 0; i < 5; i++) {
  const linha = []// faz a linha
  for (let j = 0; j < 5; j++) {// faz  a coluna
    linha[j] = count
    count++// acrescenta
  }
  arr[i] = linha// array de
}
console.log(arr)