import { useEffect, useState } from "react";

export function useAnimacaoDigitacao(texto: string, velocidade = 50, inicioDelay = 0) {
    const [displayed, setDisplayed] = useState("");
    const [iniciou, setIniciou] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIniciou(true), inicioDelay);
        return () => clearTimeout(timeout);
    }, [inicioDelay]);

    useEffect(() => {
        if (!iniciou) return;

        if (displayed.length < texto.length) {
            const timeout = setTimeout(() => {
                setDisplayed(texto.slice(0, displayed.length + 1));
            }, velocidade);
            return () => clearTimeout(timeout);
        }
    }, [displayed, iniciou, texto, velocidade]);

    return displayed;
}