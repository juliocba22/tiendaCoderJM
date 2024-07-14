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

function App() {
   const [count, setCount] = useState(0);

   return (
       <ChakraProvider>
           <BrowserRouter>
               <NavBar />
               <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/categorias/:categoryId" element={<ItemListPage />} />
                   <Route path="/producto/:productId" element={<ItemDetailPage />} />
                   <Route path="/cart" element={<Cart />} />
                   <Route path="/checkout" element={<Checkout />} />
                   <Route path="*" element={<NotFound />} />
               </Routes>

               <ItemCount />
           </BrowserRouter>
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