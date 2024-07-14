import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { getProducts } from '../../data/asyncMock'; // Asegúrate de importar solo lo necesario para evitar errores
import ItemList from '../ItemList/ItemList';
import { db } from '../../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ greeting, categoryId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
    
      const collecion = collection(db, 'productos');
       console.log("CONTAINER")
      const  queryRef =!categoryId? collecion : query(collecion, where('categoria', '==', categoryId));
       console.log(categoryId)
const response = await getDocs(queryRef)
const productos = response.docs.map((doc) => { 
                  const newItems = {
                    ...doc.data(),id:doc.id
                  }
                  return newItems;
                })
setProducts(productos)
setLoading(false)

 
      /*try {
        const querySnapshot = await getDocs(queryRef);
        //const productsData = querySnapshot.docs.map((doc) => doc.data());
        const newItems = {
          ...querySnapshot.data,id:querySnapshot.id
      }
        setProducts(newItems);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }*/
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
