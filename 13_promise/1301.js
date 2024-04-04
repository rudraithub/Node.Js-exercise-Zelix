function getData() {
    return new Promise((resolve, reject) => {
      const data = [
        { name: "Item 1", value: 10 },
        { name: "Item 2", value: 20 },
        { name: "Item 3", value: 30 },
      ];
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
  getData()
    .then((data) => {
      console.log("Data retrieved:", data);
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
    });  