// Number() converte o texto do prompt em número
let total = Number(prompt("Total de segundos:"));
// Math.floor() arredonda pra baixo
let min = Math.floor(total / 60);
// % devolve o resto da divisão
let seg = total % 60;
alert(`${min} min e ${seg} s`);