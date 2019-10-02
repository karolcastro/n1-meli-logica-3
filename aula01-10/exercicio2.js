// 2 - Agora inverta o loop e gere números de 25 a 1
// [ [ 25, 24, 23, 22, 21 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 15, 14, 13, 12, 11 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 5, 4, 3, 2, 1 ] ]

const arr = []
let count = 25

for (let i = 0; i < 5; i++) {
  const linha = []
  for (let j = 0; j < 5; j++) {
    linha[j] = count
    count--
  }
  arr[i] = linha
}
console.log(arr)