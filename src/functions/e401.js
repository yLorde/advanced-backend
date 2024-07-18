module.exports.e401 = async (res, message) => {
    try {
        return res.status(401).json({
            message: message,
        });
    } catch (err) {
        console.log(err);
    };
};