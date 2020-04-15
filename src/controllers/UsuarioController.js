const connection = require('../database/connection')

module.exports = {
    async find(req, resp) {
        return resp.json({ usuario: "manoel" })
    },

    async findAll(req, resp) {
        return resp.json({ usuario: "manoel" })
    },

    async update(req, resp) {
        return resp.json({ usuario: "manoel" })
    },

    async delete(req, resp) {
        return resp.json({ usuario: "manoel" })
    },
}