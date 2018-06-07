import React, { Component } from 'react';

import { auth } from '../firebase';

import styled from 'styled-components'

const PWChangeDiv  = styled.div `
  width: 25vw;
  border: .2vh solid black;
  text-align: center;
  margin: 1em;
  font-family: 'Anton', sans-serif;
  
  .pwResetLabel {
    width: 100%;
    font-size: 2vw;
    margin-top: .4em;
  }

  .inputAndButton {
    width: 23vw;
    margin: .6em;
  }
  
`

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
    <PWChangeDiv>
    <div className="pwResetLabel">Change Password</div>
      <form onSubmit={this.onSubmit}>
        <input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="New Password"
          className="inputAndButton"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm New Password"
          className="inputAndButton"
        />
        <button
          disabled={isInvalid}
          type="submit"
          className="inputAndButton"
        >
          Reset My Password
        </button>

        { error && <p>{error.message}</p> }
      </form>
    </PWChangeDiv>
    );
  }
}

export default PasswordChangeForm;