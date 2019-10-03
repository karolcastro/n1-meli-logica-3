// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// com pelo menos 4 propriedades e 1 método
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

const especies = {
    nome: 'Eevee',
    nomeJapones:'Eievui',
    tipoDeEvolucao: 'ovo',
    pokemons(){
        console.log(`O pokemon é ${especies.nome} o nome em Japones é ${especies.nomeJapones} e seu tipo de evoluçõa é ${especies.tipoDeEvolucao}`)
    }
}
    especies.pokemons()