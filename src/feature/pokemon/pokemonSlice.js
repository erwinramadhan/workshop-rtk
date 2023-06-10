import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = "https://pokeapi.co/api/v2/"

export const getAllPokemon = createAsyncThunk(
  'pokemon/getAllPokemon',
  async () => {
    return await axios.get(BASE_URL + "pokemon")
  }
)

export const getDetailPokemon = createAsyncThunk(
  'pokemon/getDetailPokemon',
  async (name) => {
    return await axios.get(BASE_URL + `pokemon/${name}`)
  }
)


const initialState = {
  allPokemon: {
    count: 0,
    previous: '',
    next: '',
    results: [],
    isLoading: false
  },
  detailPokemon: {
    types: [],
    species: {},
    weight: 0
  }
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPokemon.pending, (state) => {
      state.allPokemon.isLoading = true
    }),
      builder.addCase(getAllPokemon.fulfilled, (state, action) => {
        const { count, previous, next, results } = action.payload.data
        state.allPokemon.isLoading = false
        state.allPokemon.count = count
        state.allPokemon.next = next
        state.allPokemon.previous = previous
        state.allPokemon.results = results
      }),
      builder.addCase(getAllPokemon.rejected, (state) => {
        state.allPokemon.isLoading = false
      }),
      builder.addCase(getDetailPokemon.pending, (state) => {
        
      }),
      builder.addCase(getDetailPokemon.fulfilled, (state, action) => {
        const { species, weight, types } = action.payload.data
        state.detailPokemon.species = species
        state.detailPokemon.weight = weight
        state.detailPokemon.types = types
      })
  }
})

export const { } = pokemonSlice.actions

export default pokemonSlice.reducer