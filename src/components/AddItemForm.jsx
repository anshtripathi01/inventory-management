import React, { useState } from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions/itemActions';

const AddItemForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleAddItem = () => {
    // Basic input validation
    if (!itemName || !itemQuantity || !itemPrice) {
      toast({
        title: 'Incomplete Form',
        description: 'Please fill in all fields.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Convert quantity and price to numbers
    const quantity = parseInt(itemQuantity, 10);
    const price = parseFloat(itemPrice);

    if (isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
      toast({
        title: 'Invalid Input',
        description: 'Please enter valid quantity and price.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Dispatch the addItem action
    dispatch(addItem({ name: itemName, quantity, price }));

    // Reset form fields
    setItemName('');
    setItemQuantity('');
    setItemPrice('');

    // Show success message
    toast({
      title: 'Item Added',
      description: 'The item has been added to the inventory.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack align="start" spacing={4}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name"
        />
      </FormControl>
      <Stack spacing={4} direction={{ base: 'column', md: 'row' }}>
        <FormControl>
          <FormLabel>Quantity</FormLabel>
          <NumberInput value={itemQuantity} onChange={(value) => setItemQuantity(value)}>
            <NumberInputField placeholder="Enter quantity" />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <NumberInput value={itemPrice} onChange={(value) => setItemPrice(value)}>
            <NumberInputField placeholder="Enter price" />
          </NumberInput>
        </FormControl>
      </Stack>
      <Button colorScheme="teal" onClick={handleAddItem}>
        Add Item
      </Button>
    </VStack>
  );
};

export default AddItemForm;
