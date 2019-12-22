import React from 'react';
import {Link} from 'react-router-dom';

class Phase2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            city:'',
            street:'',
            housenumber:'',
            allStates:false,
        }
    }
    onChange=(inputName,value)=>{
        if(inputName=='housenumber'){
            if(value<=0)alert('Please Choose a Valid House Number!')
        }
        this.setState({
            [inputName]:value
        })
        
        localStorage.setItem(inputName,value);

    }
    checkIfAllTrue=()=>{
        let city=localStorage.getItem('city')
        let street=localStorage.getItem('street')
        let houseNumber=localStorage.getItem('housenumber')
        
        if(city && street && houseNumber){
            this.setState({allStates:!this.state.allStates})
        }
        

    }
    
    render(){
                return(
            <div>
                <form action="">
                    <p>City Name :  <input onChange={((e)=>this.onChange(e.target.name,e.target.value))} name={'city'} placeholder='Please Insert City Name' type="text"/></p>
                    <p>Street Name : <input onChange={((e)=>this.onChange(e.target.name,e.target.value))} name={'street'} placeholder='Please Insert Street Name' type="text"/></p>
                    <p>House Number : <input min='1' pattern='([0-9])\w+' onChange={((e)=>this.onChange(e.target.name,e.target.value))} name={'housenumber'} placeholder='Please Insert House Number' type="text"/></p>
                </form>
                <Link onClick={this.checkIfAllTrue} path="/phase2">Next</Link>
            </div>
        );
    }
}
export default Phase2;