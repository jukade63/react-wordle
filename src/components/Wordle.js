import React, { useState } from 'react'
import { useEffect } from 'react'
import useWordle from '../hook/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, usedKeys, turn } =
    useWordle(solution)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true)
      }, 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    if (turn > 5) {
      setTimeout(() => {
        setShowModal(true)
      }, 2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  return (
    <div>
      {/* <div>solution - {solution}</div> */}
      <div>Current Guess - {currentGuess}</div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </div>
  )
}

export default Wordle
