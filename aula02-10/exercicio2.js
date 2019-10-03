// 2.
// Printe no console a seguinte
// frase: "Oi, meu nome é  < >.
// e meu nome japones é < >."

const especies = {
    nome: 'Eevee',
    nomeJapones:'Eievui',
    tipoDeEvolucao: 'ovo',
    pokemons(){
        console.log(`Oi meu nome é ${especies.nome} e meu nome em Japones é ${especies.nomeJapones}`)
    }
}
    especies.pokemons()