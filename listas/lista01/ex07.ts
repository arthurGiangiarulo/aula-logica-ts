function calcularMedia(n1: number, n2: number) {
    const media = (n1 + n2) / 2;

    alert(`Média = ${media}`);
}

let n1 = Number(prompt("1ª nota:"));
let n2 = Number(prompt("2ª nota:"));

calcularMedia(n1, n2);