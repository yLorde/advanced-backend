const userSchema = require("../../database/Schemas/userSchema");

const findUserByEmail = async (email) => {
    return (await userSchema.findOne({ email: email }));
};

const findUserById = async (idU) => {
    return (await userSchema.findOne({ idU: idU }));
};

const findUserByUsername = async (username) => {
    return (await userSchema.findOne({ username: username }));
};

module.exports = { findUserByEmail, findUserById, findUserByUsername };