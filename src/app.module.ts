import { Module } from '@nestjs/common';
import { CommunicationsModule } from './communications/communications.module';

@Module({
  imports: [CommunicationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
