 const cacaPalavras = [
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "l", "e", "f", "a", "n", "t", "e"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["c", "a", "s", "a", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "e", "d", "e", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"]
]

const palavras = ["elefante", "casa", "rede"]

for (let i = 0; i < cacaPalavras.length; i++){
    cacaPalavras[i] = cacaPalavras[i].join("")// junta as palavras 

    for (let j = 0; j < palavras.length; j++){
        if (cacaPalavras[i].indexOf(palavras[j]) > -1){// verifica se a palavra esta dentro do cacaPalavra
            console.log( `A palavra ${palavras[j]} esta na lina ${i + 1} e comeca na coluna ${ cacaPalavras[i].indexOf(palavras[j]) + 1}`) // colocar crase
        }
}
}

// ache as palavras da array palavras na array cacaPalavras e diga em qual linha e em qual coluna
// elas estao.
// Ex: a palavra elefante está na linha 4 e começa na coluna 3.