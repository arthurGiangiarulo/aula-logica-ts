function calcularConsumo(km: number, litros: number) {
    const consumo = km / litros;

    alert(`Consumo = ${consumo.toFixed(1)} km/l`);
}

let km = Number(prompt("Distância (km):"));
let litros = Number(prompt("Litros gastos:"));

calcularConsumo(km, litros);