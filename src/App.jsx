import { useState } from 'react'
import './App.css'
import Auth from './components/auth'
import Kanban from './components/kanban'
function App() {

  return (
    <div className="app">
      {/* <Auth/> */}
      <Kanban/>
    </div>
  )
}

export default App
