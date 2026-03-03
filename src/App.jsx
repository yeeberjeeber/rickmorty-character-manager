import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import CharListPage from './pages/CharListPage'
import OneCharPage from './pages/AirCharPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Rick & Morty Character List</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/characters" element={<CharListPage />} />
        <Route path="/characters/:charId" element={<OneCharPage />} />
        {/* <Route path="/characters/new" element={<CreatePetPage />} />
        <Route path="/characters/:charId/edit" element={<EditPetForm />} /> */}
      </Routes>
    </>
  )
}

export default App
