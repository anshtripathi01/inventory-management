import { Flex,  Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <Flex w = "100%" flexDirection="column" justifyContent="center" alignItems="center">
        <Heading size="md" m={2} >Welcome To Inventory Management</Heading>
        <Link to = "/items" ><Button colorScheme='teal'>Check Inventory</Button></Link>
    </Flex>
  )
}
