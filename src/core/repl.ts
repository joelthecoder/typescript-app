import * as repl from 'repl';

export class ReplServer {
  private server: repl.REPLServer;

  constructor(options?: repl.ReplOptions) {
    const defaultOptions: Partial<repl.ReplOptions> = {
      useColors: true
    };

    this.server = repl.start({ ...defaultOptions, ...options });
  }

  /**
   * Add context to the repl server
   * @param key
   * @param value
   */
  public addContext(key: string, value: unknown): void {
    this.server.context[key] = value;
  }
}
