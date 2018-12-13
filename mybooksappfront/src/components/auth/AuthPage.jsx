import React, { Component } from 'react';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {signup, login} from '../../services/auth'

class AuthPage extends Component {

    state={
        user: {}
    }

    signup = (e) => {
        const { user } = this.state
        e.preventDefault()
        signup(user)
        .then(r => console.log(r))
        .catch(e => console.log(e))
    }
    
    handleText = (e) => {
        const { user } = this.state
        const field = e.target.name
        user[field] = e.target.value
        this.setState({user})
    }

    login = (e) => {
        const { user } = this.state
        e.preventDefault()
        login(user)
        .then(r => {
            localStorage.setItem('loggedUser', JSON.stringify(r))
            this.props.history.push('/profile')
            console.log(r)
        })
        .catch(e => console.log(e))
    }


    render() {
        const { pathname } = this.props.location
        const { signup, handleText, login } = this
        return (<div>
            <div>
                {pathname === '/login' ?
                    <LoginForm login={login} handleText={handleText}/>
                    :
                    <SignupForm signup={signup} handleText={handleText} />
                }
            </div>
        </div>)
    }
}

export default AuthPage