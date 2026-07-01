function mostrarResultados(numero: number) {
    let dobro = numero * 2;
    let triplo = numero * 3;
    let metade = numero / 2;

    alert(`Dobro: ${dobro}
Triplo: ${triplo}
Metade: ${metade}`);
}

let n = Number(prompt("Digite um número:"));

mostrarResultados(n);