document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('diplay'); 
    const buttons = Array.from(document.querySelectorAll('.button, .signs, .equal'));
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent.trim();

            if (value === 'C') {
                currentInput = '';
            } else if (value === 'del') {
                currentInput = currentInput.slice(0, -1);
            } else if (value === '=') {
                try {
                    currentInput = currentInput.replace(/√(\d+)/g, 'Math.sqrt($1)');
                    currentInput = eval(currentInput.replace('^2', '**2')).toString();
                } catch (e) {
                    currentInput = 'Error';
                }
            } else if (value === '√') {
                currentInput += '√';
            } else {
                currentInput += value;
            }
            display.value = currentInput;
        });
    });
});
