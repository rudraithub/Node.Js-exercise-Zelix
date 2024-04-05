async function performMultiplication() {
    try {
      const num1 = 12;
      const num2 = 5;
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      const product = num1 * num2;
  
      console.log("The product is:", product);
    } catch (error) {
      console.error("Error during multiplication:", error);
    }
  }
  
  performMultiplication();