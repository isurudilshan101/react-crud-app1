import React,{Component} from 'react';

export default class Create extends Component{
    render(){
        return(
            <div style={{marginTop:10}}>
                <h3> 
                    Add New Business
                </h3>
                <form>
                    <div className="form-group">
                        <label>Add Person Name :</label>
                        <input type="text" className="form-control"/>
                     </div>

                     <div className="form-group">
                        <label>Add Person Name :</label>
                        <input type="text" className="form-control"/>
                     </div>

                     <div className="form-group">
                        <label>Add Person Name :</label>
                        <input type="text" className="form-control"/>
                     </div>
                </form>
            </div>
        );
    }
}
