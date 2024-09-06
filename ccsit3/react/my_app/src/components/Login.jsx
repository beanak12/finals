import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          <h1>Login</h1>
          {/* Name&nbsp;&nbsp;<input type="text" name="" id="" /><br></br><br /> */}
          {/* Password &nbsp;&nbsp;<input type="password" name="" id="" /><br></br><br /> */}
          <TextField label="Name" variant="outlined" /><br /><br />
          <TextField type="Password" label ="Password" variant="outlined" /><br/><br/>
          <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Login