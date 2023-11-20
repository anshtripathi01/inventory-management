import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Text, VStack, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const SaleReport = () => {
  const sales = useSelector((state) => state.sales.sales);

  return (
    <VStack align="start" spacing={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Sale Report
      </Text>
      <Box>
        {sales.length === 0 ? (
          <Text>No sales found for the sale report.</Text>
        ) : (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Description</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {sales.map((sale) => (
                <Tr key={sale.id}>
                  <Td>{sale.description}</Td>
                  <Td>${sale.amount.toFixed(2)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </Box>
    </VStack>
  );
};

export default SaleReport;
