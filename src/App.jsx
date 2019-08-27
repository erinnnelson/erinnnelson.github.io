import React from 'react';
import './App.css';
import NavBar from './components/header/NavBar'
import HeroSection from './components/header/HeroSection'
import Portfolio from './components/main/Portfolio'
import Card from './components/main/Card'
import ProjectCardMatch from './components/main/ProjectCardMatch'
import ProjectBeatMyRun from './components/main/ProjectBeatMyRun'
import ProjectTackle from './components/main/ProjectTackle'
import ProjectQwickPoll from './components/main/ProjectQwickPoll'
import ProjectBennys from './components/main/ProjectBennys'
import ProjectCard from './components/main/ProjectCard'

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
          <div id='cards'>
              {/* <a href='http://qwp.surge.sh/' target='_blank'><ProjectQwickPoll /></a>
              <a href='http://cowabunga.surge.sh/' target='_blank'><ProjectBennys /></a>
              <a href='http://tackle.surge.sh/' target='_blank'><ProjectTackle /></a>
              <a href='http://beatmyrun.surge.sh/' target='_blank'><ProjectBeatMyRun /></a>
              <a href='http://cardmatch.surge.sh/' target='_blank'><ProjectCardMatch /></a> */}
            <a className='project-card-containers' href='http://qwp.surge.sh/' target='_blank'><ProjectCard /></a>
            <a className='project-card-containers' href='http://qwp.surge.sh/' target='_blank'><ProjectCard /></a>
            <a className='project-card-containers' href='http://qwp.surge.sh/' target='_blank'><ProjectCard /></a>
            <a className='project-card-containers' href='http://qwp.surge.sh/' target='_blank'><ProjectCard /></a>
            
          </div>

        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
