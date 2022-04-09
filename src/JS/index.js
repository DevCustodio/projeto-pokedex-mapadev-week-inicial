const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard= document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon =>{

    pokemon.addEventListener('click', ()=>{
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
    
        const idPokemonSelec = pokemon.attributes.id.value

        const idDoCartãoPokemonParaAbrir = 'cartao-' + idPokemonSelec
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartãoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')
    
        const pokemonAtivoNaList = document.querySelector('.ativo')
        pokemonAtivoNaList.classList.remove('ativo')

        const idPokemonSelecNaList = document.getElementById(idPokemonSelec)
        idPokemonSelecNaList.classList.add('ativo')

    })
})


