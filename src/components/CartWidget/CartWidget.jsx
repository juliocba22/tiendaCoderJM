// CartWidget.jsx
import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { Box } from '@chakra-ui/react';

const CartWidget = ({ stock }) => {
  return (
    <Box m={2} display="flex" alignItems="center" cursor="pointer">
      <IoCartOutline style={{ marginRight: '0.5rem' }} />
      {stock} {/* Muestra el stock o cantidad de productos en el carrito */}
    </Box>
  );
};

export default CartWidget;
