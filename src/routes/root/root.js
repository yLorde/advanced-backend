module.exports = {
    route: '/api/v1/root',
    method: 'get',
    async execute(req, res) {
        try {
            res.status(200).json({
                message: "in construction",
                status: 200,
            });
        } catch (err) {
            console.log(err);
        };
    },
};