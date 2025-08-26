import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class ContatoDTO{
    @IsString()
    @MinLength(2)
    @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
    nome: string

    @IsEmail({}, { message: 'Por favor, insira um email válido.' })
    @IsNotEmpty({ message: 'O email não pode estar vazio.' })
    email: string

    @IsString()
    @IsNotEmpty({ message: 'A mensagem não pode estar vazia.' })
    @MinLength(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' })
    mensagem: string

    extra?: string
}

