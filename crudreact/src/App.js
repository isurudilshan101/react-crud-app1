import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';


class App extends Component{

  render(){
    
    return(
      <div className="container">
        <h2>React CRUD by Isuru</h2>
      </div>
    );
  }
}

export default App;