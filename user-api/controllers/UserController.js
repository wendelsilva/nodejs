var User = require("../models/User")
class UserController {

    async index(req, res) {
        var users = await User.findAll();
        res.json(users);
    };

    async findUser(req, res) {
        var id = req.params.id;
        var user = await User.findById(id)

        if(user == undefined) {
            res.status(404).send({})
        } else {
            res.json(user)
        }
    }

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

    async edit(req, res) {
        var {id, name, role, email} = req.body;
        var result = await User.update(id, email, name, role);
        if(result != undefined) {
            if(result.status) {
                res.send("updated successfully")
            } else {
                res.status(406).send(result.error)
            }
        } else {
            res.status(406).send(result.error)
        }
    }

    async remove(req, res) {
        var id = req.params.id;

        var result = await User.delete(id);

        if(result) {
            res.send("user deleted")
        } else {
            res.send(result.error)
        }
    }
}

module.exports = new UserController();