import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, List, ListItem, Text, VStack, Spinner } from '@chakra-ui/react';
import { fetchSales } from '../redux/actions/saleActions';

const SaleList = () => {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales.sales);
  const isLoading = useSelector((state) => state.sales.isLoading);
console.log(sales);
  useEffect(() => {
    dispatch(fetchSales());
  }, [dispatch]);

  return (
    <VStack align="start" spacing={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Sale List
      </Text>
      {isLoading ? (
        <Spinner size="lg" />
      ) : (
        <Box>
          {sales.length === 0 ? (
            <Text>No sales found.</Text>
          ) : (
            <List>
              {sales.map((sale) => (
                <ListItem key={sale.id}>
                  <Text>{`${sale.description} - Amount: $${sale.amount.toFixed(2)}`}</Text>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      )}
    </VStack>
  );
};

export default SaleList;
