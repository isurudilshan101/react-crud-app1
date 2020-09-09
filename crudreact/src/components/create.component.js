import React,{Component} from 'react';


 class Create extends Component{

        constructor(props){
        super(props);

        this.onChangePersonName= this.onChangePersonName.bind(this);
        this.onChangeBusinessName=this.onChangeBusinessName.bind(this);
        this.onChanegeNICNumber=this.onChanegeNICNumber.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state= {
            person_name:'',
            business_name:'',
            busines_nic_number:''
        } 

    }

    onChangePersonName(e){
        this.setState({
            person_name:e.target.value
        });
    }

    onChangeBusinessName(e){
        this.setState({
            business_name:e.target.value
        });
    }

    onChanegeNICNumber(e){
        this.setState({
            busines_nic_number:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`the values are ${this.state.person_name}, ${this.state.business_name}, and ${this.state.busines_nic_number}`)
        this.setState({
            person_name:'',
            business_name:'',
            busines_nic_number:''
        })
    }

  



    render(){
        return(
            <div style={{marginTop:10}}>
                <h3> 
                    Add New Business
                </h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Person Name :</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.person_name}
                            onChange={this.state.onChangePersonName} />
                     </div>

                     <div className='form-group'>
                        <label>Add Business Name :</label>
                        <input type="text" 
                                className='form-control'
                                value={this.state.business_name}
                                onChange={this.state.onChangeBusinessName}/>
                     </div>

                     <div className="form-group">
                        <label>Add NIC Number :</label>
                        <input type="text"
                                className='form-control'
                                value={this.state.busines_nic_number}
                                onChange={this.state.onChanegeNICNumber}/>
                     </div>
                     <div className="form-group">
                        <input type="submit" value='Register Business' className='btn btn-primary'/>
                     </div>
                </form>
            </div>
        );
     }
}

export default Create
