import React from 'react';
import PropTypes, { number } from 'prop-types';

export default class First extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            valueOne:'',
            validation:true
        }
      

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    };


    handleChange(e){

        const first="FirstField";
        const second="SecondField";

        if (e.target.name===first) { 
            this.setState({
                value: e.target.value }
                );

                if (typeof e.target.name === "string"){
                    this.setState({
                        validation:true})
                    }
                        else {this.setState({
                            validation:false});    
                        }
            }
    
        if (e.target.name===second){  
            this.setState({
            valueOne: e.target.value});
        
                if (typeof e.target.name === "number"){
                    this.setState({
                        validation:true})
                    }
                        else {this.setState({
                            validation:false});    
                        }
            }              
        }  
            


    handleSubmit(e){
        if (this.state.validation===true){
            e.preventDefault();}
            else {
                e.target.style.border="2px solid red";
                e.preventDefault();
            }
    }

render() {
    
    return(
        <form className="form" onSubmit={this.handleSubmit}>
            <div> LOGIN: {this.state.value} </div>
            <input  name="FirstField" value={this.state.value} onChange={this.handleChange} />
            <div>PASSWORD: {this.state.valueOne} </div>
            <input  name="SecondField" value={this.state.valueOne} onChange={this.handleChange}/>
    
            <input type="submit" value="send" onClick={this.handleSubmit} /> 
        </form>
    );
}
}