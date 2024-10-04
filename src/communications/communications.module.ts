import { Module } from '@nestjs/common';
import { CommunicationsController } from './communications.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [CommunicationsController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: 'COMM_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'communications',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
})
export class CommunicationsModule {}
