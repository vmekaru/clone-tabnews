import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query('SELECT NOW()');
  console.log(result)
  response.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
}

export default status;