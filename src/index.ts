import * as express from 'express';
import { ReplServer } from './core/repl';

const PORT: number = Number(process.env.PORT) || 3000;

const app = express();
app.listen(PORT, () => {
  console.log(`🚀 And we're live!`);
  console.log(`Example app listening at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
 * Run the repl server if the environment variable "USE_REPL" is set to true
 */
if (process.env.USE_REPL === 'true') {
  const server = new ReplServer();
  server.addContext('test', 123);
}
