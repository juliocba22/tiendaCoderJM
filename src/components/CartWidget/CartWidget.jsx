import React from 'react'
import {IoCartOutline} from 'react-icons/io5';
import {Box} from '@chakra-ui/react';
const CartWidget = ({stock}) => {
  return (
    <Box m={2} >
        <IoCartOutline />{stock}
    </Box>
  )
}

export default CartWidget
