import React from 'react';
import Item from '../Item/Item';
import { Box, SimpleGrid } from '@chakra-ui/react';

const ItemList = ({ products }) => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
      {products.map((prod) => (
        <Box key={prod.id}>
          <Item {...prod} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ItemList;
