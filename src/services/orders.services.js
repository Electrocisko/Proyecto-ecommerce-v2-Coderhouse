import services from "../dao/index.js";

const getAllOrders = async () => {
    let data = await services.ordersService.getAll();
    return data;
  };

  const saveOrder = async (order) => {
    let data = await services.ordersService.save(order);
    return data;
  };

  const getOrderByNro = async (order) => {
    let data = await services.ordersService.getByOrderNro(order);
    return data;
  }

const getLastOrder = async () => {
    let data = await services.ordersService.getLastorder();
    return data;
}

const delleteAllOrders = async () => {
    let data = await services.ordersService.dropOrders();
    return data;
}


export {
    getAllOrders,
    saveOrder,
    getOrderByNro,
    getLastOrder,
    delleteAllOrders
}