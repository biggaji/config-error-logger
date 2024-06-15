/**
 * This is a unit test to verify the behavior of your FileLogger implementation of the ILogger interface
 */

import * as path from 'node:path';
import * as fs from 'node:fs';
import { FileLogger } from './file.service';

describe('ConsoleLogger implementation of ILogger interface', () => {
  let fileLogger: FileLogger;
  const errorLogFilePath = path.resolve(process.cwd(), 'error.log');

  beforeEach(() => {
    fileLogger = new FileLogger();

    // Mock the implementation of the fs.appendFileSync method
    jest.spyOn(fs, 'appendFileSync').mockImplementation();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should write log errors to file "error.log"', () => {
    const errorMessage = 'An error occured';
    const expected = '[ERROR]: An error occured\n';
    fileLogger.logError(errorMessage);
    expect(fs.appendFileSync).toHaveBeenCalledWith(errorLogFilePath, expected);
  });
});
