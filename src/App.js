import Banner from './Component/Banner.js';
import Navbar from './Component/Navbar.js';
import Movies from './Component/Movies.js';
import Favrouite from './Component/Favrouites.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
         // with help of this we can wrap multiple component
         // and we also send props too
         <Route path = "/" exact render = {(props) => (
            <>
               <Banner {...props} name = "navteg"/>
               <Movies {...props} />
            </>
         )}/>
         <Route path = "/favrouite" component = {Favrouite}/>
      </Switch>
      {/*<Movies/>
      <Favrouite />*/}
    </Router>
  );
}

export default App;
