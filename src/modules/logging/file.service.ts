import { Injectable } from '@nestjs/common';
import { ILogger } from './logging.interface';
import * as fs from 'node:fs';
import * as path from 'node:path';

@Injectable()
export class FileLogger implements ILogger {
  private errorLogFilePath = path.resolve(process.cwd(), 'error.log');

  // Write the content of (message) to a file name 'error.log'
  private writeErrorLogToFile(message: string) {
    fs.appendFileSync(this.errorLogFilePath, message + '\n');
  }

  constructor() {}

  logError(message: string): void {
    this.writeErrorLogToFile(`[ERROR]: ${message}`);
  }
}
