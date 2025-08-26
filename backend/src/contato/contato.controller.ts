import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ContatoProvider } from './contato.provider';
import { ContatoDTO } from 'src/dto/contato.dto';

@Controller('contato')
export class ContatoController {
    constructor(private readonly emailService: ContatoProvider) {}
    
    @Post()
    @HttpCode(200)
    async enviarEmail(@Body() dto: ContatoDTO) {
        if(dto.extra){
            return { message: 'Ok' }
        }

        await this.emailService.enviarEmail(dto)
        return { message: 'Mensagem enviada com sucesso' }
    }

    @Get('teste')
    testRoute() {
      return { message: 'A rota de teste GET funciona!' };
    }
}
