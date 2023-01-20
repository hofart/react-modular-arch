import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PokemonList from './features/pokemon/pages/PokemonList/PokemonList'

function RoutesProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesProvider
