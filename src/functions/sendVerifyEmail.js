const { sendMail } = require("./Email/sendMail");

module.exports.sendVerifyEmail = async (mail, token) => {
    const body = `token: ${token}`
    new sendMail({ email: mail, body: body }).send();
};