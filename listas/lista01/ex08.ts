function calcular(a: number, b: number, operacao: string) {
    let resultado: number;

    if (operacao === "+") {
        resultado = a + b;
    } else if (operacao === "-") {
        resultado = a - b;
    } else if (operacao === "*") {
        resultado = a * b;
    } else if (operacao === "/") {
        resultado = a / b;
    } else if (operacao === "%") {
        resultado = a % b;
    } else {
        alert("Operação inválida");
        return;
    }

    alert(`Resultado = ${resultado}`);
}

let a = Number(prompt("1º número:"));
let b = Number(prompt("2º número:"));
let op = prompt("Digite a operação (+, -, *, /, %):") || "";

calcular(a, b, op);