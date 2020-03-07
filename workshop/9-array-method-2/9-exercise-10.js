// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A
// =100 is A+ (added by Rony)

// Write function here

function grades(results) {
    let letterGrades = [];
    for (let i = 0; i < results.length; ++i) {
        if (results[i] < 60) {
            letterGrades[i] = "F";
        }
        else if (results[i] < 70) {
            letterGrades[i] = "D";
        }
        else if (results[i] < 80) {
            letterGrades[i] = "C";
        }
        else if (results[i] < 90) {
            letterGrades[i] = "B";
        }
        else if (results[i] < 100) {
            letterGrades[i] = "A";
        }
        else if (results[i] === 100) {
            letterGrades[i] = "A+";
        }
    }
    
    return letterGrades;
}

console.log(grades([48, 95, 65, 48, 59, 78, 72, 65]));

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


