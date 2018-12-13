import React from 'react'

const LoginForm = ({login, handleText}) => {
  return (
    <div>
      Login
      <form action="POST" onSubmit={login}>
          <p>
              Email:
              <input onChange={handleText} type="text" name="email"/>
          </p>
          <p>
              Password:
              <input onChange={handleText} type="text" name="password"/>
          </p>
          <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
