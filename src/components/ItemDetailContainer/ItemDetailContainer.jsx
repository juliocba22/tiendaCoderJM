import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock'; // Ajustar según tu método para obtener un producto por ID
import { db } from '../../config/firebase';
import { collection, query, where, getDocs, doc , getDoc } from 'firebase/firestore';
const ItemDetailContainer = ({ productId }) => {
    const [product, setProduct] = useState(null);

    /*useEffect(() => {
        getProductById(productId) // Implementa esta función en tu archivo de datos
            .then((res) => setProduct(res))
            .catch((error) => console.log(error));
    }, [productId]);*/

    useEffect(() => {
        const getData = async()=>{
            const queryRef=doc(db,'productos',productId)
console.log('------------------------')

            const response = await getDoc(queryRef)

            const newItem = {
                ...response.data(),id:response.id
            }
            console.log(response.data)
        
            setProduct(newItem)
           // setLoading(true)
        }
        getData()
    }, [ ]);

    return (
        <Box mt={5} p={10} bgGradient="linear(to-r, teal.300, yellow.400)" borderRadius="md" boxShadow="lg">
            {product ? (
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
                            {/* Mostrar la imagen del producto */}
                            <Flex mt={4} justify="center">
                                <Image src={product.img} alt={product.nombre} maxW="200px" />
                            </Flex>
                            <Flex mt={4} justify="center">
                                <Button colorScheme="teal" mr={2}>
                                    Agregar al carrito
                                </Button>
                                <Button colorScheme="gray">
                                    <Link to="/">Volver al catálogo</Link>
                                </Button>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            ) : (
                <Heading textAlign="center" color="white">
                    Cargando producto...
                </Heading>
            )}
        </Box>
    );
};

export default ItemDetailContainer;
