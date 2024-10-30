
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../../services/userService'

// import SigninIcon from '../../assets/images/login.svg'

// Styles
// import styles from './SignIn.module.scss'

const SignIn = ({ setUser }) => {

  // ! State
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  // ! Location variables
  const navigate = useNavigate()

  // ! Event Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { user } = await signIn(formData) // sign in
      setUser(user) // set user to state
      navigate('/') // navigate to dashboard
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <section>
        {/* <img src={SignInIcon} alt="An owl sitting on a sign" /> */}
      </section>
      <section>
      <h1>Sign in</h1>
      <h2>Welcome Back! 👋</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="name"
              value={formData.username}
              name="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <button>Sign In</button> 
            <p>Don't have an account yet? <a href="/signUp">Sign Up</a></p>
            <Link to="/">
            </Link>
          </div>
        </form>
      </section>
    </main>
  )
}

export default SignIn