import React from 'react';
import './App.css';
import NavBar from './components/header/NavBar'
import Portfolio from './components/main/Portfolio'
import HeroSection from './components/main/HeroSection'
import About from './components/main/About'


class App extends React.Component {
  constructor() {
    super()
    this.state = ({

    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          <HeroSection />
          <Portfolio />
          <About />

        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
