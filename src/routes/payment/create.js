const { e401 } = require("../../functions/e401");

module.exports = {
    route: '/api/v1/payment/create',
    method: 'post',
    async execute(req, res) {
        try {
            const headers = req.headers;
            if (!headers) e401(res, 'MISSING_HEADERS');

            const { email, description, value, save_email } = headers;

            if (!email) e401(res, 'MISSING_EMAIL');
            if (!description) e401(res, 'MISSING_DESCRIPTION');
            if (!value) e401(res, 'MISSING_VALUE');
            if (!save_email) e401(res, 'MISSING_CONFIG_SAVE_EMAIL')

            return res.status(200).json({
                message: 'CREATED_PIX',
                data: {
                    email: email,
                    description: description,
                    value: value,
                    save_email: save_email
                },
            });
        } catch (err) {
            console.log(err);
        };
    },
};