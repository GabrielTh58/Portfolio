import { useEffect, useState } from "react";

export function useAnimacaoDigitacao(texto: string, delay: number, inicioDelay = 0) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            let index = 0;
            const interval = setInterval(() => {
                if (index <= texto.length) {
                    setDisplayed(texto.slice(0, index));
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, delay);
            return () => clearInterval(interval);
        }, inicioDelay);

        return () => clearTimeout(timeout);
    }, [texto, delay, inicioDelay]);

    return displayed;
}