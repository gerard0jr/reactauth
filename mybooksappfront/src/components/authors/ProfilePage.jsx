import React, { Component } from 'react'
import {profile} from '../../services/auth'

class ProfilePage extends Component {

    state={
        user: {}
    }

    componentDidMount(){
        profile()
        .then(user => this.setState({user}))
        .catch(e => console.log(e))

        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
        if(!loggedUser) return this.props.history.push('/login')
    }

  render() {
      const { user } = this.state 
      
    return (
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    )
  }
}

export default ProfilePage