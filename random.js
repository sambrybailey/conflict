function generateRandomInteger(min, max) {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const random = Math.random();
    // Scale the random number to the desired range
    const scaled = random * (max - min + 1);
    // Convert the scaled number to an integer
    const integer = Math.floor(scaled);
    // Shift the integer to the desired range
    return integer + min;
}


function generateRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

// Generate a random boolean
function generateRandomBoolean() {
    return Math.random() >= 0.5;
}


function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    const result = new Array(length);

    for (let i = 0; i < length; i++) {
        result[i] = characters[Math.floor(Math.random() * charactersLength)];
    }

    return result.join('');
}


// Generate a random email
function generateRandomEmail() {
    const localPart = Math.random().toString(36).substring(2, 12); // Generates a random string of 10 characters
    return localPart + "@email.com";
}

// Generate a random alphanumeric string
function generateRandomAlphanumeric(length) {
    return Math.random().toString(36).slice(-length);
}

// Generate a random date in the future
function generateRandomFutureDate(daysInFuture) {
    const date = new Date();
    const randomDays = Math.floor(Math.random() * daysInFuture) + 1; // Ensure the date is always in the future
    date.setDate(date.getDate() + randomDays);
    return date;
}

// Generate a random color
function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'.split('');
    let password = '';
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
        password += characters[array[i] % characters.length];
    }
    return password;
}

function generateRandomElement(array) {
    const arrayLength = array.length;
    return array[Math.floor(Math.random() * arrayLength)];
}


// Example usage
console.log(generateRandomInteger(1, 100));
console.log(generateRandomFloat(0, 1));
console.log(generateRandomBoolean());
console.log(generateRandomString(10));
console.log(generateRandomEmail());
console.log(generateRandomAlphanumeric(8));
console.log(generateRandomFutureDate(30));
console.log(generateRandomColor());
console.log(generateRandomPassword(10));
console.log(generateRandomElement(['apple', 'banana', 'cherry']));
