const vehiclePrototype = {
    greet() {
      console.log("Hello from the vehicle!");
    },
  };
  
  const myVehicle = Object.create(vehiclePrototype, {
    make: {
      value: "Toyota",
      writable: true, 
      enumerable: true, 
    },
    model: { value: "Camry" },
    year: { value: 2022 },
    wheels: { value: 4 },
  });
  
  console.log(myVehicle);
  