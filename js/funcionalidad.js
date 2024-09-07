/*--- funcionalidad Calculadora Cafetera ---*/

function calculateTotals() {
    const kiloInputs = document.querySelectorAll('.kilo-input');
    let totalKilos = 0;

    kiloInputs.forEach(input => {
        totalKilos += parseFloat(input.value) || 0;
    });

    const pricePerKilo = parseInt(document.getElementById('pricePerKilo').value, 10) || 0;
    const totalAmount = totalKilos * pricePerKilo;

    // Mostrar en formato de dos decimales
    document.getElementById('totalKilos').value = totalKilos.toFixed(2);
    
    // Mostrar en formato contable entero
    document.getElementById('totalAmount').value = totalAmount.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

document.querySelectorAll('.kilo-input, #pricePerKilo').forEach(input => {
    input.addEventListener('input', calculateTotals);
});