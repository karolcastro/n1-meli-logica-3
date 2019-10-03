// 3 - Retorne o valor mais alto das somas entre o total de valors por linha, de uma array 4x4.
//const arr4x4 = [[23, 56, 9, 0], [8, 24, 50, 5], [9, 10, 40, 7], [9, 48, 15, 2]]
// exemplo:
// 4 4 4 4
// 5 6 6 7
// 9 9 9 9
// Resultado esperado -> 36

// const arr4x4 = [[23, 56, 9, 0], [8, 24, 50, 5], [9, 10, 40, 7], [9, 48, 15, 2]]
// let soma =[]
// for (let i = 0; i < arr4x4.length; i++) {//looping
//     let linha = 0// definiu linha com formato 0
//     for (let j = 0; j < arr4x4.length; j++) {//looping
//      linha += arr4x4 [i][j]
//     }
//     soma.push(linha)
//     console.log(soma)
//   }
//   console.log(Math.max(...soma))
  

const arr4x4 = [[23, 56, 9, 0], [8, 24, 50, 5], [9, 10, 40, 7], [9, 48, 15, 2]]
let arr =[]
for (let i = 0; i < arr4x4.length; i++) {//looping
    let total = arr4x4[i].reduce(function(a,b)// definiu linha com formato 0
}return a + b
    }
    arr[i]= total
  }
  console.log(Math.max(...arr)
