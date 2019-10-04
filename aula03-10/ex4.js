// 1- Crie uma função construtora para Terreno, cada terreno deve ter:
// largura, comprimento, area(largura x comprimento)

function terreno( largura, comprimento){
    this.largura = largura;
    this.comprimento = comprimento;
    this.area = largura*comprimento
}
//  const dados  = new terreno('Terreno1', 27, 30, 0 )
//  console.log(dados)

// 2 crie métodos usando o prototype, eles devem ser:
// - calcularPreco -> que vai ser a area x 1000 reais.
// - mostrarInfos -> que mostrar a area e o preço do terreno.

terreno.prototype.calcularPreco = function(){
    this.preco = this.area*1000 // criar um novo this para preco
}
terreno.prototype.mostrarInfos = function(){// criacao do metodo para depois chama-lo ao longo do codigo em qualquer terreno
    console.log(`A area é ${this.area} e o preco do terreno é R$ ${this.calcularPreco()}`)  
}
// 3 - Crie 5 instancias do terreno, usando o operador new. ex: const t1 = new Terreno(arg1, arg2)
const terreno1 = new terreno (10,20)
const terreno2 = new terreno (20,40)
const terreno3 = new terreno (10,30)
const terreno4 = new terreno (30,20)
const terreno5 = new terreno (10,40)

// 4 - use a função calcular preco para que todas as instancias tenham seus precos. criar o preco
terreno1.calcularPreco()
terreno2.calcularPreco()// definir o preco para cada terreno
terreno3.calcularPreco()
terreno4.calcularPreco()
terreno5.calcularPreco()

// console.log(terreno1)

// 5 - crie uma array vazia chamada terrenos.

const terrenos = []

// 6 - insira as instancias criadas(que os precos já tenham sido calculados) na array terrrenos.
terrenos.push(terreno1,terreno2,terreno3,terreno4,terreno5)

// 7 - Imprima na tela o último terreno da array terrenos.
const ultimoTerreno = terrenos[terrenos.length -1]
console.log(ultimoTerreno)

// 8 - Imprima a area do terceiro item da array terrenos
 console.log(`A area do terreno3 é ${terreno3.area} `)

// 9 - Usando um loop, execute o método mostrarInfos de todos os terrenos.
for (const item of terrenos){
    console.log(item.mostrarInfos())
}

// 10 - Crie uma função que vai receber a array de objetos e vai ordenar a lista do mais barato para o mais caro.
function ordenarTerrenos(arrTerrenos){
    const ordenados = arrTerrenos.sort(function(a,b){
        return a.preco - b.preco
    })
    console.log(ordenados[0], ordenados[ordenados.length -1])
}
ordenarTerrenos(terrenos)


// 11 - Crie uma função que Imprima o mais barato
// 12 - Crie uma função que Imprima o mais caro.
