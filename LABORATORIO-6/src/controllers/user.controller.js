const req = require('express/lib/request');
const { addNewUser, fecthUsers } = require('../services/user.service');
const addUserController = (req, res) => {
    try {
        const { name, lastname, email } = req.body;
        const user = addNewUser(name, lastname, email)
        res.render('home.pug', { user });
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
}

const showForm = (req, res) => {
    res.render('form.pug');
}

const showUsers = async (req,res) => {
    try {
        const users = await fecthUsers();
        res.render ('allUsers',{users})
    } catch (error) {
        console.log(error)
        res.status(500).sed("Internal Server Error")
    }
};

module.exports = {
    addUserController,
    showForm,
    showUsers
}

