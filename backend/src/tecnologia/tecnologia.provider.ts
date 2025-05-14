import { Injectable } from '@nestjs/common';
import { Tecnologia } from '@core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class TecnologiaProvider {
    constructor(private readonly prisma: PrismaProvider) {}

    obterTodas(): Promise<Tecnologia[]> {
        return this.prisma.tecnologia.findMany();
    }
}
