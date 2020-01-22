import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
state= {
 users: {username:'Paul'}
};

NamechangeHandler = (event) => {
this.setState({
  users: {username:event.target.value}

})
}


  render() {
    return (
      <div>
      <UserInput currentname={this.state.users.username}
      changedname={this.NamechangeHandler}/>
      <UserOutput username={this.state.users.username}/>
      </div>
    );
  }
}

export default App;
