import React from 'react'

export const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Short the link</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div>
              <div className="input-field">
                <input placeholder="Enter email" id="email" type="email" className="yellow-input" name="email" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input placeholder="Enter password" id="password" type="password" className="yellow-input" name="password" />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4" style={{marginRight: 10}}>Login</button>
            <button className="btn green lighten-1 black-text">Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}