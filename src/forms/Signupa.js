import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import Box from '@material-ui/core/Box';



export class Signupa extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange} = this.props;
        
        return (
            <MuiThemeProvider>
              <React.Fragment>
                  <AppBar title="WELCOME to AXWA" />
                  <center>
                  <Box id="box" >

                  <h1  style={{color:'black', fontSize:30}}>Signup to AXWA</h1>
                  <TextField InputLabelProps={{ shrink: true }} 
                  floatingLabelText="Firstname"
                  floatingLabelStyle={{color:'black'}}
                  type="text"
                  required={true}
                  onChange={handleChange('firstname')}
                  defaultValue={values.firstname}
                  margin="normal"
                  style={{ margin: 15 }}
                  />
                  <TextField
                  margin="normal" 
                  required={true}
                  style={{ margin: 15 }}
                  floatingLabelText="Lastname"
                  floatingLabelStyle={{color:'black'}}
                  type="text"
                  onChange={handleChange('lastname')}
                  defaultValue={values.lastname}
                  />
                   <br/>
                  <TextField
                  margin="normal"
                  required={true}
                  style={{ margin: 15 }} 
                  floatingLabelText="Email"
                  floatingLabelStyle={{color:'black'}}
                  type="email"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  />
                
                  <TextField 
                  margin="normal"
                  required={true}
                  style={{ margin: 15 }}
                  floatingLabelText="Location"
                  floatingLabelStyle={{color:'black'}}
                  type="text"
                  onChange={handleChange('location')}
                  defaultValue={values.location}
                  />
                  
                  <br/>
                  <TextField 
                  margin="normal"
                  required={true}
                  style={{ margin: 15 }}
                  floatingLabelText="Phone_number"
                  floatingLabelStyle={{color:'black'}}
                  onChange={handleChange('phone_number')}
                  type="number"
                  defaultValue={values.Phone_number}
                  />
                  <TextField
                  margin="normal" 
                  required={true}
                  style={{ margin: 15 }}
                  floatingLabelText="Username"
                  floatingLabelStyle={{color:'black'}}
                  type="text"
                  onChange={handleChange('username')}
                  defaultValue={values.username}
                  
               
                  />
                  <br/>
                  <TextField 
                  margin="normal"
                  style={{ margin: 15 }}
                  floatingLabelText="Password"
                  floatingLabelStyle={{color:'black'}}
                  type="password"
                  required={true}
                  onChange={handleChange('password')}
                  defaultValue={values.password}
                  />
                  
                   <TextField 
                  margin="normal"
                  style={{ margin: 15 }}
                  floatingLabelText="Repeat_password"
                  floatingLabelStyle={{color:'black'}}
                  type="password"
                  required={true}
                  onChange={handleChange('confirm_password')}
                  defaultValue={values.confirm_password}
                  />
                  
                  <br/><br/>
                
                  <RaisedButton
                  label="Submit"
                  secondary={true} 
                  style={StyleSheet.button}
                  onClick={this.continue}
                  />
                  </Box>
                  </center>
              </React.Fragment>
            </MuiThemeProvider>
        );
    }
}


export default Signupa
