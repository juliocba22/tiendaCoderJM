// src/components/ItemDetailContainer/ItemDetailContainer.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { db } from '../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Context from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = ({ productId }) => {
    const [product, setProduct] = useState(null);
    const { addItem } = useContext(Context);

    useEffect(() => {
        const getData = async () => {
            const queryRef = doc(db, 'productos', productId);
            const response = await getDoc(queryRef);
            const newItem = {
                ...response.data(),
                id: response.id
            };
            setProduct(newItem);
        };
        getData();
    }, [productId]);

    const onAdd = (quantity) => {
        if (product && product.stock > 0) {
            const { id, nombre, precio } = product;
            const item = { id, nombre, precio };
            addItem(item, quantity);
        }
    };

    if (!product) {
        return (
            <Box mt={5} p={10} bgGradient="linear(to-r, teal.300, yellow.400)" borderRadius="md" boxShadow="lg">
                <Heading textAlign="center" color="white">
                    Cargando producto...
                </Heading>
            </Box>
        );
    }

    return (
        <Box mt={5} p={10} bgGradient="linear(to-r, teal.300, yellow.400)" borderRadius="md" boxShadow="lg">
            <Flex direction="column" align="center">
                <Heading mb={4} textAlign="center" color="white">
                    Detalles de Producto
                </Heading>
                <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Text fontSize="sm" color="gray.500">
                                {product.categoria}
                            </Text>
                        </Box>
                        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                            {product.nombre}
                        </Box>
                        <Box>
                            <Box as="span" color="gray.600" fontSize="sm">
                                ${product.precio}
                            </Box>
                        </Box>
                        <Box mt="2" fontSize="sm" color="gray.600">
                            {product.descripcion}
                        </Box>
                        <Flex mt={4} justify="center">
                            <Image src={product.img} alt={product.nombre} maxW="200px" />
                        </Flex>
                        <Flex mt={4} justify="center">
                            <ItemCount stock={product.stock} valorInicial={1} onAdd={onAdd} />
                        </Flex>
                        <Flex mt={4} justify="center">
                            <Button colorScheme="gray">
                                <Link to="/">Volver al catálogo</Link>
                            </Button>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default ItemDetailContainer;
