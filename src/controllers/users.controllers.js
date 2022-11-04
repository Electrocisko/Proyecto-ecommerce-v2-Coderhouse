import { getAll, save } from '../services/users.services.js';

const getUsersController = async (req,res) => {
    let data = await getAll();
    return res.json(data)
}

const postUsersController = async (req,res) => {
    const data = req.body;
    await save(data);
    res.status(201).json(data)
}

export {
    getUsersController,
    postUsersController
}