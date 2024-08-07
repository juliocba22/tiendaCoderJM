export const productos = [
  {
    id: 1,
    nombre: "Remera Studio Ghibli Miyazaki",
    precio: 8500,
    categoria: "Remeras",
    stock: 5,
    descripcion:
      "Las remeras son 100% algodón peinado 24/1 (Premium).No se deforman, ni pierden el color.",
    img: "https://acdn.mitiendanube.com/stores/819/313/products/208h1-add4872d6d76a1ea8716530734948442-1024-1024.jpg",
  },
  {
    id: 2,
    nombre: "Buzo El viaje de Chihiro",
    precio: 13000,
    categoria: "Buzos",
    stock: 5,
    descripcion:
      "Buzo Unisex 100% Algodón. Cuello Redondo con refuerzo en los cuellos y mangas",
    img: "https://acdn.mitiendanube.com/stores/819/313/products/161bg1-1783beadd7dedcbe0b16824436734220-1024-1024.webp",
  },
  {
    id: 3,
    nombre: "Pijama Totorossssssssssss",
    precio: 8900,
    categoria: "Pijamas",
    stock: 5,
    descripcion:
      "Los Pants son de lycra y modal calidad premium, cómodos, súper suaves, livianos y frescos para usarlos tranqui en casa o dónde quieras. Tienen cintura elastizada con con cordón regulable para ajustarlos hasta estar cómodos. La tela no encoje, los estampados no decoloran y es por eso que todas nuestras prendas cuentan con garantía de estampado.",
    img: "https://peluchemania.fr/cdn/shop/files/H7c880b4462a64fe78a88816f7d14f94eF.jpg?v=1696758933",
  },
  {
    id: 4,
    nombre: "Remera Mononoke Poster",
    precio: 9900,
    categoria: "Remeras",
    stock: 5,
    descripcion:
      "Los remerones son 100% algodón peinado 24/1 (Premium).No se deforman, ni pierden el color.",
    img: "https://acdn.mitiendanube.com/stores/819/313/products/1063h1-34d306afad7d74bc7f16530740622289-1024-1024.webp",
  },
  {
    id: 5,
    nombre: "Zapatillas Studio Ghibli",
    precio: 14900,
    categoria: "Zapatillas",
    stock: 5,
    descripcion:
      "Zapatilla de lona reforzada. Pintada a mano con pintura de calidad.",
    img: "https://ghibli-merch.com/wp-content/uploads/2022/11/Ghibli-Characters-Light-Blue-AJ-Shoes.jpg",
  },
];


export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("LLEGO" + id);
          const product = productos.find((prod) => prod.id === parseInt(id));
          if (product) {
              resolve(product);
          } else {
              reject(new Error(`Producto con id ${id} no encontrado`));
          }
      }, 1000); // Simulamos una pequeña demora de 1 segundo
  });
};

export const getProducts = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(productos);
      }, 2000);
  });
};