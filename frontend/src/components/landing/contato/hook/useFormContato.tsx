import { useRef, useState } from "react"

type ValoresContato = {
  nome: string
  email: string
  mensagem: string
  extra: string 
}

export type UseFormContatoProps = {
  apiUrl?: string
  resetOnSuccess?: boolean
  onSuccess?: () => void
  onError?: (message: string) => void
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validador(values: ValoresContato): string | null {
  const nome = values.nome.trim()
  const email = values.email.trim()
  const mensagem = values.mensagem.trim()
  const extra = values.extra.trim()

  if (!nome) return "Por favor, informe seu nome."
  if (!email) return "Por favor, informe seu e-mail."
  if (!EMAIL_REGEX.test(email)) return "Insira um e-mail válido."
  if (mensagem.length < 10) return "Mensagem deve ter ao menos 10 caracteres."
  if (extra.length > 0) return "Envio inválido." 
  return null
}

export function useFormContato(opts: UseFormContatoProps = {}) {
  const apiUrl = opts.apiUrl ?? process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"

  const nomeRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const mensagemRef = useRef<HTMLTextAreaElement | null>(null)
  const extraRef = useRef<HTMLInputElement | null>(null)

  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState<string | null>(null)

  const pegarValores = (): ValoresContato | null => {
    if (!nomeRef.current || !emailRef.current || !mensagemRef.current || !extraRef.current) {
      setErro("Erro ao enviar mensagem. Tente recarregar a página e enviar novamente.")
      return null
    }
    return {
      nome: nomeRef.current.value,
      email: emailRef.current.value,
      mensagem: mensagemRef.current.value,
      extra: extraRef.current.value,
    }
  }

  const focusFirstInvalid = (msg: string) => {
    if (msg.includes("nome")) nomeRef.current?.focus()
    else if (msg.includes("e-mail") || msg.includes("e-mail válido")) emailRef.current?.focus()
    else if (msg.includes("Mensagem")) mensagemRef.current?.focus()
  }

  const resetar = () => {
    if (nomeRef.current) nomeRef.current.value = ""
    if (emailRef.current) emailRef.current.value = ""
    if (mensagemRef.current) mensagemRef.current.value = ""
    if (extraRef.current) extraRef.current.value = ""
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErro(null)

    const valores = pegarValores()
    if (!valores) return

    const validation = validador({
      nome: valores.nome,
      email: valores.email,
      mensagem: valores.mensagem,
      extra: valores.extra,
    })

    if (validation) {
      setErro(validation)
      focusFirstInvalid(validation)
      opts.onError?.(validation)
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${apiUrl}/contato`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: valores.nome,
          email: valores.email,
          mensagem: valores.mensagem,
          extra: valores.extra,
        }),
      })

      const data = await res.json().catch(() => ({} as { message?: string }))      

      if (!res.ok) throw new Error((data as { message?: string }).message || "Ocorreu um erro ao enviar a mensagem.")

      opts.onSuccess?.()
      if (opts.resetOnSuccess) resetar()
    } 
    catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : (err as { message?: string }).message ?? "Erro desconhecido. Tente novamente mais tarde."
      setErro(message)
      opts.onError?.(message)
    } 
    finally {
      setLoading(false)
    }
  }

  return {
    nomeRef, 
    emailRef,
    mensagemRef,
    extraRef,
    loading,
    erro,
    setErro, 
    handleSubmit,
  }
}
