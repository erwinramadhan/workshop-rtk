import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './feature/counter/counterSlice'
import pokemonSlice from './feature/pokemon/pokemonSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    pokemon: pokemonSlice
  }
})

export default store