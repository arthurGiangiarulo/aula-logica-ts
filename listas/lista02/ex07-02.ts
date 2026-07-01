let valorCompra = Number(prompt("Valor da compra:"));
if (valorCompra > 100) {
  let pagar = valorCompra - valorCompra * 0.10;
  alert("Com desconto: R$ " + pagar);
} else {
  alert("Sem desconto: R$ " + valorCompra);
}