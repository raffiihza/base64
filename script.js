document.getElementById('encryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('encryptInput').value;
    const encryptedText = btoa(inputText);
    document.getElementById('encryptOutput').value = encryptedText;
});

document.getElementById('decryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('decryptInput').value;
    const decryptedText = atob(inputText);
    document.getElementById('decryptOutput').value = decryptedText;
});
