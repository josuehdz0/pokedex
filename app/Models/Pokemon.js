export class Pokemon{
  constructor(data){
    this.name = data.name
    this.url = data.url
    this.img = data.sprites.other["official-artwork"].front_default
    this.height = data.height
    this.weight = data.weight
    // this.types = data.types.map(type => type.name)
    // NOTE vvvv figured this out with chatGPT
    this.types = [];
    if (data.types) {
      data.types.forEach(type => {
        if (type.type) {
          this.types.push(type.type.name);
        }
      });
    }

  }


  static PokemonListTemplate(pokemon){
    return`
    <div class="col-12 my-1">
                  <button class="btn btn-light w-100 text-start" onclick="app.pokemonsController.getPokemonByIndex('${pokemon.name}')">
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
          <div class="row py-3">
            <img
              src="${this.img}"
              alt="pokemonimg">
          </div>
          <div class="card p-3 mb-4">
            <div class="row justify-content-evenly">
              <div class="col-5">
                <p class=" fw-bold"> Height: ${this.height}</p>
                <p class=" fw-bold"> Types:${this.types} </p>
              </div>
              <div class="col-6">
                <p class=" fw-bold"> Weight: ${this.weight}</p>
                <button class="btn btn-light" onclick="app.sandboxPokemonsController.catchPokemon()">
                <i class="mdi mdi-pokeball f-18"></i> Catch
                </button>
              </div>
            </div>
          </div>
    `
  }

}