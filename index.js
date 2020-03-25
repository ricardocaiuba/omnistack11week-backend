const express = require("express");
const app = express();
app.use(express.json());

/**
 * Rota / Recursos
 */

/**
 * GET: Buscar/Listar uma informação backend
 * POST: Criar uma informação no backend
 * PUT: alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parâmetros
 * Query Params: Parâmetros nomeados enviado na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.post("/users", (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento: "Semana OmniStack 11.0",
    aluno: "Ricardo Rodrigues dos Santos"
  });
});

app.listen(3333);
