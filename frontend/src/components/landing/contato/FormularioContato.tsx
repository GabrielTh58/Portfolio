'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { IconLoader2, IconMail } from "@tabler/icons-react"
import { toast } from "sonner"
import { useFormContato } from "./hook/useFormContato"


export default function FormularioContato() {
  const {
    nomeRef, emailRef, mensagemRef, extraRef,
    loading, erro, handleSubmit
  } = useFormContato({
    resetOnSuccess: true,
    onSuccess: () => toast.success("Mensagem enviada com sucesso! Obrigado pelo contato."),
    onError: (m) => toast.error(m),
  })
  
  return (
    <form className="flex flex-col gap-4 max-w-72 lg:w-72" onSubmit={handleSubmit}>
      <Input
        type="text"
        ref={nomeRef}
        name="nome"
        placeholder="Nome"
        className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
      />

      <Input
        type="email"
        ref={emailRef}
        name="email"
        placeholder="Email"
        className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
      />

      <Textarea
        name="mensagem"
        ref={mensagemRef}
        placeholder="Mensagem"
        className="min-h-24 transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
      />

      <Input
        type="text"
        ref={extraRef}
        name="extra"
        className="hidden absolute left-[-9999px] opacity-0"
        tabIndex={-1}
        autoComplete="off"
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
