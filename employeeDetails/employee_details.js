const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: "Javascript" },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: "Python" },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: "Java" },
    { id: 4, name: 'Catherine Brown', age: 40, department: 'Marketing', salary: 55000, specialization: "SEO" },
    { id: 5, name: 'David Wilson', age: 32, department: 'IT', salary: 52000, specialization: "React" },
    { id: 6, name: 'Emily Davis', age: 29, department: 'HR', salary: 47000, specialization: "Recruitment" },
    { id: 7, name: 'Frank Harris', age: 45, department: 'Finance', salary: 65000, specialization: "Accounting" },
    { id: 8, name: 'Grace Lee', age: 27, department: 'IT', salary: 48000, specialization: "Node.js" },
    { id: 9, name: 'Henry Martin', age: 38, department: 'Sales', salary: 59000, specialization: "Salesforce" },
    { id: 10, name: 'Isabella Taylor', age: 31, department: 'Customer Service', salary: 46000, specialization: "Support" }
];



// Function to display all employees
function displayEmployees() {
    console.log("employees", employees);
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;

}


function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}


function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}


function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
}

function findEmployeeBySpecialization (specialization) {
    
    const foundEmployee = employees.find(employee => employee.specialization === specialization);
    if(foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.specialization}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this Specialization';

    }
}