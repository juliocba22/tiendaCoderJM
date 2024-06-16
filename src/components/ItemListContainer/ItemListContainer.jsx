import { Heading, Flex, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts } from '../../data/asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res))
      .catch((error) => console.log(error));
  }, []);

  console.log(products);

  return (
    <Box mt={5} p={35}>
    <Flex direction="column" align="center">
      <Heading className="titulo" mb={6} textAlign="center">
        {greeting}
      </Heading>
      <ItemList products={products} />
    </Flex>
  </Box>
  );
};

export default ItemListContainer;
