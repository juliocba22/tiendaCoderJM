import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import { useParams } from 'react-router-dom';
 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext'
import CartPage from './components/CartPage/CartPage';
import InvoicePage from './components/InvoicePage/InvoicePage'; // Importa el nuevo componente
function App() {
  

   return (
       <ChakraProvider>
         <CartContextProvider>
           <BrowserRouter>
               <NavBar />
               <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/categorias/:categoryId" element={<ItemListPage />} />
                   <Route path="/producto/:productId" element={<ItemDetailPage />} />
                   <Route path="/carrito" element={<CartPage />} />
                   <Route path="/factura" element={<InvoicePage />} /> 
                   <Route path="*" element={<NotFound />} />
               </Routes>

             
           </BrowserRouter>
           </CartContextProvider>
       </ChakraProvider>
   );
}

const Home = () => (
   <ItemListContainer greeting="Bienvenidos a nuestra tienda" />
);

const ItemListPage = () => {
   let { categoryId } = useParams();
   return <ItemListContainer greeting={`Productos de la categoría ${categoryId}`} categoryId={categoryId}  />;
};

const ItemDetailPage = () => {
   let { productId } = useParams();
   return <ItemDetailContainer productId={productId} />;
};

const NotFound = () => (
   <div>
       <h2>404 - Página no encontrada</h2>
   </div>
);

export default App;