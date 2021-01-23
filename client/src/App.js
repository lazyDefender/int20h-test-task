import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './init/store'
import { history } from './navigation/history'
import { Routes } from './navigation'
import './App.css'


const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes/>
      </Router>
    </Provider>
  )
}

export default App
