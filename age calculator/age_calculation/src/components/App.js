import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import estp from '../assests/EsTP.gif';

import AgeStats from './AgeStats';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: '',
      birthday: '1985-08-05',
      showStats: false //->ternary expression
    };
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate, showStats: true }); //important to set default state
  }

  render() {
    return (
      <div className='App'>
        <Form>
          <h1>Age Calculate Application</h1>
          <h3>Enter Your Birthday Here</h3>
          <FormControl
            className='control'
            type='date'
            onChange={event => this.setState({ newDate: event.target.value })}
          />
          {''}
          <Button className='button' onClick={() => this.changeBirthday()}>
            Submit
          </Button>
          {this.state.showStats ? (
            <div className='fade age-stats'>
              <AgeStats date={this.state.birthday} />
            </div>
          ) : null}
           {/* Hide the following content when showStats is true */}
           {!this.state.showStats && (
            <div>
              <h3>It's Your first day on Earth!</h3>
              <img src={estp} alt='estp' />
            </div>
          )}
        </Form>
      </div>
    );
  }
}

export default App;
