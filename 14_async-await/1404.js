async function performDivision() {
    try {
      const numerator = 72;
      const denominator = 8;
      const isValid = await validateDivision(denominator);
  
      if (!isValid) {
        throw new Error("Division by zero is not allowed");
      }
  
      const quotient = numerator / denominator;
  
      console.log("The quotient is:", quotient);
    } catch (error) {
      console.error("Error during division:", error.message);
    }
  }
  async function validateDivision(denominator) {
    return new Promise((resolve) => setTimeout(() => resolve(denominator !== 0), 1000));
  }
  
  performDivision();