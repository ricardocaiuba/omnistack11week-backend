const GenerateUniqueId = require("../utils/GenerateUniqueId");
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, watsapp, city, uf } = request.body;

    const id = GenerateUniqueId();

    await connection("ongs").insert({
      id,
      name,
      email,
      watsapp,
      city,
      uf
    });

    return response.json({ id });
  }
};
