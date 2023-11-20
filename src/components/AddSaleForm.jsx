import React, { useState } from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addSale } from '../redux/actions/saleActions';

const AddSaleForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [saleDescription, setSaleDescription] = useState('');
  const [saleAmount, setSaleAmount] = useState('');

  const handleAddSale = () => {
    // Basic input validation
    if (!saleDescription || !saleAmount) {
      toast({
        title: 'Incomplete Form',
        description: 'Please fill in all fields.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Convert amount to a number
    const amount = parseFloat(saleAmount);

    if (isNaN(amount) || amount <= 0) {
      toast({
        title: 'Invalid Input',
        description: 'Please enter a valid sale amount.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Dispatch the addSale action
    dispatch(addSale({ description: saleDescription, amount }));

    // Reset form fields
    setSaleDescription('');
    setSaleAmount('');

    // Show success message
    toast({
      title: 'Sale Added',
      description: 'The sale has been recorded.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack align="start" spacing={4}>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input
          type="text"
          value={saleDescription}
          onChange={(e) => setSaleDescription(e.target.value)}
          placeholder="Enter sale description"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Amount</FormLabel>
        <NumberInput value={saleAmount} onChange={(value) => setSaleAmount(value)}>
          <NumberInputField placeholder="Enter sale amount" />
        </NumberInput>
      </FormControl>
      <Button colorScheme="teal" onClick={handleAddSale}>
        Add Sale
      </Button>
    </VStack>
  );
};

export default AddSaleForm;
