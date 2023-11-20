import React, { useEffect, useState } from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  IconButton,
  useToast,
  Center,
  Flex,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, fetchItems } from '../redux/actions/itemActions';
import EditItemModal from './EditItemModal';

const ItemList = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const {items} = useSelector((state) => state.items);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEditItem = (item) => {
    setSelectedItem(item);
    setEditModalOpen(true);
  };

  useEffect(()=>{
    dispatch(fetchItems())
  },[dispatch])

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));

    toast({
      title: 'Item Deleted',
      description: 'The item has been deleted.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex w="100%" justifyContent="center" flexWrap="wrap" alignItems="center" m="1rem">
      {items.length === 0 ? (
        <Center>
          <Text>No items found.</Text>
        </Center>
      ) : (
        items.map((item) => (
          <Box
            key={item.id}
            boxShadow="md"
            p={4}
            rounded="md"
            borderWidth="1px"
            borderColor="gray.200"
            _hover={{ bg: 'gray.100' }}
            m="1rem"
          >
            <Heading as="h3" size="md" mb={2}>
              {item.name}
            </Heading>
            <Text mb={4}>
              Quantity: {item.quantity} | Price: ${item.price.toFixed(2)}
            </Text>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 2, md: 4 }}
              justify="flex-end"
            >
              <IconButton
                icon={<i className="fas fa-edit" />}
                aria-label="Edit Item"
                onClick={() => handleEditItem(item)}
                variant="outline"
                colorScheme="teal"
                size="sm"
              />
              <Button
                colorScheme="red"
                onClick={() => handleDeleteItem(item.id)}
                size="sm"
              >
                Delete
              </Button>
            </Stack>
          </Box>
        ))
      )}

      <EditItemModal
        isOpen={editModalOpen}
        onClose={() => {
          setEditModalOpen(false);
          setSelectedItem(null);
        }}
        item={selectedItem}
      />
    </Flex>
  );
};

export default ItemList;
