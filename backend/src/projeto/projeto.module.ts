import { Module } from '@nestjs/common';
import { ProjetoController } from './projeto.controller';
import { ProjetoPrisma } from './projeto.provider';
import { DbModule } from '../db/db.module';

@Module({
  controllers: [ProjetoController],
  providers: [ProjetoPrisma],
  imports: [DbModule]
})
export class ProjetoModule {}
