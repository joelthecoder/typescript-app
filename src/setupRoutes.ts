import { Express } from 'express';

/**
 * Handle express routes
 * @param app
 */
export const setupRoutes = (app: Express): void => {
  app.get('/', (req, res) => {
    res.send({ message: 'Hello World!'});
  });
}
