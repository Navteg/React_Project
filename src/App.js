// import Ustate from './Components/Ustate.js'
import Login from './Components/Authentication.js'
import Firestore from './Components/Firestore.js'

// import Db from './Components/FiresDb.js'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
        {/*<Ustate/>
        <Db />*/}
        <Login />
        <Firestore />
    </>
  );
}

export default App;
