import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import CharListPage from './pages/CharListPage'
import OneCharPage from './pages/OneCharPage'
import YourCharListPage from './pages/YourCharListPage'
import YourOneCharPage from './pages/YourOneCharPage'
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
        <Route path="/characters/yours" element={<YourCharListPage />} />
        <Route path="/characters/yours/:charId" element={<YourOneCharPage />} />
        {/* <Route path="/characters/new" element={<CreatePetPage />} />
        <Route path="/characters/:charId/edit" element={<EditPetForm />} /> */}
      </Routes>
    </>
  )
}

export default App
