import React from 'react'

class SignUp extends React.Component {

//   state = {
//     name: "",
//     username: "",
//     password: "",
//     passwordConfirmation: ""
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()

//     if (this.state.password === this.state.passwordConfirmation){
//       fetch("http://localhost:3000/api/v1/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify({name: this.state.name, username: this.state.username, password: this.state.password})
//       })
//       .then(res => res.json())
//       .then(response => {
//         if(response.errors){
//           alert(response.errors)
//         } else {
//           this.props.setUser(response)
//         }
//       })
//     } else {
//       alert("Passwords don't match!")
//     }

//   }

  render(){
    return (
      <div className="center-form">
          <form className="auth-form"> 
          <label className="align-left">Name: </label>
          <input className="align-right" name="name" placeholder="name"/><br/>
          <label className="align-left">Username: </label>
          <input className="align-right" name="username" placeholder="username"/><br/>
          <label className="align-left">Password: </label>
          <input className="align-right" name="password" type="password"  placeholder="password"/><br/>
          <label className="align-left">Confirm Password: </label>
          <input className="align-right" name="passwordConfirmation"  type="password"  placeholder="password confirmation"/><br/>
          <button className="login" type="submit">Sign Up!</button>
        </form>
      </div>
    )
  }
  
}

export default SignUp