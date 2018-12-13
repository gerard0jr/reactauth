import React from 'react'

const SignupForm = ({signup, handleText}) => {
  return (
    <div>
      Signup
      <form action="POST" onSubmit={signup}>
          <p>
              Name:
              <input onChange={handleText} type="text" name="name"/>
          </p>
          <p>
              Email:
              <input onChange={handleText} type="text" name="email"/>
          </p>
          <p>
              Password:
              <input onChange={handleText} type="text" name="password"/>
          </p>
          <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default SignupForm
