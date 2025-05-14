export default class Id {
    static gerar() {
        const part1 = Math.random().toString(36).substring(2, 9);
        const part2 = Math.random().toString(36).substring(2, 9);
        const part3 = Math.random().toString(36).substring(2, 9);

        return `${part1}-${part2}-${part3}`
    }
}

