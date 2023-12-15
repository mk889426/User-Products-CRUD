const User = require('../Models/User')

const addUser = async (req, res) => {
    const currentUser = req.body;
    const jane = await User.create({ 
        user
    });
    console.log('User Added!');
  
}

const getUser = async (req, res) => {
    const allUsers = await User.findAll()
    res.json(allUsers);
    console.log(allUsers)
    console.log('User read!');
}

const updateUser = (req, res) => {
    console.log('User updated successfully!');
    res.send('User updated successfully!')
}

const deleteUser = (req, res) => {
    console.log('User Deleted!');
    res.send('User Deleted successfully! ')
}

module.exports = {
    addUser,
    getUser,
    updateUser,
    deleteUser
}