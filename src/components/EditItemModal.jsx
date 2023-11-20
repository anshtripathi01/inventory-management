import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { editItem } from '../redux/actions/itemActions';

const EditItemModal = ({ isOpen, onClose, item }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [editedItem, setEditedItem] = useState({
    name: '',
    quantity: 0,
    price: 0.0,
  });

  useEffect(() => {
    if (item) {
      setEditedItem({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      });
    }
  }, [item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: name === 'quantity' ? parseInt(value, 10) : parseFloat(value),
    }));
  };

  const handleUpdateItem = () => {
    dispatch(editItem(item.id, editedItem));

    toast({
      title: 'Item Updated',
      description: 'The item has been updated.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={editedItem.name}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Quantity</FormLabel>
            <Input
              type="number"
              name="quantity"
              value={editedItem.quantity}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              name="price"
              step="0.01"
              value={editedItem.price}
              onChange={handleInputChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" onClick={handleUpdateItem}>
            Update Item
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditItemModal;
