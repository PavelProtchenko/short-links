import React from 'react'
import {NavLink} from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <h1>Home page</h1>
              <div className="card-action">
                <p>
                  Welcome to <b>Short links</b> application. You may create your own short links to any
                  resource.
                </p>
              </div>
              <div className="card-action">
                <NavLink to="/create">Create your first short link</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}