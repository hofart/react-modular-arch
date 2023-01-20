import { baseUrl } from '@/core/service/baseUrl'
import { Pokemon } from '../models/Pokemon'
import { AxiosError } from 'axios'

/**
 * Get pokemon list
 * @returns Array of object pokemon
 */
export function getPokemonList(): Promise<Pokemon[]> {
  return new Promise((resolve, reject) => {
    baseUrl
      .get('/pokemon')
      .then((response) => {
        resolve(response.data)
        console.log(response.data)
      })
      .catch((error: AxiosError) => {
        reject(error)
        console.log(error)
      })
  })
}
