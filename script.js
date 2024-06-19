function log2(x) {
    return Math.log(x) / Math.log(2);
}

function updateCalculations() {
    const tiempoGuarda = Number(document.querySelector('.dropdown2').value);
    const rows = document.querySelectorAll('tbody tr');
    let totalSegmentos = 0;
    let totalTasaTransmision = 0;

    rows.forEach(row => {
        const segmentoDropdown = row.querySelector('.segmentos');
        if (segmentoDropdown) {
            totalSegmentos += Number(segmentoDropdown.value);
        }
    });

    if (totalSegmentos > 13) {
        alert("El número total de segmentos no puede exceder de 13.");
        return;
    }

    rows.forEach(row => {
        const segmentoDropdown = row.querySelector('.segmentos');
        const modulacionDropdown = row.querySelector('.modulacion');
        const tasaCodigoDropdown = row.querySelector('.tasa-codigo');
        const textarea = row.querySelector('textarea');

        if (segmentoDropdown && modulacionDropdown && tasaCodigoDropdown) {
            const segmentoValue = Number(segmentoDropdown.value);
            const modulacionValue = Number(modulacionDropdown.value);
            const tasaCodigoValue = Number(tasaCodigoDropdown.value);

            const r_RS = 188 / 204;
            const M = modulacionValue;
            const r_c = tasaCodigoValue;
            const alpha = tiempoGuarda;

            // Calcular la tasa de transmisión de datos de un único segmento
            const Rs = (8 * log2(M) * r_RS * r_c) / (21 * (1 + alpha));

            // Calcular la tasa de transmisión total para los segmentos seleccionados
            const tasaTotal = Rs * segmentoValue;

            // Actualizar el contenido del textarea con la tasa de transmisión
            textarea.value = Tasa de Transmisión Total: ${tasaTotal.toFixed(2)} Mbps;

            // Sumar al total de la tasa de transmisión
            totalTasaTransmision += tasaTotal;
        }
    });

    // Actualizar el total de la tasa de transmisión en el HTML
    document.getElementById('totalTransmision').textContent = totalTasaTransmision.toFixed(2);
}

// Añadir evento de cambio a todos los dropdowns
document.querySelectorAll('.dropdown, .dropdown2').forEach(dropdown => {
    dropdown.addEventListener('change', updateCalculations);
});

// Llamar a updateCalculations al cargar la página
