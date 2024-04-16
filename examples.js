// 1. Basic Syntax and Variables
function basicSyntax() {
    let name = "John Doe";
    const age = 30;
    console.log("Hello, " + name + "! You are " + age + " years old.");
}

// 2. Conditional Statements
function conditionalStatements() {
    let temperature = 25;
    if (temperature < 0) {
        console.log("It's freezing!");
    } else if (temperature < 20) {
        console.log("It's cold.");
    } else if (temperature < 30) {
        console.log("It's mild.");
    } else {
        console.log("It's hot!");
    }
}

// 3. Loops
function loops() {
    // For loop
    for (let i = 0; i < 5; i++) {
        console.log("Iteration " + i);
    }

    // While loop
    let count = 0;
    while (count < 5) {
        console.log("Count: " + count);
        count++;
    }
}

// 4. Functions
function functions() {
    function greet(name) {
        console.log("Hello, " + name + "!");
    }

    greet("Alice");
    greet("Bob");
}

// 5. Asynchronous Programming with Promises
function asyncProgramming() {
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched successfully!");
            }, 2000);
        });
    }

    fetchData().then(data => {
        console.log(data);
    }).catch(error => {
        console.error("Error fetching data:", error);
    });
}

// Call all functions to practice
basicSyntax();
conditionalStatements();
loops();
functions();
asyncProgramming();
