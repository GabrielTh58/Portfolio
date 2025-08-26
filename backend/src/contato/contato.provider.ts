import { MailerService } from "@nestjs-modules/mailer";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ContatoDTO } from "src/dto/contato.dto";

@Injectable()
export class ContatoProvider {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ){}

  async enviarEmail(dto: ContatoDTO): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: this.configService.get<string>('MAIL_USER'), 
        from: this.configService.get<string>('MAIL_USER'),
        replyTo: dto.email, 
        text: dto.mensagem,
        subject: `Nova Mensagem do Portfólio de ${dto.nome}`,
        html: `
            <h2>Nova Mensagem do seu Portfólio</h2>
            <p><strong>Nome:</strong> ${dto.nome}</p>
            <p><strong>Email:</strong> ${dto.email}</p>
            <hr>
            <h3>Mensagem:</h3>
            <p>${dto.mensagem}</p>
          `,
      })
    } catch (error) {
        console.error('Falha ao enviar email:', error);
        throw new InternalServerErrorException('Ocorreu um erro ao tentar enviar a mensagem.');
    }
  }
}
