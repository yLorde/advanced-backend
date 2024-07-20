const userSchema = require("../../database/Schemas/userSchema");
const { e401 } = require("../../functions/e401");
const { createUser } = require("../../functions/User/createUser");

module.exports = {
    route: '/api/v1/user/register',
    method: 'post',
    async execute(req, res) {
        try {
            const headers = req.headers;
            if (!headers) error401(res, 'MISSING_HEADERS');

            const { username, email, password } = headers;

            if (!username) e401(res, 'MISSING_USERNAME');
            if (!email) e401(res, 'MISSING_EMAIL');
            if (!password) e401(res, 'MISSING_PASSWORD');

            if (username && email && password) {
                const newId = await userSchema.estimatedDocumentCount() + 1;
                new createUser({
                    idU: newId,
                    email: email,
                    password: password,
                    username: username,
                }).create();
            };
        } catch (err) {
            console.log(err);
        };
    },
};