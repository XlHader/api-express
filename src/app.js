import express from "express";
import cors from "cors";
import { validateApiKey } from "./infrastructure/middlewares/validateApiKeyMiddleware.js";
import { envs } from "./config/envs.js";
import { router } from "./routes/router.js";
import { sequelize } from "./config/connection.js";

export async function initializeApp() {
  const app = express();

  app.use(
    cors(),
    validateApiKey,
    express.json()  
  );

  app.use("/api", router);

  await sequelize.sync();

  app.listen(envs.PORT, () => {
    console.log(`Example app listening at http://localhost:${envs.PORT}`);
  });
}