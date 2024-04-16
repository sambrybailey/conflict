// Generate a random integer between min and max (inclusive)
function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random float between min and max
function generateRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

// Generate a random boolean
function generateRandomBoolean() {
    return Math.random() >= 0.5;
}

// Generate a random string of a given length
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Generate a random email
function generateRandomEmail() {
    return Math.round(Math.random() * 100000) + "@email.com";
}

// Generate a random alphanumeric string
function generateRandomAlphanumeric(length) {
    return Math.random().toString(36).slice(-length);
}

// Generate a random date in the future
function generateRandomFutureDate(daysInFuture) {
    const date = new Date();
    date.setDate(date.getDate() + generateRandomInteger(1, daysInFuture));
    return date.toISOString();
}

// Generate a random color
function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Generate a random password
function generateRandomPassword(length) {
    let password = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

// Generate a random element from an array
function generateRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
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
