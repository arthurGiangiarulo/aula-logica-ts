function converterTempo(total: number) {
    const horas = Math.floor(total / 3600);

    const resto = total % 3600;
    const min = Math.floor(resto / 60);
    const seg = resto % 60;

    alert(`${horas}h ${min}min ${seg}s`);
}

let total = Number(prompt("Total de segundos:"));

converterTempo(total);