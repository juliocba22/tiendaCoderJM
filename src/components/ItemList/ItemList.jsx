import React from 'react';
import Item from '../Item/Item';
import { Box, Flex } from '@chakra-ui/react';

const ItemList = ({ products }) => {
    return (
        <Flex wrap="wrap" justify="space-between" align="center" mt={5} mb={5}>
            {products.map((prod) => (
                <Box key={prod.id} m={2} p={2}>
                    <Item {...prod} />
                </Box>
            ))}
        </Flex>
    );
};

export default ItemList;
