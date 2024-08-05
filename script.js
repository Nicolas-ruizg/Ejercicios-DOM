document.addEventListener('DOMContentLoaded', (event) => {
    function applyChanges() {
        // 2.1. Ejercicio: Uso de getElementById()
        document.getElementById('uniqueElement').textContent = 'Texto Modificado';

        // 2.2. Ejercicio: Uso de getElementsByClassName()
        let elements = document.getElementsByClassName('colorChange');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = '#00ff87';
            elements[i].style.color = '#000';
        }

        // 2.3. Ejercicio: Uso de getElementsByTagName()
        let listItems = document.getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].textContent += ` (${i + 1})`;
        }

        // 2.4. Ejercicio: Uso de querySelector()
        document.querySelector('form input[type="text"]').setAttribute('placeholder', 'Escribe aquí algo nuevo...');

        // 2.5. Ejercicio: Uso de querySelectorAll()
        let paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(paragraph => {
            paragraph.classList.add('customClass');
        });
    }
    // Este es el boton que ejecuta todo el DOM
    document.getElementById('executeChanges').addEventListener('click', () => {
        applyChanges();
    });
});




