document.addEventListener('DOMContentLoaded', function() {

    // Obtener referencia al menú desplegable
    const dropdownSegmentosA = document.getElementById('segmentos_a');
    
    // Obtener referencia al textarea donde se mostrará el resultado
    const textareaResultado = document.querySelector('textarea');

    // Agregar evento de cambio al menú desplegable
    dropdownSegmentosA.addEventListener('change', function() {
        // Obtener el valor seleccionado
        const valorSeleccionado = parseInt(dropdownSegmentosA.value);

        // Mostrar el valor seleccionado en el textarea
        textareaResultado.value = `Valor seleccionado: ${valorSeleccionado}`;
    }); 
});
