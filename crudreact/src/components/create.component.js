import React,{Component} from 'react';

export default class Ceate extends Component{
    render(){
        return(
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg nabar-light bg-light">
                      <Link to='/' className="nabar-brand">REACT CRUD Example By Isuru</Link>
                        <div className="collapse navbar-collapse id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">Home</Link>
                                </li>
                            </ul>
                        </div>
                    
                </div>
            </Router>
        )
    }
}
