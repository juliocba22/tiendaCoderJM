// src/components/NavBar/NavBar.js
import React, { useContext,useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import CartWidget from '../CartWidget/CartWidget';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/CartContext';

const NavBar = () => {
  const navigate = useNavigate();
  const { stock } = useContext(Context);
  const [categorias, setCategorias] = useState([
    { id: 0, nombre: 'Seleccione una categoría' },
    { id: 1, nombre: 'Pijamas' },
    { id: 2, nombre: 'Remeras' },
  ]);

  const handleCategoriaClick = async (categoryId) => {
    if (categoryId === 'Seleccione una categoría') {
      navigate(`/categorias/${categoryId}`);
    } else {
      const categoriaSeleccionada = categorias.find((c) => c.nombre === categoryId);
      if (categoriaSeleccionada) {
        navigate(`/categorias/${categoriaSeleccionada.nombre}`);
      } else {
        navigate(`/productos`);
      }
    }
  };

  const handleCartClick = () => {
    navigate('/carrito');
  };

  return (
    <Flex className="navbar" p="10px" h={'10vh'} w={'100%'} justify={'space-between'} align={'center'} backgroundColor={'#55868C'}>
      <Heading fontSize={'xl'} m={2}>
        Logo
      </Heading>
      <Box>
        <Flex align="center">
          <Heading as="h4" size="md" mr={4}>
            Categorías
          </Heading>
          <select onChange={(e) => handleCategoriaClick(e.target.value)} name="categoria">
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.nombre}>
                {categoria.nombre}
              </option>
            ))}
          </select>
        </Flex>
      </Box>
      <Box onClick={handleCartClick} cursor="pointer">
        <CartWidget stock={stock} />
      </Box>
    </Flex>
  );
};

export default NavBar;
