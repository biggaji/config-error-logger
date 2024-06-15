/**
 * This is a unit test to verify the behavior of your ConsoleLogger implementation of the ILogger interface
 */

import { ConsoleLogger } from './console.service';

describe('ConsoleLogger implementation of ILogger interface', () => {
  let consoleLogger: ConsoleLogger;

  beforeEach(() => {
    consoleLogger = new ConsoleLogger();

    // Mock the implementation of the console.error method
    jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should log error message to the runtime console', () => {
    const errorMessage = 'An error occured';
    const expected = `[ERROR]: An error occured`;
    consoleLogger.logError(errorMessage);
    expect(console.error).toHaveBeenCalledWith(expected);
  });
});
