let preco = Number(prompt("Preço:"));
let pago = Number(prompt("Valor pago:"));
let troco = pago - preco;
// Math.floor() arredonda pra baixo
let notas = Math.floor(troco / 10);
// % devolve o resto da divisão
let sobra = troco % 10;
alert(`Troco: R$ ${troco}\n${notas} nota(s) de 10 + R$ ${sobra}`);