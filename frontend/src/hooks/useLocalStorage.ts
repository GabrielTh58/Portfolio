import { useEffect, useState } from "react";

export default function useLocalStorage<T>(chave: string, valorInicial: T){
    const [valor, setValor] = useState<T>(() => {
        const valorStorage = localStorage.getItem(chave)
        return valorStorage ? JSON.parse(valorStorage) : valorInicial
    })

    useEffect(() => {
        localStorage.setItem(chave, JSON.stringify(valor))
    }, [chave, valor])

    return [valor, setValor] as const
}