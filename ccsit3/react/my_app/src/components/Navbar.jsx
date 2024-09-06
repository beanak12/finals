import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6'> My App</Typography>
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;

                  <Link to='/login'>
                      <Button variant="contained" color='error'>LOGIN</Button></Link>&nbsp;&nbsp;
                  <Link to='/'>
                      <Button variant="contained" color='error'>SIGNUP</Button></Link>&nbsp;
                  <Link to='/s'>
            <Button variant="contained" color='error'>State</Button></Link>&nbsp;
          <Link to='/c'>
            <Button variant="contained" color='error'>Counter</Button></Link>&nbsp;
          <Link to='/b'>
            <Button variant="contained" color='error'>Welcome</Button></Link>&nbsp;
          <Link to='/h'>
            <Button variant="contained" color='error'>Api</Button></Link>&nbsp;
          <Link to='/i'>
            <Button variant="contained" color='error'>Pokemon</Button></Link>&nbsp;
              </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
