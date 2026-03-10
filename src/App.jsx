import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import CharListPage from './pages/CharListPage'
import OneCharPage from './pages/OneCharPage'
import YourCharListPage from './pages/YourCharListPage'
import YourOneCharPage from './pages/YourOneCharPage'
import './App.css'

function Home() {
  return (
      <p className="home-story">
        The multiverse is chaotic, and the Citadel of Ricks can't keep track of everyone! 
        Alternate Ricks, countless Mortys, and strange alien species are everywhere. 
        Your mission? Explore the multiverse, inspect characters, and organize them into a 
        manageable system — all powered by the interdimensional Rick & Morty API.
      </p>
  );
}


function App() {

  return (
    <>
      <h1>Rick & Morty Character List</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharListPage />} />
        <Route path="/characters/:charId" element={<OneCharPage />} />
        <Route path="/characters/yours" element={<YourCharListPage />} />
        <Route path="/characters/yours/:charId" element={<YourOneCharPage />} />
      </Routes>
    </>
  )
}

export default App
