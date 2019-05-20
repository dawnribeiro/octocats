import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import NavBar from './components/NavBar'
import Octocats from './components/Octocats'
import Cat from './components/Cat'

class App extends Component {
  render() {
    return (
      <>
        <NavBar />

        <Octocats />
      </>
    )
  }
}

export default App
