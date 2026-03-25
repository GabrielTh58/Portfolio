import { useState, useEffect } from "react";

export function useAnimacaoDigitacaoCircular(
    textos: string[], 
    velocidadeDigitacao = 100, 
    velocidadeApagar = 50, 
    tempoEspera = 2000
) {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [textoExibido, setTextoExibido] = useState("");
    const [estaDigitando, setEstaDigitando] = useState(true);

    useEffect(() => {
        const textoAtual = textos[indiceAtual];
        
        if (estaDigitando) {
            if (textoExibido.length < textoAtual.length) {
                const timeout = setTimeout(() => {
                    setTextoExibido(textoAtual.slice(0, textoExibido.length + 1));
                }, velocidadeDigitacao);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => setEstaDigitando(false), tempoEspera);
                return () => clearTimeout(timeout);
            }
        } else {
            // Apagando
            if (textoExibido.length > 0) {
                const timeout = setTimeout(() => {
                    setTextoExibido(textoExibido.slice(0, -1));
                }, velocidadeApagar);
                return () => clearTimeout(timeout);
            } else {
                setIndiceAtual((prev) => (prev + 1) % textos.length);
                setEstaDigitando(true);
            }
        }
    }, [textoExibido, estaDigitando, indiceAtual, textos, velocidadeDigitacao, velocidadeApagar, tempoEspera]);

    return textoExibido;
}