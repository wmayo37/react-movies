import { useState } from 'react'
import './App.css'
import MovieCard from "./components/MovieCard"

function App() {
  return (
    <div>
      <MovieCard movie={{title: "Placeholder Title", release_date: "Placeholder Date"}}></MovieCard>
    </div>
  )
}

export default App
