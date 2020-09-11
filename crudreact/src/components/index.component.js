import React,{Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';


export default class Index extends Component{

    constructor(props){
        super(props);
        this.state={business:[]};

    }

    componentDidMount(){

        axios.get('http://localhost:4001/business').then(response=>{this.setState({business:Response.data});
        })
        .catch(function(error){
                console.log(error)
        });

    render(){
        return(
            <div>
                Welcome to Index Component
            </div>
        )
    }
}
}