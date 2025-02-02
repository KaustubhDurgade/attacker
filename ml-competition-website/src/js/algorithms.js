function encrypt(message, key) {
    let encrypted = '';
    for (let i = 0; i < message.length; i++) {
        encrypted += String.fromCharCode(message.charCodeAt(i) ^ key);
    }
    return encrypted;
}

function decrypt(encryptedMessage, key) {
    let decrypted = '';
    for (let i = 0; i < encryptedMessage.length; i++) {
        decrypted += String.fromCharCode(encryptedMessage.charCodeAt(i) ^ key);
    }
    return decrypted;
}

function infiltrator(message) {
    const key = Math.floor(Math.random() * 256);
    const encryptedMessage = encrypt(message, key);
    return { encryptedMessage, key };
}

function protector(encryptedMessage, key) {
    const decryptedMessage = decrypt(encryptedMessage, key);
    return decryptedMessage;
}

function simulateCompetition(message) {
    const { encryptedMessage, key } = infiltrator(message);
    const decryptedMessage = protector(encryptedMessage, key);
    return {
        original: message,
        encrypted: encryptedMessage,
        decrypted: decryptedMessage,
        success: message === decryptedMessage
    };
}