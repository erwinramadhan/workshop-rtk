import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './feature/counter/counterSlice'
import { getAllPokemon, getDetailPokemon } from './feature/pokemon/pokemonSlice'

function App() {
  const dispatch = useDispatch()
  const counterState = useSelector(state => state.counter)
  const pokemonState = useSelector(state => state.pokemon.allPokemon)
  const pokemonDetail = useSelector(state => state.pokemon.detailPokemon) 

  const [count, setCount] = useState(0)

  useEffect(() => {
    dispatch(getAllPokemon())
  }, [])

  const testfunc = useCallback(() => {
    /// pokemonDetail.weight
    console.log('pokemonDetail.weight', pokemonDetail.weight)
  }, [pokemonDetail.weight])

  console.log('counterState', counterState)

  return (
    <div style={{ display: 'flex' }}>
      <div onClick={testfunc}>test button</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {pokemonState.results.map(el => (
          <div style={{ padding: '20px', backgroundColor: 'blue', margin: '4px' }} onClick={() => dispatch(getDetailPokemon(el.name))}>{el.name}</div>
        ))}
      </div>
      <div>
        <div>Detail</div>
        <div>Species</div>
        {pokemonDetail.species.name}
        <div>types</div>
        {pokemonDetail.types.map(el => el.name)}
        <div>weight</div>
        <div>{pokemonDetail.weight}</div>
      </div>
    </div>
  )
}

export default App