import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import { Box } from '@material-ui/core';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.prevsStep();
    }
    home = e => {
        e.preventDefault();
        this.props.backStep();
    } 
    
        render() {
            const { values, handleChange} = this.props;
        
        return (
            <MuiThemeProvider>
              <React.Fragment>
                  <AppBar title="AFRO ARK"  />
                  
                  

                  <h1 style={{color:'yellow', }}>Thank You for SignUp in AFRO ARK!</h1>
                  <p style={{color:'white', }}>Now you can Login!</p><br/><br/>
                  <center>
                  <Box id="box">
                  <center> <h2  style={{color:'black', fontSize:30 }}>Login</h2></center>
                  <TextField 
                  required={true}
                  floatingLabelText="Username"
                  floatingLabelStyle={{color:'black'}}
                  onChange={handleChange('username')}
                  type="text"
                  defaultValue={values.username}
                
                  
                  />
                  <br/>
                  <TextField 
                  required={true}
                  floatingLabelText="Password"
                  floatingLabelStyle={{color:'black'}}
                  onChange={handleChange('password')}
                  defaultValue={values.password}
                  type="password"
                  
                  />
                  <br/><br/><br/>
                  <RaisedButton 
                  href="https://www.afroark.org/"
                  label="Login"
                  secondary={true}
                  style={StyleSheet.button}
                  
                  /> <br/><br/>
                  <div>
                      <p>Don't have an account
                          <a href="Signupa.js"> Signup</a>
                      </p>
                  </div>
                  
                  
                  
                  </Box></center>
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

export default Success;
