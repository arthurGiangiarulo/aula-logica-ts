function calcularNovoSalario(salario: number, aumento: number) {
    const novo = salario + (salario * aumento / 100);

    alert(`Novo salário = R$ ${novo}`);
}

let salario = Number(prompt("Salário atual:"));
let aumento = Number(prompt("Aumento (%):"));

calcularNovoSalario(salario, aumento);