import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth, db } from '../firebase'

import styled from 'styled-components'

const SignUpDiv = styled.div `
    background: green;
    min-height: 50vh;

    .signUpPageFormLabel {
      font-size: 3vw;

    }

    .signUpInput {
      padding: 1vw;
      margin: 1vw;
      width: 15vw;
    }
`

const SignUpPage = ({ history }) =>
  <SignUpDiv>
    <div className="signUpPageFormLabel">Cowboy Drive<hr /> Booking Information</div>
    <SignUpForm history ={history} />
  </SignUpDiv>

const INITIAL_STATE = {
  username: '',
  passwordOne: '',
  passwordTwo: '',
  name: '',
  email: '',
  phone: '',
  bestTime: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,  
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
      name,
      phone,
      bestTime
    } = this.state

  const {
    history,
  } = this.props

  auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, name, email, phone, bestTime)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push("/account");
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });

      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      passwordOne,
      passwordTwo,
      name,
      email,
      phone,
      bestTime,
      error,
    } = this.state

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      name === ''

    return (
      <form onSubmit={this.onSubmit}>

      <input
        value={email}
        onChange={event => this.setState(byPropKey('email', event.target.value))}
        type="text"
        placeholder="Email Address"
        className="signUpInput"
      />
      <input
        value={passwordOne}
        onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
        type="password"
        placeholder="Password"
        className="signUpInput"
      />
      <input
        value={passwordTwo}
        onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
        type="password"
        placeholder="Confirm Password"
        className="signUpInput"
      />
      <input
        value={name}
        onChange={event => this.setState(byPropKey('name', event.target.value))}
        type="text"
        placeholder="Name"
        className="signUpInput"
      />
      <input
        value={phone}
        onChange={event => this.setState(byPropKey('phone', event.target.value))}
        type="phone"
        placeholder="Phone Number"
        className="signUpInput"
      />
      <input
        value={bestTime}
        onChange={event => this.setState(byPropKey('bestTime', event.target.value))}
        type="bestTime"
        placeholder="Best Time to Call"
        className="signUpInput"
      />
      <div className="signUpSubmitButton">
      <button disabled={isInvalid} type="submit">
        Sign Up
      </button>
      </div>

      { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to="/signup">Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};