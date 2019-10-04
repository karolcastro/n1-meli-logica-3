//9 Faça uma função construtora de pokemon

function Pokemon(nome, nomeJapones, evolucao){ // parametros da funcao construtora
    this.nome = nome
    this.nomeJapones = nomeJapones
    this.evolucao = evolucao

}
const pokemon1 = new Pokemon('charmander','Hitokage', 'ovo' )
// Pokemon.prototype.jogarBola = function(){ // funcao prototype
//     console
}

console.log(pokemon1.nome)