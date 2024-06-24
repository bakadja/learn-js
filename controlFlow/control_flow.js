let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);  // Access Level: Full access granted

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage); // User Message: Welcome, Admin!

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory); // User Category: Subscriber

/**
 * 
 * Case "admin":

    If userType is "admin", userCategory is assigned as "Administrator".
    break; exits the switch statement after the assignment.

    Default Case:

    If userType doesn't match any defined cases ("admin", "manager", or "subscriber"), userCategory is assigned as "Unknown".

 */

    let isAuthenticated = true;
    let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

    console.log("Authentication Status:", authenticationStatus); // Authentication Status: Authenticated