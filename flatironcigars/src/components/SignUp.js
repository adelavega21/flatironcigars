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
          <input name="name" placeholder="name"/><br/>
          <input name="username" placeholder="username"/><br/>
          <input name="password" type="password"  placeholder="password"/><br/>
          <input name="passwordConfirmation"  type="password"  placeholder="password confirmation"/><br/><br/>
          <button className="login" type="submit">Sign Up!</button>
        </form>
      </div>
    )
  }
  
}

export default SignUp