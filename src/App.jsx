import React from 'react';
import './App.css';
import NavBar from './components/header/NavBar'
import Portfolio from './components/main/Portfolio'
import HeroSection from './components/main/HeroSection'
import About from './components/main/About'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';


class App extends React.Component {
  constructor() {
    super()
    this.state = ({

    })
  }
  render() {
    return (
      <ParallaxProvider>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <main>
            <HeroSection />
            <Parallax className='portfolio-paralax' y={[50, -150]} tagOuter="figure">
              <Portfolio />
            </Parallax>
            <About />

          </main>
          <footer>


          </footer>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
