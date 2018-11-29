import React, { Component } from 'react'
import {Box, Text, Heading, Image} from 'gestalt';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <Box display="flex" alignItems="center" justifyContent="around" height={70} color="midnight" padding={1} shape="roundedBottom ">
        <NavLink activeClassName="active" to="/signin">
          <Text size="xl" color="white">Signin</Text>
        </NavLink>

        {/* {title and logo} */}
        <NavLink activeClassName="active" exact to="/">
          <Box display="flex" alignItems="center">
            <Box width={50} height={50} margin={2}>
              <Image alt="brewhaha logo" naturalHeight={1} naturalWidth={1} naturalHeight={1} src="./icons/logo.svg"></Image>
            </Box>
            <Heading size="xs" color="orange">BrewHaha</Heading>
          </Box>
        </NavLink>

        <NavLink activeClassName="active" to="/signup">
          <Text size="xl" color="white">Signup</Text>
        </NavLink>
      </Box>
    )
  }
}
