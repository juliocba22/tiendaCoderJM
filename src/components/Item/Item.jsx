import React from 'react';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom

const Item = ({ id, nombre, precio, img, categoria, stock, descripcion }) => {
    return (
        <Center py={4}>
            <Box
                role={'group'}
                p={4}
                maxW={'220px'} // Ajustado para que quepan 5 en una línea
                w={'full'}
                bg={useColorModeValue('#F6FEFB', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
            >
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'160px'} // Ajustado el tamaño
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${img})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}
                >
                    <Image
                        rounded={'lg'}
                        height={160} // Ajustado el tamaño
                        width={282}
                        objectFit={'cover'}
                        src={img}
                        alt={nombre}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        {categoria}
                    </Text>
                    <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500} textAlign="center">
                        {nombre}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'lg'}>
                            ${precio}
                        </Text>
                        <Text textDecoration={'line-through'} color={'gray.600'}>
                            $199
                        </Text>
                    </Stack>
                    <Button mt={4} size="sm" >
                        <Link to={`/producto/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
                            Ver detalle
                        </Link>
                    </Button>
                </Stack>
            </Box>
        </Center>
    );
};

export default Item;
