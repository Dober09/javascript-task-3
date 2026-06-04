const studentDatabase = [
    { id: 1, firstName: "Teboho", lastName: "Mokwena", email: "teboho@stoic.edu", course: "Philosophy", age: 40 },
    { id: 2, firstName: "Palesa", lastName: "Mofokeng", email: "palesa@computing.org", course: "Computer Science", age: 28 },
    { id: 3, firstName: "Alan", lastName: "Turing", email: "alan@enigma.net", course: "Mathematics", age: 32 }
]
    

function renderLogToUI(message, isHeader = false) {
    const logConsole = document.getElementById("logConsole");
    if (logConsole) {
        const div = document.createElement("div");
        div.className = "log-line";
        if (isHeader) div.style.fontWeight = "bold";
        div.textContent = message;
        logConsole.appendChild(div);
    }
}

//Question 1: Synchronous JavaScript Execution Pattern
function executeSynchronousFlow() {
    console.log("--- Question 1: Starting Sync Flow ---");
    
    
    console.log("1. Step-1 The function is starting");
    renderLogToUI("1. Step-1 The function is starting");

    console.log("2. Step-2 The Process is in action");
    renderLogToUI("2. Step-2 The Process is in action");

    console.log("3. Step-3-The function reached the final stage");
    renderLogToUI("3. Step-3-The function reached the final stage");
}

// Helper: promise-based delay using setTimeout
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Question 2: Using async/await + setTimeout
async function executeAsynchronousFetch() {
    const delayDuration = 3000; // 3 seconds

    console.log(`--- Question 2: Async Fetch Triggered (${delayDuration}ms delay) ---`);
    
    await delay(delayDuration);

    console.log("--- Retrieving Student Data Records ---");
    renderLogToUI("--- Delayed Database Query Output (3s) ---", true);

    studentDatabase.forEach(student => {
        const outputString = `ID: ${student.id} | Name: ${student.firstName} ${student.lastName} | Email: ${student.email} | Course: ${student.course} | Age: ${student.age}`;
        console.log(outputString);
        renderLogToUI(outputString);
    });
}

// executeSynchronousFlow, DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    executeSynchronousFlow();
    executeAsynchronousFetch(); 
});