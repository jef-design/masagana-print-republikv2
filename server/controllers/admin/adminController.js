const Admin = require("../../models/admin/adminModel");

const adminLogin = async (req, res) => {
    const {username, password} = req.body;
    try {
        const admin = await Admin.login(username, password);
        res.status(200).json({message: "admin login", admin});
    } catch (error) {}
};
const adminSignUp = async (req, res) => {
    const {username, password} = req.body;
    try {
        const admin = await Admin.signup(username, password);
        res.status(200).json({message: "admin signup", admin});
    } catch (error) {}
};

module.exports = {adminLogin, adminSignUp};
