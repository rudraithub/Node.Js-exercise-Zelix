
function calculateSalary(basicSalary) {
    // Validate input (optional but recommended)
    if (typeof basicSalary !== 'number' || basicSalary <= 0) {
      throw new Error('Invalid basic salary. Please enter a positive number.');
    }
  
    const ta = basicSalary * 0.1; 
    const da = basicSalary * 0.07; 
    const pf = basicSalary * 0.12; 
  
    const grossSalary = basicSalary + ta + da; 
  
    console.log("Basic Salary:", basicSalary.toFixed(2)); 
    console.log("TA (10%):", ta.toFixed(2));
    console.log("DA (7%):", da.toFixed(2));
    console.log("PF (12%):", pf.toFixed(2));
    console.log("Total Salary:", grossSalary.toFixed(2));
  }
  
  // Test data (you can change this value)
  const basicSalary = 50000.0;
  
//   try {
//     calculateSalary(basicSalary);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
  