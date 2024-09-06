import { TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <h1>Signup</h1>
       <TextField label="Name" variant="outlined" /><br /><br />
      <TextField type="Password" label="Password" variant="outlined" /><br /><br />
      <TextField type="Password" label="RE-Enter Password" variant="outlined" /><br /><br />
      <TextField label="Email" variant="outlined" /><br /><br />
          
          <input type="button" value="Submit" />
    </div>
  )
}

export default Signup