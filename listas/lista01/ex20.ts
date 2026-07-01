function calcularSalario(bruto: number) {
    const inss = bruto * 11 / 100;
    const ir = bruto * 7.5 / 100;
    const vt = bruto * 6 / 100;

    const liquido = bruto - inss - ir - vt;

    alert(
        `INSS: R$ ${inss.toFixed(2)}\n` +
        `IR: R$ ${ir.toFixed(2)}\n` +
        `VT: R$ ${vt.toFixed(2)}\n` +
        `Líquido: R$ ${liquido.toFixed(2)}`
    );
}

let bruto = Number(prompt("Salário bruto:"));

calcularSalario(bruto);