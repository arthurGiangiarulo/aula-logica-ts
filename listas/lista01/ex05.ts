function converterParaDolar(valorEmReais: number) {
    const cotacaoDolar = 4.95;
    const valorEmDolar = valorEmReais / cotacaoDolar;

    alert(`US$ ${valorEmDolar.toFixed(2)}`);
}

let reais = Number(prompt("Valor em reais:"));

converterParaDolar(reais);