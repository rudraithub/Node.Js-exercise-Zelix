async function performSubtraction() {
    try {
      const num1 = 48;
      const num2 = 17;
      const difference = await fetchSubtractionData(num1, num2);
  
      console.log("The difference is:", difference);
    } catch (error) {
      console.error("Error during subtraction:", error);
    }
  }
  async function fetchSubtractionData(num1, num2) {
    return new Promise((resolve) => setTimeout(() => resolve(num1 - num2), 1000));
  }
  
  performSubtraction();
  