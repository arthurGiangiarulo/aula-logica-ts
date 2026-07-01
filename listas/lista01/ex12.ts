function converterCelsiusParaFahrenheit(c: number) {
    const f = c * 9 / 5 + 32;

    alert(`${c}°C = ${f}°F`);
}

let c = Number(prompt("Temperatura em °C:"));

converterCelsiusParaFahrenheit(c);