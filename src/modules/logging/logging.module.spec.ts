/**
 * This is a unit test to verify the configuration logic for the logging module.
 */

import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { LoggingModule } from './logging.module';
import { ConsoleLogger } from './console.service';
import { FileLogger } from './file.service';

describe('LoggingModule', () => {
  it('should provide ConsoleLogger when LOGGER_TYPE is console', async () => {
    const configMock = jest.fn().mockImplementation(() => ({
      get(key) {
        if (key === 'LOGGER_TYPE') return 'console';
      },
    }));

    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [LoggingModule.forRoot()],
    })
      .overrideProvider(ConfigService)
      .useClass(configMock)
      .compile();

    const logger = moduleRef.get('error_logger');

    expect(logger).toBeInstanceOf(ConsoleLogger);
  });

  it('should provide FileLogger when LOGGER_TYPE is file', async () => {
    const configMock = jest.fn().mockImplementation(() => ({
      get(key) {
        if (key === 'LOGGER_TYPE') return 'file';
      },
    }));

    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [LoggingModule.forRoot()],
    })
      .overrideProvider(ConfigService)
      .useClass(configMock)
      .compile();

    const logger = moduleRef.get('error_logger');

    expect(logger).toBeInstanceOf(FileLogger);
  });
});
