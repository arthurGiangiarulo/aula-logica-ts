let inputValue: string | null = prompt("10");
let numerovValor: number = inputValue !== null ? parseFloat(inputValue) : 0;

let antecessor: number = numerovValor - 1;
let sucessor: number = numerovValor + 1;

alert(`Número: ${numerovValor}`);
alert(`Antecessor: ${antecessor}`);
alert(`Sucessor: ${sucessor}`);