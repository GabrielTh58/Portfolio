'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { IconMail } from "@tabler/icons-react"
import { useState } from "react"

type FormState = {
  nome: string;
  email: string;
  mensagem: string;
}

export default function FormularioContato() {
  const [form, setForm] = useState<FormState>({ nome: "", email: "", mensagem: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Implementar lógica de envio de email
  }

  const validate = () => { 
    if (!form.nome.trim()) return "Por favor, informe seu nome.";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) return "Insira um e-mail válido.";
    if (form.mensagem.trim().length < 10) return "Mensagem deve ter ao menos 10 caracteres.";
    return null;
  }

  return (
    <form className="flex flex-col gap-4 max-w-72 lg:w-72" onSubmit={handleSubmit}>
      <div className="relative">
        <Input
          type="text"
          placeholder="Nome"
          className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
          onChange={handleChange}
        />
      </div>

      <div className="relative">
        <Input
          type="email"
          placeholder="Email"
          className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
          onChange={handleChange}
        />
      </div>

      <Textarea
        placeholder="Mensagem"
        className="min-h-24 transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
        onChange={handleChange}
      />

      <Button
        type="submit"
        className="gradiente-principal text-white flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        <IconMail size={20} />
        Enviar
      </Button>
    </form>
  )
}
