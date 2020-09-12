import React,{Component} from 'react';

import axios from 'axios';


export default class Edit extends Component {
    
    constructor(props){
        super(props);
        this.onChanePersonName=this.onChanePersonName.bind(this);
        this.onChangeBusinessName=this.onChangeBusinessName.bind(this);
        this.onChaneNICNumber=this.onChanePersonName.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            person_name:'',
            business_name:'',
            business_nic_number:''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4001/business/edit'+this.props.match.params.id)
        .then.setState(response=>{
                this.setState({
                    person_name:response.data.person_name,
                    business_name:response.data.business_name,
                    business_nic_number:response.data.business_nic_number
                })
                .catch(function(error){
                    console.log(error);
                })
        })
    }

    onChanePersonName(e){
        this.state({
            person_name:e.target.value
        })
    }

    onChangeBusinessName(e){
        this.state({
            business_name:e.target.value
        });
    }

    onChaneNICNumber(e){
        this.state({
            business_nic_number:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const obj={
            person_name:this.state.person_name,
            business_name:this.state.business_name,
            business_nic_number:this.state.business_nic_number
        };
        axios.post('http://localhost:4001/business/update'+this.props.match.params.id,obj)
        .then(res=>console.log(res.data));

        this.props.history.push('/index');
    }

    render(){
        return(
                <div>

                </div>
        )
    }
}