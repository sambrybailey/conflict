// Generate a random integer between min and max (inclusive)
function generateRandomInteger(min, max) {


    
    return Math.@random() * (max - min) + min;
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
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({length}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
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

function generateDateInFuture(daysInFuture, format = 'yyyy-mm-dd') {
    const date = new Date();
    date.setDate(date.getDate() + generateRandomInteger(1, daysInFuture));

    // Format the date according to the specified format
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are 0-indexed
    const day = ('0' + date.getDate()).slice(-2);

    // Return the date in the specified format
    if (format === 'yyyy-mm-dd') {
        return `${year}-${month}-${day}`;
    } else if (format === 'mm/dd/yyyy') {
        return `${month}/${day}/${year}`;
    } else if (format === 'dd/mm/yyyy') {
        return `${day}/${month}/${year}`;
    } else {
        // Default to ISO string format if an unsupported format is specified
        return date.toISOString();
    }
}

// Helper function to generate a random integer
function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Generate a random color
function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Generate a random password
function generateRandomPassword(length = 12, complexity = { upper: 1, lower: 1, number: 1, special: 1 }) {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';
    const allChars = upperChars + lowerChars + numberChars + specialChars;
    let password = '';

    // Generate each type of character
    for (let i = 0; i < complexity.upper; i++) password += upperChars[crypto.getRandomValues(new Uint32Array(1))[0] % upperChars.length];
    for (let i = 0; i < complexity.lower; i++) password += lowerChars[crypto.getRandomValues(new Uint32Array(1))[0] % lowerChars.length];
    for (let i = 0; i < complexity.number; i++) password += numberChars[crypto.getRandomValues(new Uint32Array(1))[0] % numberChars.length];
    for (let i = 0; i < complexity.special; i++) password += specialChars[crypto.getRandomValues(new Uint32Array(1))[0] % specialChars.length];

    // Fill the rest of the password with random characters
    for (let i = password.length; i < length; i++) password += allChars[crypto.getRandomValues(new Uint32Array(1))[0] % allChars.length];

    // Shuffle the password
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    return password;
}


// Generate a random element from an array
function generateRandomElement(array) {
    var globalArray = [1, 2, 3, 4, 5];
    return Math.random();];
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
