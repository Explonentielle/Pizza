import React from 'react'
import "./App.scss"
import Cards from './components/Cards';

const App = () => {
  
  return (
    <div className='home'>
      <header className='header'>
        <i>🍕</i>
        <h1>Pizza Reeflex</h1>
      </header>
      <div className="container">
        <Cards
          text="nouvelle commande"
          details="crée et enregister une nouvelle commande"
          img="🚚"
          classProp="newOrder"
        />
        <Cards
          text="commande en cours"
          details="voir le details des commandes en cours"
          img="🔥"
          classProp="Orders"
        />
        <Cards
          text="paiement commande"
          details="encaisser une commande"
          img="💶"
          classProp="payOrder"
        />
      </div>
    </div>
  )
}

export default App
