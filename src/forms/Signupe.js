import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { makeStyles } from '@material-ui/core/styles'


export class Signupe extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    Previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange} = this.props;
        
        return (
            <MuiThemeProvider>
              <React.Fragment>
                  <AppBar title="Create an Acoount" style={{backgroundColor:'red'}} />
                  <center> <h1  style={{color:'brown', width: 800,}}>SignUp to Afro Ark(Personal Information)</h1></center>
                  <TextField 
                  hintText="Choose a username"
                  floatingLabelText="Username"
                  onChange={handleChange('username')}
                  defaultValue={values.username}
                  />
                  <br/>
                  <TextField 
                  hintText="Choose a password"
                  floatingLabelText="Password"
                  onChange={handleChange('password')}
                  defaultValue={values.password}
                  />
                   <br/>
                   <TextField 
                  hintText="Confirm password"
                  floatingLabelText="Re-write the password"
                  onChange={handleChange('confirm_password')}
                  defaultValue={values.confirm_password}
                  />
                  
                  <br/><br/><br/>
                  <RaisedButton 
                  label="Back "
                  primary={true}
                  style={StyleSheet.button}
                  onClick={this.Previous}
                  /> 

                  <RaisedButton
                  label="Continue"
                  primary={true}
                  style={StyleSheet.button}
                  onClick={this.continue}
                  />
                 

              </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const styles = {
    button:  {
        margin: 15
    }
}

export default Signupe
