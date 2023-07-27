import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { Router, Route } from 'react-router';

const App = () => 
  <>
    <Nav />
    <Router>
      <Route default path='/' component={About} />
      {/* <Route path='/portfolio' component={Portfolio} />
      <Route path='/contact' component={Contact} />
      <Route path='/resume' component={Resume} /> */}
    </Router>
  </>

export default App;
