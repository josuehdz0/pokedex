export class Pokemon{
  constructor(data){
    this.name = data.name
  }


  static PokemonListTemplate(pokemon){
    return`
    <p>
    <i class="mdi mdi-pokeball f-18"></i> ${pokemon.name}
  </p>
    `
  }

}