function render(pokemon) {
    pokemonListEl.innerHTML = null;
    for (let i = 0; i < pokemon.length; i++) {
        let MainEl = createPokemon(pokemon[i]);
        pokemonListEl.appendChild(MainEl);
    }
}