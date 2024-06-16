const productos = [
    {
      id: 1,
      nombre: "Camiseta Básica",
      precio: 19.99,
      categoria: "Camisetas",
      stock: 50,
      descripcion: "Camiseta de algodón 100% con cuello redondo.",
      img: "https://images.pexels.com/photos/1660809/pexels-photo-1660809.jpeg"
    },
    {
      id: 2,
      nombre: "Pantalones Vaqueros",
      precio: 49.99,
      categoria: "Pantalones",
      stock: 30,
      descripcion: "Pantalones vaqueros de corte ajustado y color azul oscuro.",
      img: "https://images.pexels.com/photos/804197/pexels-photo-804197.jpeg"
    },
    {
      id: 3,
      nombre: "Sudadera con Capucha",
      precio: 39.99,
      categoria: "Sudaderas",
      stock: 20,
      descripcion: "Sudadera con capucha y bolsillo delantero, color gris.",
      img: "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg"
    },
    {
      id: 4,
      nombre: "Vestido Floral",
      precio: 59.99,
      categoria: "Vestidos",
      stock: 15,
      descripcion: "Vestido con estampado floral y cintura ajustable.",
      img: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg"
    },
    {
      id: 5,
      nombre: "Chaqueta de Cuero",
      precio: 99.99,
      categoria: "Chaquetas",
      stock: 10,
      descripcion: "Chaqueta de cuero sintético, color negro.",
      img: "https://images.pexels.com/photos/1837593/pexels-photo-1837593.jpeg"
    },
    {
      id: 6,
      nombre: "Camisa de Cuadros",
      precio: 29.99,
      categoria: "Camisas",
      stock: 25,
      descripcion: "Camisa de cuadros de manga larga, color rojo y negro.",
      img: "https://images.pexels.com/photos/375582/pexels-photo-375582.jpeg"
    },
    {
      id: 7,
      nombre: "Falda Plisada",
      precio: 34.99,
      categoria: "Faldas",
      stock: 18,
      descripcion: "Falda plisada de longitud media, color azul marino.",
      img: "https://images.pexels.com/photos/4450341/pexels-photo-4450341.jpeg"
    },
    {
      id: 8,
      nombre: "Suéter de Lana",
      precio: 44.99,
      categoria: "Suéteres",
      stock: 22,
      descripcion: "Suéter de lana merina, color beige.",
      img: "https://images.pexels.com/photos/1813504/pexels-photo-1813504.jpeg"
    },
    {
      id: 9,
      nombre: "Parka Impermeable",
      precio: 89.99,
      categoria: "Abrigos",
      stock: 12,
      descripcion: "Parka impermeable con capucha, color verde oliva.",
      img: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg"
    },
    {
      id: 10,
      nombre: "Zapatillas Deportivas",
      precio: 69.99,
      categoria: "Calzado",
      stock: 35,
      descripcion: "Zapatillas deportivas para correr, color blanco.",
      img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
    }
  ];
export  const getProducts=()=>{
    return new Promise((res)=>{
        setTimeout(() => {
            res(productos);
        }, 2000);
    })
}
  