function calcularIMC(peso: number, altura: number) {
    const alturaMetros = altura > 3 ? altura / 100 : altura;

    const imc = peso / (alturaMetros * alturaMetros);

    alert(`IMC = ${imc.toFixed(2)}`);
}

let peso = Number(prompt("Peso:"));
let altura = Number(prompt("Altura (m ou cm):"));

calcularIMC(peso, altura);