import { getUsers, saveUser, getUserById, updateUser } from '../services/users.services.js';

const getUsersController = async (req,res) => {
    let data = await getUsers();
    return res.json(data)
};

const postUsersController = async (req,res) => {
    const data = req.body;
    let result = await saveUser(data);
    res.status(201).json(result)
};

const getUserByIdController = async (req,res) => {
    const id = req.params.uid;
    let result = await getUserById(id);
    if (!result) return res.send({ message: "User does not exist" });
    res.json(result);
};

const putUserContoller = async (req,res) => {
    const uid = req.params.uid;
    const newData = req.body;
    let result = await updateUser(uid,newData);
    if (!result) return res.send({ message: "User does not exist" });
    res.send({ message: "The user data was successfully modified", modified: true });
}


export {
    getUsersController,
    postUsersController,
    getUserByIdController,
    putUserContoller
}