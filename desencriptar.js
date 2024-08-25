function decryptMessage() {
    const message = document.getElementById('message').value;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const substitution = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let result = '';

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        const index = substitution.indexOf(char);

        if (index !== -1) {
            result += alphabet[index];
        } else {
            result += char;
        }
    }

    document.getElementById('result').value = result;
}
