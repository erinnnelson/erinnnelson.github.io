import React from 'react';
import './App.css';
import NavBar from './components/header/NavBar'
import Portfolio from './components/main/Portfolio'
import HeroSection from './components/main/HeroSection'
import About from './components/main/About'
import Contact from './components/main/Contact'
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
          <header>
            <NavBar />
        </header>
        <div className="App">
          <div id='header-overlay'>
            <div id='text-fader'>
            </div>
          </div>
          <main>
            <HeroSection />
            <Parallax className='portfolio-paralax' y={[50, -150]} tagOuter="figure">
              <Portfolio />
            </Parallax>
            <About />
            <Contact />

          </main>
          <footer>


          </footer>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
