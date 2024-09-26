document.addEventListener('DOMContentLoaded', function () {
    const addRowButton = document.getElementById('addRow');
    const quotationTable = document.getElementById('quotationTable').getElementsByTagName('tbody')[0];

    addRowButton.addEventListener('click', function () {
        const newRow = quotationTable.rows[0].cloneNode(true);
        Array.from(newRow.cells).forEach(cell => {
            const input = cell.querySelector('input') || cell.querySelector('select');
            if (input) {
                input.value = '';
            }
        });
        quotationTable.appendChild(newRow);
    });
});