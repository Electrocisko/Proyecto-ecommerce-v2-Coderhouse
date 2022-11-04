import services from "../dao/index.js";

const getAll = async () => {
    let data = await services.usersService.getAll();
    return data
};

const save = async (data) => {
    await services.usersService.save(data);
    return data
}

export {
    getAll,
    save
}