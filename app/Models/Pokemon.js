export class Pokemon{
  constructor(data){
    this.name = data.name
  }


  static PokemonListTemplate(pokemon){
    return`
    <div class="col-12 my-1">
                  <button class="btn btn-light w-100 text-start">
                    <i class="mdi mdi-pokeball f-18"></i> ${pokemon.name}
                  </button>
                </div>
    `
  }

}