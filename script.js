document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    const infoBox = document.getElementById('info');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', updateInfo);
    });

    function updateInfo() {
        let info = '';
        dropdowns.forEach(dropdown => {
            info += `Menú ${dropdown.id}: ${dropdown.value}\n`;
        });
        infoBox.value = info;
    }
});
