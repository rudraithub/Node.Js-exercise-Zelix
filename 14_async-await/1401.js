async function performAddition() {
    try {
      const num1 = 25;
      const num2 = 37;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const sum = num1 + num2;
      console.log("The sum is:", sum);
    } catch (error) {
      console.error("Error during addition:", error);
    }
  }
  
  performAddition();
  