import React, { Component } from 'react'
import Signupa from './Signupa';
import Signupe from './Signupe';
import Success from './Success';

export class Signup extends Component {
    state = {
        step: 1,
        Name: '',
        Email: '',
        Sex: '',
        Location:'',
        Username: '',
        Password: '', 
        Confirm_password: '',
        FirstName: '', 
        LastName: '',
        error:''

    }
    nextStep = () => {
        
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    
    }

   

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
        
    }
    render() {
        const{ step } = this.state;
        const {FirstName, LastName, Email, Phone_number, Location, Username, Password, Confirm_password,error } = this.state;
        const values = {FirstName, LastName, Email, Phone_number, Location, Username, Password, Confirm_password,error }
        
        switch(step) {
            case 1:
                return(
                    <Signupa
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                );
                
                case 2:
                    return(
                    <Success
                        backStep={this.backStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                        );
                        case 3:
                    return(
                        <Signupe
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                    )
                

        }
    }
}

export default Signup
 