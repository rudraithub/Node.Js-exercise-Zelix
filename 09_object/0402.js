var person1 = {
    name: "John Doe",
    age: 25,
    city: "Example City"
  };
  var details = {
    occupation: "Software Engineer",
    hobbies: ["Reading", "Coding"]
  };
  Object.assign(person, details);
  console.log("Merged Person Object:", person);