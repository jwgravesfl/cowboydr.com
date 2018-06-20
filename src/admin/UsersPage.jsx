import React, { Component } from 'react'

import { connect } from 'react-redux'
import { compose } from 'recompose'

import styled from 'styled-components'

import withAuthorization from '../login/withAuthorization'
import { db } from '../firebase'
import LoginNav from '../navbar/LoginNav';

const UsersPageDiv = styled.div `
  padding: 5vh;
`

class UsersPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: null,
      
    }
  }

  componentDidMount() {
    const { onSetUsers } = this.props

    db.onceGetUsers().then(snapshot =>
      onSetUsers(snapshot.val())
    );
  }


  
  render() {

    console.log(this.state)
    const { users } = this.props

    return (
      <UsersPageDiv>
      <LoginNav />
        <h1>Users</h1>
        <p>The Users Page is accessible by every signed in user.</p>

        { !!users && <UserList users={users} /> }
      </UsersPageDiv>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    
    {Object.keys(users).map(key =>
      <div key={key} className="" >{users[key].username}</div>
    )}
  </div>

const mapStateToProps = (state) => ({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
});

const authCondition = (authUser) => !!authUser

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(UsersPage)