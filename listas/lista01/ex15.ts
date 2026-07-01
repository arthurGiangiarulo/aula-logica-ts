function dividirConta(total: number, pessoas: number) {
    const comGorjeta = total + (total * 0.10);
    const cada = comGorjeta / pessoas;

    alert(`Cada um paga R$ ${cada.toFixed(2)}`);
}

let total = Number(prompt("Total da conta:"));
let pessoas = Number(prompt("Nº de pessoas:"));

dividirConta(total, pessoas);