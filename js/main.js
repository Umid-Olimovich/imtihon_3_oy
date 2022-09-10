var pokemonListEl = document.querySelector('.pokemon-list');

function createPokemon(pok) {
    let colEl = document.createElement('div');
    colEl.className = 'col-6 col-lg-3 col-md-6 col-sm-6 ';

    let cardEl = document.createElement('div');
    cardEl.className = 'card ' ;

    let cardImg = document.createElement('img');
    cardImg.setAttribute('src', pok.img);
    cardImg.className = ' img p-3';

    let cardHeader = document.createElement('div')
    cardHeader.className = 'h3 text-center pt-1 ';

    let like = document.createElement('i')
    like.className = 'fa-regular fa-heart like text-end  f-';

    let cardBody = document.createElement('div')
    cardBody.className = 'card-body ';

    let cardTitle = document.createElement('h5');
    cardTitle.className = 'title';
    cardTitle.textContent = pok.name;

    let cardDescription = document.createElement('h5');
    cardDescription.className = 'description';
    cardDescription.textContent = pok.type;

    let numbers = document.createElement('div')
    numbers.className = 'my-3 d-flex justify-content-between';

    let weight = document.createElement('div');
    weight.textContent = pok.weight;

    let avg_spawns = document.createElement('div');
    avg_spawns.textContent = pok.avg_spawns + "  avg spawns";

    cardEl.appendChild(cardImg);
    cardEl.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(like);
    cardBody.appendChild(cardDescription);
    cardDescription.appendChild(numbers);
    numbers.appendChild(weight);
    numbers.appendChild(avg_spawns);
    colEl.appendChild(cardEl);

    return colEl
}


render(pokemons)






