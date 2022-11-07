var knex = require("../database/connection");
var bcrypt = require("bcrypt");
class User {

    async findAll() {
        try {
            var result = await knex.select(["id","name","email","role"]).table("users");
            
            if(result.length > 0) {
                return result[0];
            } else {
                return undefined;
            }

        } catch (error) {
            return undefined;
        }
    }

    async findById(id) {
        try {
            var result = await knex.select(["id","name","email","role"]).where({id:id}).table("users");
            return result;
        } catch (error) {
            return [];
        }
    }

    async create(email, password, name) {
        try {
            var hash = await bcrypt.hash(password, 10);

            await knex.insert({email, password: hash, name, role: 0}).table("users");
        } catch (error) {
            console.log(error);
        }
    }

    async findEmail(email) {
        try {
            var result = await knex.select("*").from("users").where({email: email})

            if(result > 0) {
                return true;
            } else {
                return false;
            }
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async update(id, email, name, role) {
        var user = await this.findById(id);

        if(user != undefined) {
            var editUser = {};

            if(email != undefined) {
                if(email != user.email) {
                    var result = await this.findEmail(email)
                    if(!result) {
                        editUser.email = email;
                    } else  {
                        return {status: false, error: "email has already been assigned"};
                    }
                }
            }

            if(name != undefined) {
                editUser.name = name;
            }

            if(role != undefined) {
                editUser.role = role;
            }

            try {
                await knex.update(editUser).where({id: id}).table("users");
                return {status: true};
            } catch (error) {
                return {status: false, error: error};
            }

        } else {
            return {status: false, error: "user not exist"};
        }
    }

    async delete(id) {
        var user = await this.findById(id);
        if(user != undefined) {
            try {
                await knex.delete().where({id:id}).table("users")
            } catch (error) {
                return {status: false, error: "user not exist"};
            }

        } else {
            return {status: false, error: "user not exist"};
        }
    }
}

module.exports = new User();