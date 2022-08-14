export default () => ({
  port: process.env.PORT,
  origin: process.env.ORIGIN,
  jwtSecret: process.env.JWT_SECRET,
  client: {
    id: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  },
  nodemailer: {
    email: process.env.NODEMAILER_EMAIL,
    password: process.env.NODEMAILER_PASSWORD,
  },
  database: {
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    poolMax: process.env.DB_POOL_MAX,
    poolMin: process.env.DB_POOL_MIN,
    idle: process.env.DB_IDLE,
    acquire: process.env.DB_ACQUIRE,
    poolEvict: process.env.DB_POOL_EVICT,
  },
});
