import 'dotenv/config';
import env from 'env-var';
const { get } = env;

export const envs = {
  PRIVATE_API_KEY: get('PRIVATE_API_KEY').required().asString(),
  PORT: get('PORT').required().asPortNumber(),
  NODE_ENV: get('NODE_ENV').required().asString(),
  DB_HOST: get('DB_HOST').required().asString(),
  DB_PORT: get('DB_PORT').required().asPortNumber(),
  DB_NAME: get('DB_NAME').required().asString(),
  DB_USER: get('DB_USER').required().asString(),
  DB_PASSWORD: get('DB_PASSWORD').required().asString(),
  DB_TYPE: get('DB_TYPE').required().asString(),
}