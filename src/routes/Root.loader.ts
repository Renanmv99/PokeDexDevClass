import { getPokemonList } from "../services/getPokemonList";

export async function rootloader(){
    const data = await getPokemonList()   
    return{ pokemons: data.results, next: data.next }
}