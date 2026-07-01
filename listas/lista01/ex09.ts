function calcularPrecoTotal(area: number, valorM2: number) {
    const total = area * valorM2;

    alert(`Preço total = R$ ${total}`);
}

let area = Number(prompt("Área (m²):"));
let valorM2 = Number(prompt("Valor do m²:"));

calcularPrecoTotal(area, valorM2);