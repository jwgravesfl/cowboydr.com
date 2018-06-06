import React, { Component } from 'react';

import withAuthorization from '../login/withAuthorization';
import { db } from '../firebase';

class UsersPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: null,
    }
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;
    return (
      <div style={{ marginTop: '15vh'}} >
        <h1>Users</h1>
        <p>The Users Page is accessible by every signed in user.</p>

        { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(UsersPage);