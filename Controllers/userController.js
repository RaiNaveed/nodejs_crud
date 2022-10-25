const userCluster = require('../Modules/userModel');

const userRegister = async(req, res)=>{
    try {
        const {Email, Password, Name, Phone } = req.body;
        const newUser = new userCluster({
            Email:Email,
            Name: Name,
            Password:Password,
            Phonenumber:Phone,
        })

        const savedUser= await newUser.save();
        return res.json({
            Result: true,
            Data:savedUser
        })
    } catch (error) {
       return res.json({
        Message: error.message
       })
    }
}
module.exports = {userRegister};