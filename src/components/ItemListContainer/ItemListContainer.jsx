import {Heading,Flex} from '@chakra-ui/react'
import React from 'react'
import './ItemListContainer.css'
const ItemListContainer = ({greeting}) => {
  return (
    <Flex justify={'center'} align={'center'}> 
      <Heading className='titulo'>{greeting}</Heading>
    </Flex>
  )
}

export default ItemListContainer
