import logger from "../config/winston.config.js";
import services from "../dao/index.js";

const getUsers = async () => {
  try {
    let data = await services.usersService.getAll();
    return data;
  } catch (error) {
    logger.log("error", `Error in get user service ${error}`);
  }
};

const saveUser = async (user) => {
  try {
    let data = await services.usersService.save(user);
    return data;
  } catch (error) {
    logger.log("error", `Error in save user service ${error}`);
  }
};

const getUserById = async (uid) => {
  try {
    let data = await services.usersService.getById(uid);
    return data;
  } catch (error) {
    logger.log("error", `Error in get user  by id service ${error}`);
  }
};

const getUserByEmail = async (email) => {
  try {
    let data = await services.usersService.getByMail(email);
    return data;
  } catch (error) {
    logger.log("error", `Error in get user  by email service ${error}`);
  }
};

const updateUser = async (uid, newData) => {
    try {
        let result = await services.usersService.update(uid, newData);
        return result;
    } catch (error) {
        logger.log("error", `Error in update user  service ${error}`);
    }
}

export { getUsers, saveUser, getUserById, getUserByEmail, updateUser };
