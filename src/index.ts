import * as express from 'express';
import { setupRoutes } from './setupRoutes';

const PORT: number = Number(process.env.PORT) || 3000;

/**
 * Let's get started!
 */
const main = async (): Promise<void> => {
  const app = express();
  app.listen(PORT, () => {
    console.log(`🚀 And we're live!`);
    console.log(`Example app listening at http://localhost:${PORT}`);
  });

  setupRoutes(app);
};

void main();
