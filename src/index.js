const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

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

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: Select * From users
 * Query Builder: table("users").select("*").where()
 */
