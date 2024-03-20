// Write your solution in this file!

// Declare customerName to be bob in global scope
var customerName = "bob";

// Define upperCaseCustomerName function
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Define setBestCustomer function
function setBestCustomer() {
    bestCustomer = "not bob";
}

// Define overwriteBestCustomer function
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

// Define changeLeastFavoriteCustomer function
function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = "not bob";
    leastFavoriteCustomer = "still not bob"; // This will throw an error because you cannot reassign a constant
}
