import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    
    var [fname, setfname] = useState('Abin')
    var[val,setVal]=useState()
    const handleInput = (e) => {
        console.log(e.target.value)
        setfname(e.target.value)
    
    }
    const submitHandler = () => {
        console.log("clicked");
        setVal(fname);
    }
    return (
      <div>
            <Typography variant='h4'> Welcome  {val} </Typography>
            <TextField variant="outlined" label='Enter you Name' onChange={handleInput} /><br /><br />
            <Button variant='contained' onClick={submitHandler}>submit</Button>
        </div>
  )
}

export default Statebasics
