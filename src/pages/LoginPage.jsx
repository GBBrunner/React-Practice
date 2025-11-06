import { useState } from 'react'
import InputField from '../componenets/Login/InputField.jsx'
import Toggle from '../componenets/Login/Toggle.jsx'
import SubmitBtn from '../componenets/Login/SubmitBtn.jsx'
import '../App.css'

function LoginPage() {
  const [toggle, setToggle] = useState(0)

  return (
      <div>
        <Toggle label="Login" index={0} active={toggle} onClick={setToggle} />
        <Toggle label="Sign Up" index={1} active={toggle} onClick={setToggle} />
        {toggle === 0 ? (
          <>
            <InputField label="Login" type="text" placeholder="Enter your login" value=""/>
            <InputField label="Password" type="password" placeholder="Enter your password" value=""/>
          </>
        ) : (
          <>
            <InputField label="Email" type="email" placeholder="Enter your email" value=""/>
            <InputField label="First Name" type="text" placeholder="Enter your first name" value=""/>
            <InputField label="Last Name" type="text" placeholder="Enter your last name" value=""/>
            <InputField label="Password" type="password" placeholder="Enter your password" value=""/>
            <InputField label="Confirm Password" type="password" placeholder="Confirm your password" value=""/>
          </>
        )}
        <SubmitBtn label={toggle === 0 ? "Login" : "Sign Up"} onClick={() => {
          const login = document.getElementById('Login')?.value || ''
          const password = document.getElementById('Password')?.value || ''
          const email = document.getElementById('Email')?.value || ''
          const firstName = document.getElementById('First Name')?.value || ''
          const lastName = document.getElementById('Last Name')?.value || ''
          if (toggle === 0) {
            console.log("Logging in with", login, password)
          } else {
            console.log("Signing up with", email, firstName, lastName, password)
          }
        }} />
      </div>
  )
}

export default LoginPage
