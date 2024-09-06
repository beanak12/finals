import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const [add, setva] = useState(0)

    const addition = () => {     
        setva(add + 1)
    }
    const substraction = () => {
        setva(add-1)
    }
  return (
    <div>
          <Typography variant='h6'> Count {add} </Typography>
          <Button variant='contained' onClick ={substraction}>-</Button>&nbsp;&nbsp;
          <Button variant='contained' onClick ={addition}> + </Button>

    </div>
  )
    
}

export default Counter
