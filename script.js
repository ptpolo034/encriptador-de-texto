function processText(operation) {
    var inputText = document.getElementById('inputText').value; 
    var outputText = '';

    // Verifica si el texto contiene letras mayúsculas o acentos
    if (hasUppercaseOrAccent(inputText)) {
        alert('El texto no puede contener letras mayúsculas ni acentos.');
        clearText();
        return;
    }

    if (operation === 'encrypt') {
        outputText = encryptText(inputText);
    } else if (operation === 'decrypt') {
        outputText = decryptText(inputText);
    }

    var outputElement = document.getElementById('outputText');
    var placeholderImage = document.getElementById('placeholderImage');

    if (outputText) {
        outputElement.textContent = outputText;
        outputElement.style.display = 'block';
        placeholderImage.style.display = 'none';
    } else {
        outputElement.style.display = 'none';
        placeholderImage.style.display = 'block';
    }
}

function clearText() {
    document.getElementById('inputText').value = '';
    var outputElement = document.getElementById('outputText');
    var placeholderImage = document.getElementById('placeholderImage');

    outputElement.textContent = '';
    outputElement.style.display = 'none';
    placeholderImage.style.display = 'block';
}

function hasUppercaseOrAccent(text) {
    // Expresión regular para verificar letras mayúsculas o acentos
    var regex = /[ÁÉÍÓÚÜÑA-Z]/;
    return regex.test(text);
}

function encryptText(text) {
    text = text.replace(/e/g, 'enter');
    text = text.replace(/i/g, 'imes');
    text = text.replace(/a/g, 'ai');
    text = text.replace(/o/g, 'ober');
    text = text.replace(/u/g, 'ufat');
    return text;
}

function decryptText(text) {
    text = text.replace(/enter/g, 'e');
    text = text.replace(/imes/g, 'i');
    text = text.replace(/ai/g, 'a');
    text = text.replace(/ober/g, 'o');
    text = text.replace(/ufat/g, 'u');
    return text;
}