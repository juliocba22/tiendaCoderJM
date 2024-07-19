// src/components/ItemListContainer/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { db } from '../../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting, categoryId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const collectionRef = collection(db, 'productos');
      const queryRef = !categoryId ? collectionRef : query(collectionRef, where('categoria', '==', categoryId));
      
      const response = await getDocs(queryRef);
      const productos = response.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter(product => product.stock > 0); // Filtrar productos con stock mayor a 0

      setProducts(productos);
      setLoading(false);
    };

    getData();
  }, [categoryId]);

  return (
    <Box mt={5} p={10} bgGradient="linear(to-r, teal.300, yellow.400)" borderRadius="md" boxShadow="lg">
      <Flex direction="column" align="center" justify="center">
        <Heading className="titulo" mb={6} textAlign="center" color="white">
          {greeting}
        </Heading>
        {loading ? (
          <Flex justify={'center'} align={'center'} h={'50vh'}>
            Cargando productos...
          </Flex>
        ) : (
          <ItemList products={products} />
        )}
      </Flex>
    </Box>
  );
};

export default ItemListContainer;
