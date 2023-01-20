import { Pokemon } from '../models/Pokemon'
import { PokemonListDTO } from './dto/PokemonList.dto'

/**
 * Mapped function to return list of pokemons
 * @param pokemons
 * @returns Array of pokemons
 */
export function pokemonMapper(pokemons: PokemonListDTO[]): Pokemon[] {
  return pokemons.map((pokemon) => Pokemon.fromDTO(pokemon))
}
