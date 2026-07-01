function calcularNotas(valor: number) {
    const n100 = Math.floor(valor / 100);
    valor = valor % 100;

    const n50 = Math.floor(valor / 50);
    valor = valor % 50;

    const n20 = Math.floor(valor / 20);
    valor = valor % 20;

    const n10 = Math.floor(valor / 10);

    alert(`100: ${n100}\n50: ${n50}\n20: ${n20}\n10: ${n10}`);
}

let valor = Number(prompt("Valor do saque:"));

calcularNotas(valor);