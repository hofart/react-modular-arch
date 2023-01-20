import { PokemonListDTO } from '../api/dto/PokemonList.dto'
import { PokemonDTO } from '../api/dto/Pokemon.dto'

// Mapped class pokemon type
type PokemonType = { [P in keyof Pokemon]: Pokemon[P] }

// Model of pokemon
export class Pokemon {
  count: string
  next: string | null
  previous: string | null
  results: PokemonDTO[]

  constructor(model: Partial<PokemonType>) {
    this.count = model.count || ''
    this.next = model.next || ''
    this.previous = model.previous || ''
    this.results = model.results || []
  }

  static fromDTO(dto: PokemonListDTO): Pokemon {
    return new Pokemon(dto)
  }
}
