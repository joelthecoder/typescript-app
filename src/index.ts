import { ReplServer } from './core/repl';

console.log(`🚀 And we're live!`);

/**
 * Run the repl server if the environment variable "USE_REPL" is set to true
 */
if (process.env.USE_REPL === 'true') {
  const server = new ReplServer();
  server.addContext('test', 123);
}
