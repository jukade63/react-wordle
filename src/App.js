import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Wordle from './components/Wordle'
import solutions from './data/solutions'

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    const fetchedSolution =
      solutions[Math.floor(Math.random() * solutions.length)]
    setSolution(fetchedSolution.word)
  }, [setSolution])

  return (
    <div className='App'>
      <h1>Wordle</h1>

      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App
