import { Module } from '@nestjs/common';
import { ContatoController } from './contato.controller';
import { ContatoProvider } from './contato.provider';

@Module({
  controllers: [ContatoController],
  providers: [ContatoProvider],
})
export class ContatoModule {}
