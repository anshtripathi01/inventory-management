import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineStock, AiOutlineDollar, AiFillPieChart } from 'react-icons/ai';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="teal.500" p={4} width="100%">
      <Flex alignItems="center" maxWidth="1200px" mx="auto">
        <Heading as="h1" size="lg" color="white">
          Inventory Management
        </Heading>
        <Spacer />
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" color="white" mx={2}>
            <AiOutlineHome /> Home
          </Link>
          <Link as={RouterLink} to="/items" color="white" mx={2}>
            <AiOutlineStock /> Inventory
          </Link>
          <Link as={RouterLink} to="/sales" color="white" mx={2}>
            <AiOutlineDollar /> Sales
          </Link>
          <Link as={RouterLink} to="/add-item" color="white" mx={2}>
            Add Item
          </Link>
          <Link as={RouterLink} to="/add-sale" color="white" mx={2}>
            Add Sale
          </Link>
          <Link as={RouterLink} to="/sales-report" color="white" mx={2}>
            <AiFillPieChart /> Sales Report
          </Link>
           <Link as={RouterLink} to="/inventory-report" color="white" mx={2}>
            <AiFillPieChart /> Inventory Report
          </Link>
          <IconButton
            aria-label="Toggle Color Mode"
            icon={colorMode === 'light' ? <HiOutlineMoon /> : <HiOutlineSun />}
            onClick={toggleColorMode}
            color="white"
            ml={2}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
