var User = require("../models/User")
class UserController {

    async index(req, res) {};

    async create(req, res) {
        var {name, email, password, role} = req.body;

        if(email === undefined || name === undefined || password === undefined) {
            res.status(400).send({error: "invalid request, fill in the fields"});
            return;
        }

        var emailExists = await User.findEmail(email);

        if(emailExists) {
            res.status(406).send({error: "email already exists"})
        }

        await User.create(email, password, name)
        res.status(200).send();
    };
}

module.exports = new UserController();