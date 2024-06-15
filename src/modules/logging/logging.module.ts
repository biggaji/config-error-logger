import { DynamicModule, Module } from '@nestjs/common';
import { ConsoleLogger } from './console.service';
import { FileLogger } from './file.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({})
export class LoggingModule {
  static forRoot(): DynamicModule {
    const providers = [
      {
        // The token to inject the logger service using @Inject("error_logger")
        provide: 'error_logger',

        // A factory class to determine which instance of the ILogger implementation class to return
        useFactory: (configService: ConfigService) => {
          const loggerType = configService.get<string>('LOGGER_TYPE');
          return loggerType === 'console'
            ? new ConsoleLogger()
            : new FileLogger();
        },
        inject: [ConfigService],
      },
    ];

    return {
      module: LoggingModule,
      imports: [ConfigModule],
      providers: providers,
      exports: providers,
    };
  }
}
