
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import CountrieCard from './components/CountreyCard/CountrieCard'
import Countres from './pages/Countres'
import { MoreInfo } from './pages/MoreInfo'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Countres />}/>
        <Route path='/:countryName' element={<MoreInfo />}/>
      </Routes>
    </>
  )
}

export default App
