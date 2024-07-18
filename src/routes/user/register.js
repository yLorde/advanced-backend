const { e401 } = require("../../functions/e401");

module.exports = {
    route: '/api/v1/user/register',
    method: 'post',
    async execute(req, res) {
        try {
            const headers = req.headers;
            if (!headers) error401(res, 'MISSING_HEADERS');

            const { nickname, email, password } = headers;

            if (!nickname) e401(res, 'MISSING_NICKNAME');
            if (!email) e401(res, 'MISSING_EMAIL');
            if (!password) e401(res, 'MISSING_PASSWORD');

        } catch (err) {
            console.log(err);
        };
    },
};