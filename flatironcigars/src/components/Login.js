import React from 'react'

class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/api/v1/users")
    .then(res => res.json())
    .then(response => {
        let getCurrentUser = response.filter(user => user.username === this.state.username)
        this.props.setUser(getCurrentUser[0])
    })
    this.props.history.push("/")
  }

  render(){
    return (
      <div className="center-form">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <label className="align-left">Username: </label>
          <input className="align-right" name="username" value={this.state.username} onChange={this.handleChange}placeholder="username"/><br/>
          <label className="align-left">Password: </label>
          <input className="align-right" name="password" value={this.state.password} type="password"  onChange={this.handleChange}placeholder="password"/><br/>

          <button className="login" type="submit">Log In</button>
        </form>
      </div>
    )
  }
  
}

export default Login