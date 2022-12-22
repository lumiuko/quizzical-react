import React from 'react'

export default function Welcome(props) {
  return (
    <>
      <h1 className="welcome-title">Quizzical</h1>
      <p className="welcome-text">Test your knowledge</p>
      <button className="btn" onClick={props.startGame}>
        {props.isLoading ? 'Loading...' : 'Start quiz'}
      </button>
    </>
  )
}