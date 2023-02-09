export class Pokemon{
  constructor(data){
    this.name = data.name
  }


  static PokemonListTemplate(pokemon){
    return`
    <div class="col-12 my-1">
                  <button class="btn btn-light w-100 text-start" onclick="app.pokemonsController.getPokemonByIndex(${pokemon.index})">
                    <i class="mdi mdi-pokeball f-18"></i> ${pokemon.name}
                  </button>
                </div>
    `
  }

  get SelectedPokemonTemplate(){
    return`
    <div class="card">
            <div class="row text-center p-3">
              <h4>${this.name}</h4>
            </div>
          </div>
          <div class="row">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
              alt="pokemonimg">
          </div>
          <div class="card p-3 mb-4">
            <div class="row justify-content-evenly">
              <div class="col-5">
                <p class=" fw-bold"> Height: </p>
                <p class=" fw-bold"> Types: </p>
              </div>
              <div class="col-5">
                <p class=" fw-bold"> Weight: </p>
                <button class="btn btn-light">Catch</button>
              </div>
            </div>
          </div>
    `
  }

}