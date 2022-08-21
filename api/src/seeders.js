
  const initialProducts = [
    {
      name: "Trago 1",
      description: "Jugo natural de frutas, sin alcohol",
      price: 100,
      stock: 80000,
    },
    {
      name: "Trago 2",
      description: "Jugo natural de frutas. Bebida alcohólica",
      price: 4500,
      stock: 500,
    },
    {
      name: "Shirley Template",
      description: "Jugo natural de frutas, bebidas blancas alcohólicas",
      price: 5000,
      stock: 0,
    },
    {
      name: "Trago 3",
      description: "Rico en vitaminas",
      price: 5000,
      stock: 200,
    },
    {
      name: "Trago 4",
      description: "Un lujo de bebida",
      price: 500,
      stock: 30,
    },
    {
      name: "Trago 5",
      description: "El mejor",
      price: 500,
      stock: 150,
    },
    {
      name: "Gaseosa de lima",
      description: "Sabor referscante",
      price: 500,
      stock: 2000,
    },
  
    {
      name: "Gaseosa de naranja",
      description: "Puro sabor a naranja natural",
      price: 500,
      stock: 0,
    },
    {
      name: "Agua envasada",
      description: "Lo mejor de los manantiales",
      price: 8500,
      stock: 2000,
    },
    {
      name: "Licuado de ananá",
      description: "Fruta fresca. El mejor sabor",
      price: 9000,
      stock: 2000,
    },
    {
      name: "Limonada",
      description:
        "Limones recién exprimidos",
      price: 1500,
      stock: 20000,
    },
    {
      name: "Licuado de durazno",
      description: "La mejor fruta fresca le da un toque original.",
      price: 120000,
      stock: 1,
    },
    {
      name: "Agua saborizada",
      description:
        "Sabor intenso, poca azúcar",
      price: 9500,
      stock: 2000,
    },
    {
      name: "Gaseosa ligth cola",
      description: "Sin azúcar. Sabor original",
      price: 500,
      stock: 2000,
    },
    {
      name: "Manhattan",
      description: "El mejor trago, libre de alcohól",
      price: 6500,
      stock: 2000,
    },
    {
      name: "Sangria",
      description: "Copa fría de jugo de naranjas y vino tinto.",
      price: 800,
      stock: 2000,
    },
  ];
  
  let imageUrls = [];
  
  /*bruteDataImages.map((e, i) => {
    imageUrls.push({
      url: `https://res.cloudinary.com/dgct44k9s/image/upload/v1648941439/apiDrinks/shirleyTemple_qvwebl.jpg`,
      productId: i + 1,
    });
    imageUrls.push({
      url: `https://res.cloudinary.com/dgct44k9s/image/upload/v1648941439/apiDrinks/shirleyTemple_qvwebl.jpg`,
      productId: i + 1,
    });
    imageUrls.push({
      url: `https://res.cloudinary.com/dgct44k9s/image/upload/v1648941439/apiDrinks/shirleyTemple_qvwebl.jpg`,
      productId: i + 1,
    });
  });*/
  
  let initialUsers = [ 
    {
      email: "ele@admin.com",
      first_name: "Ele",
      last_name: "Gonzalez",
      address: "Av siempre viva 123",
      locality: "Corrientes",
      state: "Argentina",
      password: "123",
      admin: true,
      securityQuestion: "Comida favorita",
      securityAnswer: "Asado",
    },
    {
      email: "ele@market.com",
      first_name: "Ele",
      last_name: "Gonzalez",
      address: "Av siempre viva 123",
      locality: "Corrientes",
      state: "Argentina",
      password: "123",
      admin: false,
      securityQuestion: "Quien era tu mejor amiga en la primaria?",
      securityAnswer: "Carla",
    }
  ];
  
  let initialOrders = [
    {
      orderStatus: "completa",
      userId: 1,
      checkoutDate: "2020-09-07T11:49:56.000Z"
    },
    {
      orderStatus: "completa",
      userId: 2,
      checkoutDate: "2020-09-07T11:49:56.000Z"
    }
  ];
  
  let initialOrderLines = [
    {
      productId: 3,
      orderId: 1,
      quantity: 6,
      price: 50,
    },
    {
      productId: 2,
      orderId: 1,
      quantity: 3,
      price: 12,
    },
    {
      productId: 5,
      orderId: 2,
      quantity: 7,
      price: 2354,
    },
    {
      productId: 7,
      orderId: 2,
      quantity: 5,
      price: 123,
    }
  ];
 
  
  module.exports = {
    initialProducts,
    imageUrls,
    initialUsers,
    initialOrders,
    initialOrderLines,
  };
  