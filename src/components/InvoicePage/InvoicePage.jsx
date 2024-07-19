// src/pages/InvoicePage.jsx
import React, { useContext } from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import Context from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const InvoicePage = () => {
   const { cart, total, finalizePurchase } = useContext(Context);
   const navigate = useNavigate();

   const handleFinalize = async () => {
      try {
         await finalizePurchase();
         navigate('/'); // Navega de vuelta a la página principal después de finalizar la compra
      } catch (error) {
         console.error('Error finalizing purchase:', error);
      }
   };

   return (
      <Box mt={5} p={10} bgGradient="linear(to-r, teal.300, yellow.400)" borderRadius="md" boxShadow="lg">
         <Heading textAlign="center" color="white" mb={6}>Factura</Heading>
         <Flex direction="column" align="center">
            {cart.length > 0 ? (
               cart.map((item) => (
                  <Box key={item.id} mb={4} p={4} bg="white" borderRadius="md" w="100%">
                     <Text><strong>Producto:</strong> {item.nombre}</Text>
                     <Text><strong>Descripción:</strong> {item.descripcion}</Text>
                     <Text><strong>Cantidad:</strong> {item.quantity}</Text>
                     <Text><strong>Precio:</strong> ${item.precio}</Text>
                     <Text><strong>Total:</strong> ${item.precio * item.quantity}</Text>
                  </Box>
               ))
            ) : (
               <Text>No hay productos en el carrito.</Text>
            )}
            <Text mt={4} fontSize="xl" color="white">Total: ${total}</Text>
            <Button colorScheme="blue" onClick={handleFinalize}>Finalizar</Button>
         </Flex>
      </Box>
   );
};

export default InvoicePage;
