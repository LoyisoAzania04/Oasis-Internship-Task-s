
const convertToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
};

const convertToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9;
};

const convertToKelvin = (celsius) => {
  return celsius + 273.15;
};

const temperature = () => {
  const unit = document.querySelector("#unit").value;
  const value = parseFloat(document.querySelector(".takval").value);

  if (isNaN(value)) {
      document.querySelector(".value").textContent = "Please enter a valid number";
      return;
  }

  let result;
  if (unit === "Celsius") {
      result = convertToFahrenheit(value).toFixed(2) + " F";
  } else if (unit === "Fahrenheit") {
      result = convertToCelsius(value).toFixed(2) + " °C";
  } else if (unit === "kelvin") {
      result = convertToKelvin(value).toFixed(2) + " K";
  }
  document.querySelector(".value").textContent =  result;
};