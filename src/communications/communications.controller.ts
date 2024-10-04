import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { CreateCommunicationDto } from './dto/create-communication.dto';
import { UpdateCommunicationDto } from './dto/update-communication.dto';

@Controller('rabbit')
export class CommunicationsController {
  constructor(
    @Inject('COMM_SERVICE') private readonly communications: ClientProxy, // Inject the communicationsService
  ) {}

  @Post()
  async create(@Body() createCommunicationDto: CreateCommunicationDto) {
    return this.communications
      .send({ cmd: 'create' }, createCommunicationDto)
      .pipe(
        catchError((error) => {
          throw new RpcException(error);
        }),
      );
  }

  @Get()
  findAll() {
    return this.communications.send({ cmd: 'findAll' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'findOne';
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommunicationDto: UpdateCommunicationDto,
  ) {
    return 'patch';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'delete';
  }
}
