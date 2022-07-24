import React, { useState } from 'react'
import { useEffect } from 'react'
import characters from '../data/letters'

function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    setLetters(characters)
  }, [])
  return (
    <div className='keypad'>
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key]
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          )
        })}
    </div>
  )
}

export default Keypad
