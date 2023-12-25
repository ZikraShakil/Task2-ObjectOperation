// Define a car object
const car1 = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022
  };
  
  // Define another car object
  const car2 = {
    color: 'Blue',
    fuelType: 'Petrol'
  };
  
  // Function to merge two car objects
  function mergeCars(carA, carB) {
    return { ...carA, ...carB };
  }
  
  // Merge the two car objects
  const mergedCar = mergeCars(car1, car2);
  
  // Display the merged car object in the console
  console.log(mergedCar);
  