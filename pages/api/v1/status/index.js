import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const databaseName = process.env.POSTGRES_DB;
  const serverVersion = await database.query("show server_version")
  const maxConnections = await database.query("show max_connections")
  const usedConnections = await database.query({
      text:'select COUNT(*)::int from pg_stat_activity where datname = $1',
      values:[databaseName],
    }
  )
  
  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database:{
        version:serverVersion.rows[0].server_version,
      },
    },
    max_connections: parseInt(maxConnections.rows[0].max_connections),
    used_connections: parseInt(usedConnections.rows[0].count),
  });
}


// pegar a versão do postgres
// pegar as conexões máximas do postgres

// pegar as conexões usadas


export default status;