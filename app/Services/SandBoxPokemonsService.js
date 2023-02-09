import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js"

class SandboxPokemonsService{
  async catchPokemon() {
    const res = await sandboxApi.post('/ivan/pokemon', appState.pokemon)
    console.log('create/catch pokemon', res.data);
    let createdPokemon = new Pokemon(res.data)
    appState.myPokemons.push(createdPokemon)
    appState.emit('myPokemons')
    //this works? But getting error?
  }

}

export const sandboxPokemonsService = new SandboxPokemonsService()