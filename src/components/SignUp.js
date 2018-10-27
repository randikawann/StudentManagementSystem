import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
        <div class = "container signUpform">
        <form>

        <div class="form-group">
          <label for="userreglabel">User Registration Number</label>
          <input type="text" class="form-control" id="userRegNum"  placeholder="Enter Registration Number (Ex : EP2001)"/>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <label for="userFirstNamelabel">First Name</label>
            <input type="text" class="form-control" id="userFirstName"  placeholder="Enter First Name"/>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <label for="userLastNamelabel">Last Name</label>
            <input type="text" class="form-control" id="userLastName"  placeholder="Enter Last Name"/>
          </div>
        </div>
        
        <div class="form-group">
          <label for="departmentNamelabel">Department Name</label>
          <select id="departmentName" class="form-control">
            <option selected>Choose...</option>
            <option>Computing and Information Systems</option>
            <option>Food Science & Technology</option>
            <option>Natural Resource</option>
            <option>Physical Science & Technology</option>
            <option>Sport Management & Physical Education</option>
          </select>
        </div>
        <div class="form-group">
          <label for="graduatedYearlabel">Graduated Year</label>
          <select id="graduatedYear" class="form-control">
            <option selected>Choose...</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </select>
        </div>
        <div class="form-group">
            <label for="userreglabel">Password</label>
            <input type="password" class="form-control" id="userRegNum"  placeholder="Enter Password"/>
        </div>
        <div class="form-group">
            <label for="userreglabel">Password</label>
            <input type="password" class="form-control" id="userRegNum"  placeholder="Enter Password"/>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
        </form>  
      </div>
    )
  }
}
