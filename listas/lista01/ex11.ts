function calcularMedia(p1: number, p2: number, p3: number, p4: number) {
    const media = (p1 + p2 + p3 + p4) / 4;

    alert(`Média = ${media.toFixed(1)}`);
}

let p1 = Number(prompt("Nota 1:"));
let p2 = Number(prompt("Nota 2:"));
let p3 = Number(prompt("Nota 3:"));
let p4 = Number(prompt("Nota 4:"));

calcularMedia(p1, p2, p3, p4);a