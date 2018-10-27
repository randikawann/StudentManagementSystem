import React, { Component } from 'react'

export default class SignIn extends Component {
  render() {
    return (
      <div class= "container signInform">
        <form>
          <div class="form-group">
            <label for="userreglabel">Registration Number</label>
            <input type="text" class="form-control" id="userRegNum"  placeholder="Enter Registration Number"/>
          </div>
          <div class="form-group">
            <label for="userreglabel">Password</label>
            <input type="password" class="form-control" id="userRegNum"  placeholder="Enter Password"/>
          </div>
          <div>
          <a href="/signUp">Create new account</a>
          </div>
          <div>
          <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
          
        </form>
      </div>
    )
  }
}
