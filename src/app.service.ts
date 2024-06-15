import { Inject, Injectable } from '@nestjs/common';
import { ILogger } from './modules/logging/logging.interface';

@Injectable()
export class AppService {
  // Testing my error logger provider
  constructor(@Inject('error_logger') private readonly logger: ILogger) {}
  getHello(): string {
    this.logger.logError('An error occured');
    return 'Hello World!';
  }
}
