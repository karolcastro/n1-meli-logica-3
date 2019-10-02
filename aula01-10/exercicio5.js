// 5 - Agora recebemos, alguns valores em string. Porém a nossa tabela no banco só aceita
// valores lowercase. Crie uma função que checa em uma array bidimensional se todas as strings
// estão obedecendo as regras da tabela. E caso nao estejam, modifique a string para que possam ser
// salvas no banco.
const dados = [
  ["Antonia Maria", "ar@gol.com", "Engenheira"],
  ["Joana Maranhão", "ar@gol.com", "Engenheira de software"],
  ["Juliana Paes", "argh@gol.com", "Advogada"],
  ["mariana DA SILVA", "mariana@gmail.com", "MEDICA"],
  ["MARINA BATISTA", "marina@gol.com", "professora"],
  ["Antonia Maria", "ari@gol.com", "cientista"]
]

let array =[]
for (let i = 0; i < dados.length; i++) {//linhas
    const linha =[]
    for(let j = 0; j < 3; j++){//  colunas
    
    linha [j] = dados[i][j].toLowerCase()// ficar minuscula
}
array[i] = linha
}
console.log(array);
