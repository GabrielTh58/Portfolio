import { Tecnologia } from '@portfolio/core';
import { PrismaProvider } from '../db/prisma.provider';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TecnologiaProvider {
    constructor(private readonly prisma: PrismaProvider) {}

    obterTodas(): Promise<Tecnologia[]> {
        return this.prisma.tecnologia.findMany();
    }

    obterDestaques(): Promise<Tecnologia[]> {
        return this.prisma.tecnologia.findMany({ where: { destaque: true } });
    }
}
