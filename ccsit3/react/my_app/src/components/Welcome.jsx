import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Welcome = () => {
    var [name1, fname] = useState()
    const R = () => {
        fname('To Angular')
    }
    const A = () => {
        fname('To Node')
    }
    const b = () => {
        fname('To React')
    }
    useEffect(() => {
        b()
    }, [])

  return (
    <div>
          <Typography variant='h6'> Welcome {name1} </Typography>
          <Button variant='contained' onClick={R}>Angular</Button>&nbsp;&nbsp;
          <Button variant='contained' onClick={A}> Node</Button>&nbsp;&nbsp;
          <Button variant='contained' onClick={b}>React </Button>
          
    </div>
  )
}

export default Welcome
