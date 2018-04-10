import React from 'react';
import {  FormGroup,Col,  ControlLabel,FormControl, Button } from 'react-bootstrap';



export default class WorkingForm extends React.Component {
  state = {
    firstName : '',
    lastName : '',
    email: '',
    IdentificationType : '',
    IdentificationNumber : '',
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render(){
    return(

      <form horizontal>
      <FormGroup controlId="formHorizontalFname">
        <Col componentClass={ControlLabel} sm={2}>
        First Name
        </Col>
        <Col sm={10}>
        <FormControl
         name = "firstName"
         placeholder = 'First Name'
         value={this.state.firstName}
         onChange = {e => this.change(e)}
         />
        </Col>
      </FormGroup>
    <br />

      <FormGroup controlId="formHorizontalLname">
      <Col componentClass={ControlLabel} sm={2}>
      Last Name
      </Col>
      <Col sm={10}>
      <FormControl
          name = "lastName"
          placeholder = 'Last Name'
          value={this.state.lastName}
          onChange = {e => this.change(e)}
          />
        </Col>
      </FormGroup>
      <br />

      <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
      E-mail
      </Col>
      <Col sm={10}>
      <FormControl
           name = "email"
           placeholder = 'Email'
           value={this.state.email}
           onChange = {e => this.change(e)}
            />
          </Col>
        </FormGroup>
        <br />

        <FormGroup controlId="formHorizontalIdentificationType">
        <Col componentClass={ControlLabel} sm={2}>
        ID Type
        </Col>
        <Col sm={10}>
        <FormControl
            name = "IdentificationType"
            placeholder = 'Identification Type '
            value={this.state.IdentificationType}
            onChange = {e => this.change(e)}
            />
          </Col>
        </FormGroup>
        <br />

        <FormGroup controlId="formHorizontalIdentificationType">
        <Col componentClass={ControlLabel} sm={2}>
        ID No
        </Col>
        <Col sm={10}>
        <FormControl
             name = "IdentificationNumber"
             placeholder = 'Identification Number'
             value={this.state.IdentificationNumber}
             onChange = {e => this.change(e)}
             />
            </Col>
        </FormGroup>
        <br /><br />

        <FormGroup>
        <Col smOffset={2} sm={10}>
        <Button onClick = {() => this.onSubmit()}>Submit</Button>
        </Col>
        </FormGroup>
      </form>

    )
  }
}
