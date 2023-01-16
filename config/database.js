module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cei0f04gqg4e0efggue0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_3ma2'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'TaPgfVKkwfnvTWYXpbD91WFbYpCDHw37'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
