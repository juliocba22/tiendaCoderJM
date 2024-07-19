// src/pages/CartPage.jsx
import React, { useContext } from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import Context from '../../context/CartContext';

const CartPage = () => {
  const { cart, clearCart, removeItem, total, stock, finalizePurchase } = useContext(Context);
 /* const navigate = useNavigate();

  const handleFinalizePurchase = async () => {
    await finalizePurchase();
    navigate('/factura');
  };*/

  return (
    <Box mt={5} p={10} bgGradient="linear(to-r, teal.300, yellow.400)" borderRadius="md" boxShadow="lg">
      <Heading textAlign="center" color="white" mb={6}>Carrito</Heading>
      <Flex direction="column" align="center">
        {cart.map((item) => (
          <Box key={item.id} mb={4} p={4} bg="white" borderRadius="md" w="100%">
            <Text><strong>Producto:</strong> {item.nombre}</Text>
            <Text><strong>Cantidad:</strong> {item.quantity}</Text>
            <Text><strong>Precio:</strong> ${item.precio}</Text>
            <Text><strong>Total:</strong> ${item.precio * item.quantity}</Text>
            <Button colorScheme="red" onClick={() => removeItem(item.id)}>Eliminar</Button>
          </Box>
        ))}
        <Text mt={4} fontSize="xl" color="white">Total: ${total}</Text>
        <Link to="/factura">
          <Button colorScheme="blue">Finalizar Compra</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default CartPage;
