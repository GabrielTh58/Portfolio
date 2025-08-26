'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { IconLoader2, IconMail } from "@tabler/icons-react"
import { useState } from "react"
import { toast } from "sonner"

type FormState = {
  nome: string;
  email: string;
  mensagem: string;
  extra?: string;
}

export default function FormularioContato() {
  const [form, setForm] = useState<FormState>({ nome: "", email: "", mensagem: "", extra: "" })
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState<string | null>(null)

  const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000'

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErro(null)

    const validado = validador()
    if (validado) {
      setErro(validado)
      return
    }

    if (!API_URL) {
      const msg = 'Configuração da API desconhecida.'
      setErro(msg)
      toast.error(msg)
      return
    }

    setLoading(true)
    const toastId = toast.loading('Enviando mensagem...')

    try {
      const response = await fetch(`${API_URL}/contato`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.message || 'Ocorreu um erro ao enviar a mensagem.')
      toast.success('Mensagem enviada com sucesso! Obrigado pelo contato.')
      setForm({ nome: "", email: "", mensagem: "", extra: "" })
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : (error as { message?: string }).message ?? 'Erro desconhecido. Tente novamente mais tarde.'
      setErro(message)
      toast.error(message)
    } finally {
      setLoading(false)
      if (toastId) toast.dismiss(toastId)
    }
  }

  const validador = () => {
    if (!form.nome.trim()) return "Por favor, informe seu nome."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Insira um e-mail válido."
    if (form.mensagem.trim().length < 10) return "Mensagem deve ter ao menos 10 caracteres."
    if (form.extra && form.extra.trim().length > 0) return "Envio inválido."
    return null
  }

  return (
    <form className="flex flex-col gap-4 max-w-72 lg:w-72" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={form.nome}
        name="nome"
        placeholder="Nome"
        className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
        onChange={handleChange}
      />

      <Input
        type="email"
        value={form.email}
        name="email"
        placeholder="Email"
        className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
        onChange={handleChange}
      />

      <Textarea
        name="mensagem"
        value={form.mensagem}
        placeholder="Mensagem"
        className="min-h-24 transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
        onChange={handleChange}
      />

      <Input
        type="text"
        name="extra"
        value={form.extra}
        className="hidden absolute left-[-9999px] opacity-0"
        tabIndex={-1}
        autoComplete="off"
        onChange={handleChange}
      />

      {erro && <p className="text-sm text-red-500" role="alert">{erro}</p>}

      <Button
        type="submit"
        className="gradiente-principal text-white flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        {loading ? (
          <>
            <IconLoader2 size={20} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <IconMail size={20} />
            Enviar
          </>
        )}
      </Button>
    </form>
  )
}
