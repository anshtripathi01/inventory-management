import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Text, VStack, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const InventoryReport = () => {
  const items = useSelector((state) => state.items.items);

  return (
    <VStack align="start" spacing={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Inventory Report
      </Text>
      <Box>
        {items.length === 0 ? (
          <Text>No items found for the inventory report.</Text>
        ) : (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Item Name</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.name}</Td>
                  <Td>{item.quantity}</Td>
                  <Td>${item.price.toFixed(2)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </Box>
    </VStack>
  );
};

export default InventoryReport;
