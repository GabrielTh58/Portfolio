export class EnviarEmailDto {
    from?: string;
    recipients: string;
    html: string;
    subject: string;
    text?: string;
    placeholderReplacements?: Record<string, string>;
}