// 4.
// Adicione um método ao seu pokemon
// chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// To voaaaaaando!".

const especies = {
    nome: 'Eevee',
    nomeJapones:'Eievui',
    tipoDeEvolucao: 'ovo',
    saberVoar: false,
    voar(){
       
        if (especies.saberVoar == false){
                console.log('Desculpa, nao sei voar.')
        }else{
            console.log('To voaaaaaando!')
        }
        
}
}
    especies.voar()