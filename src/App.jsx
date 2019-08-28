import React from 'react';
import './App.css';
import NavBar from './components/header/NavBar'
import Portfolio from './components/main/Portfolio'
import HeroSection from './components/main/HeroSection'
import About from './components/main/About'
import mail from './assets/profile/mail.png'


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
        <a href='mailto:iamerinnnelson@gmail.com'><img id='button-mail' src={mail} alt='Click to mail'/></a>


        </footer>
      </div>
    );
  }
}

export default App;
