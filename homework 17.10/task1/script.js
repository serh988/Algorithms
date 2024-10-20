const forge = require('node-forge');

// Функция для генерации пары ключей RSA
function generateRSAKeyPair() {
    const rsa = forge.pki.rsa;
    // Генерация пары ключей с длиной 2048 бит
    const keypair = rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
    
    // Получение публичного ключа в формате PEM
    const publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);
    console.log("Публичный ключ RSA:");
    console.log(publicKeyPem);

    // (Опционально) Вы можете также сохранить приватный ключ, если нужно
    const privateKeyPem = forge.pki.privateKeyToPem(keypair.privateKey);
    console.log("Приватный ключ RSA:");
    console.log(privateKeyPem);
}

// Вызов функции генерации ключей
generateRSAKeyPair();


// Генерация публичного ключа RSA с использованием библиотеки node-forge
// Длина ключа: 2048 бит, экспонента: 65537 (0x10001) — стандартный выбор для RSA
// Публичный ключ выводится в формате PEM, который используется для обмена ключами
// Приватный ключ также выводится (опционально), чтобы показать полный процесс генерации ключей
