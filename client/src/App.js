import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { history } from './navigation/history'
import { Routes } from './navigation'
import './App.css'

const App = () => {
  return (
    <Router history={history}>
      <Routes/>
    </Router>
  )
}

export default App
