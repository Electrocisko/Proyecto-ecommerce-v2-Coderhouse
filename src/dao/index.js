
const persistence = "mongodb";
let productsService;
let cartsService;
let usersService;
let ordersService;

switch (persistence) {
    // case "memory":
    //   const { default: MemProduct } = await import("./MemoryDAO/ProductsDAO.js");
    //   productsService = new MemProduct();
    //   const { default: MemCarts } = await import("./MemoryDAO/CartsDAO.js");
    //   cartsService = new MemCarts();
    //   break;
    // case "localfile":
    //   const { default: FileProduct } = await import("./FileDAO/FileProducts.js");
    //   productsService = new FileProduct();
    //   const { default: FileCarts } = await import("./FileDAO/FileCarts.js");
    //   cartsService = new FileCarts();
    //   const { default: FileUser } = await import("./FileDAO/FileUsers.js");
    //   usersService = new FileUser();
    //   break;
    case "mongodb":
      const { default: MongoProduct } = await import("./mongoDao/mongodbProducts.js");
      productsService = new MongoProduct();
      const { default: MongoCarts } = await import('./mongoDao/mongodbCarts.js');
      cartsService = new MongoCarts();
      const { default: MongoUser } = await import("./mongoDao/mongodbUsers.js");
      usersService = new MongoUser();
      const { default: MongoOrder } = await import("./mongoDao/mongodbOrders.js");
      ordersService = new MongoOrder();
      break;
  };

  const services = {
    productsService,
    cartsService,
    usersService,
    ordersService
  };
  
  export default services;