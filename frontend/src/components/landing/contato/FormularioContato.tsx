'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { IconLoader2, IconSend } from "@tabler/icons-react"
import { toast } from "sonner"
import { useFormContato } from "../../../hooks/useFormContato"

export default function FormularioContato() {
  const {
    nomeRef, emailRef, mensagemRef, extraRef,
    loading, erro, handleSubmit
  } = useFormContato({
    resetOnSuccess: true,
    onSuccess: () => toast.success("Mensagem enviada com sucesso! Logo entrarei em contato."),
    onError: (m) => toast.error(m),
  })
  
  return (
    <form 
      className="w-full flex flex-col gap-6 bg-black/40 backdrop-blur-xl p-4 sm:p-8 rounded-3xl border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)]" 
      onSubmit={handleSubmit}
    >
      <div className="relative group">
        <Input
          type="text"
          ref={nomeRef}
          name="nome"
          placeholder="Seu nome"
          className="h-14 bg-white/5 border-white/10 text-white placeholder:text-zinc-600 rounded-xl px-5 transition-all duration-300 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-white/20"
        />
      </div>

      <div className="relative group">
        <Input
          type="email"
          ref={emailRef}
          name="email"
          placeholder="Seu e-mail profissional"
          className="h-14 bg-white/5 border-white/10 text-white placeholder:text-zinc-600 rounded-xl px-5 transition-all duration-300 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-white/20"
        />
      </div>

      <div className="relative group">
        <Textarea
          name="mensagem"
          ref={mensagemRef}
          placeholder="Qual é o desafio?"
          className="min-h-[160px] resize-y bg-white/5 border-white/10 text-white placeholder:text-zinc-600 rounded-xl px-5 py-4 transition-all duration-300 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-white/20"
        />
      </div>

      <Input
        type="text"
        ref={extraRef}
        name="extra"
        className="hidden absolute left-[-9999px] opacity-0"
        tabIndex={-1}
        autoComplete="off"
      />

      {erro && <p className="text-sm text-red-400 font-medium px-2" role="alert">{erro}</p>}

      <Button
        type="submit"
        disabled={loading}
        className="h-14 mt-2 w-full bg-white text-black hover:bg-zinc-200 font-bold text-lg rounded-xl flex items-center justify-center gap-3 transition-all 
          duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 cursor-pointer"
      >
        {loading ? (
          <>
            <IconLoader2 size={24} className="animate-spin" />
            Processando...
          </>
        ) : (
          <>
            Enviar Mensagem
            <IconSend size={20} />
          </>
        )}
      </Button>
    </form>
  )
}