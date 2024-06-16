import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../data/asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box mt={5} p={10} bgGradient="linear(to-r, teal.300, yellow.400)" borderRadius="md" boxShadow="lg">
      <Flex direction="column" align="center" justify="center">
        <Heading className="titulo" mb={6} textAlign="center" color="white">
          {greeting}
        </Heading>
        <ItemList products={products} />
      </Flex>
    </Box>
  );
};

export default ItemListContainer;
