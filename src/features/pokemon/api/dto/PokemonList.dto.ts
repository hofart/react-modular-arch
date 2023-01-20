import { PokemonDTO } from './Pokemon.dto'

// Response API type
export type PokemonListDTO = {
  count: string
  next: string | null
  previous: string | null
  results: PokemonDTO[]
}
