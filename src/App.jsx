import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Rick & Morty Character List</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/characters" element={<PetsPage />} />
        <Route path="/characters/:charId" element={<OnePetPage />} />
        <Route path="/characters/new" element={<CreatePetPage />} />
        <Route path="/characters/:charId/edit" element={<EditPetForm />} />
      </Routes>
    </>
  )
}

export default App
