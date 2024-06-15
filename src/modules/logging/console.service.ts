import { Injectable } from '@nestjs/common';
import { ILogger } from './logging.interface';

@Injectable()
export class ConsoleLogger implements ILogger {
  constructor() {}

  // Logs the error message to the console
  logError(message: string): void {
    console.error(`[ERROR]: ${message}`);
  }
}
