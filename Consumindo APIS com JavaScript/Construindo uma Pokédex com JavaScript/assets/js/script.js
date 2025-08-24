class Pokemon {
    constructor() {
        this.number = 0;
        this.name = '';
        this.type = '';
        this.types = [];
        this.photo = '';
        this.stats = {};
        this.height = 0;
        this.weight = 0;
    }
}

const pokeApi = {
    convertPokeApiDetailToPokemon: function (pokeDetail) {
        const pokemon = new Pokemon();
        pokemon.number = pokeDetail.id;
        pokemon.name = pokeDetail.name;

        const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
        const [type] = types;

        pokemon.types = types;
        pokemon.type = type;

        pokemon.photo = pokeDetail.sprites.other.dream_world.front_default ||
            pokeDetail.sprites.other['official-artwork'].front_default ||
            pokeDetail.sprites.front_default;

        pokemon.height = pokeDetail.height / 10; // Convert to meters
        pokemon.weight = pokeDetail.weight / 10; // Convert to kg

        // Get stats
        pokemon.stats = {};
        pokeDetail.stats.forEach(stat => {
            pokemon.stats[stat.stat.name] = stat.base_stat;
        });

        return pokemon;
    },

    getPokemonDetail: function (pokemon) {
        return fetch(pokemon.url)
            .then((response) => response.json())
            .then(this.convertPokeApiDetailToPokemon);
    },

    getPokemons: function (offset = 0, limit = 10) {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

        return fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => jsonBody.results)
            .then((pokemons) => pokemons.map(pokemon => this.getPokemonDetail(pokemon)))
            .then((detailRequests) => Promise.all(detailRequests));
    }
};

const pokemonGrid = document.getElementById('pokemonGrid');
const loadMoreButton = document.getElementById('loadMoreButton');
const loading = document.getElementById('loading');
const pokemonDetail = document.getElementById('pokemonDetail');
const detailClose = document.getElementById('detailClose');

const maxRecords = 151;
const limit = 12;
let offset = 0;
let allPokemons = [];

function createPokemonCard(pokemon) {
    return `
                <div class="pokemon-card ${pokemon.type}" onclick="showPokemonDetail(${pokemon.number})">
                    <div class="pokemon-number">#${pokemon.number.toString().padStart(3, '0')}</div>
                    <img class="pokemon-image" src="${pokemon.photo}" alt="${pokemon.name}">
                    <h3 class="pokemon-name">${pokemon.name}</h3>
                    <div class="pokemon-types">
                        ${pokemon.types.map(type => `<span class="pokemon-type">${type}</span>`).join('')}
                    </div>
                </div>
            `;
}

function loadPokemons(offset, limit) {
    loading.style.display = 'block';
    loadMoreButton.style.display = 'none';

    pokeApi.getPokemons(offset, limit).then((pokemons) => {
        allPokemons = [...allPokemons, ...pokemons];
        const newHtml = pokemons.map(createPokemonCard).join('');
        pokemonGrid.innerHTML += newHtml;

        loading.style.display = 'none';

        const qtdRecordsWithNextPage = offset + limit;
        if (qtdRecordsWithNextPage < maxRecords) {
            loadMoreButton.style.display = 'block';
        }
    }).catch(error => {
        console.error('Error loading Pokemon:', error);
        loading.style.display = 'none';
        loadMoreButton.style.display = 'block';
    });
}

function showPokemonDetail(pokemonNumber) {
    const pokemon = allPokemons.find(p => p.number === pokemonNumber);
    if (!pokemon) return;

    document.getElementById('detailImage').src = pokemon.photo;
    document.getElementById('detailImage').alt = pokemon.name;
    document.getElementById('detailName').textContent = pokemon.name;
    document.getElementById('detailNumber').textContent = `#${pokemon.number.toString().padStart(3, '0')}`;

    const typesHtml = pokemon.types.map(type => `<span class="pokemon-type">${type}</span>`).join('');
    document.getElementById('detailTypes').innerHTML = typesHtml;

    const statsGrid = document.getElementById('statsGrid');
    const statsHtml = `
                <div class="stat-item">
                    <div class="stat-label">Altura</div>
                    <div class="stat-value">${pokemon.height}m</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Peso</div>
                    <div class="stat-value">${pokemon.weight}kg</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">HP</div>
                    <div class="stat-value">${pokemon.stats.hp || 0}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Ataque</div>
                    <div class="stat-value">${pokemon.stats.attack || 0}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Defesa</div>
                    <div class="stat-value">${pokemon.stats.defense || 0}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Velocidade</div>
                    <div class="stat-value">${pokemon.stats.speed || 0}</div>
                </div>
            `;
    statsGrid.innerHTML = statsHtml;

    pokemonDetail.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePokemonDetail() {
    pokemonDetail.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordsWithNextPage = offset + limit;

    if (qtdRecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemons(offset, newLimit);
    } else {
        loadPokemons(offset, limit);
    }
});

detailClose.addEventListener('click', closePokemonDetail);

pokemonDetail.addEventListener('click', (e) => {
    if (e.target === pokemonDetail) {
        closePokemonDetail();
    }
});

// Initial load
loadPokemons(offset, limit);

// Make function globally available
window.showPokemonDetail = showPokemonDetail;