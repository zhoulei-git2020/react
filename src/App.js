import React from "react";
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './views/login/index'
class App extends React.Component{
   constructor(props){
     super(props);
     this.state = {}
   }


render() {
  return (
     <BrowserRouter>
        <Switch>
          <Route exact component={Login} path="/"></Route>
        </Switch>
     </BrowserRouter>
    )
  }
}
export default App;
