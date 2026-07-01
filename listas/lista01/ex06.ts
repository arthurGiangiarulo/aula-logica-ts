function calcularAreaRetangulo(base: number, altura: number) {
    const area = base * altura;

    alert(`Área = ${area}`);
}

let base = Number(prompt("Base:"));
let altura = Number(prompt("Altura:"));

calcularAreaRetangulo(base, altura);