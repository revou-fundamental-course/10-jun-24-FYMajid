document
  .getElementById("temperatureForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsius = celsiusInput.value.trim();
    var fahrenheit = fahrenheitInput.value.trim();
    var errorDiv = document.getElementById("error");
    var kalkulasiTextarea = document.getElementById("kalkulasi");
    if (errorDiv) {
      errorDiv.remove();
    }

    // Bersihkan textarea cara kalkulasi
    kalkulasiTextarea.value = "";

    if (celsius !== "" && fahrenheit !== "") {
      displayError("Hanya isi salah satu kolom suhu untuk konversi");
      return;
    }

    if (celsius === "" && fahrenheit === "") {
      displayError("Salah satu kolom suhu harus diisi");
      return;
    }

    if (celsius !== "") {
      if (isNaN(celsius)) {
        displayError("Input suhu dalam Celsius harus berupa angka");
        return;
      }
      var convertedFahrenheit = (parseFloat(celsius) * 9) / 5 + 32;
      fahrenheitInput.value = convertedFahrenheit.toFixed(2);
      kalkulasiTextarea.value = `${celsius}°C dikonversi ke Fahrenheit:\n`;
      kalkulasiTextarea.value += `(${celsius} × 9/5) + 32 = ${convertedFahrenheit.toFixed(
        2
      )}°F`;
    } else {
      if (isNaN(fahrenheit)) {
        displayError("Input suhu dalam Fahrenheit harus berupa angka");
        return;
      }
      var convertedCelsius = ((parseFloat(fahrenheit) - 32) * 5) / 9;
      celsiusInput.value = convertedCelsius.toFixed(2);
      kalkulasiTextarea.value = `${fahrenheit}°F dikonversi ke Celsius:\n`;
      kalkulasiTextarea.value += `(${fahrenheit} - 32) × 5/9 = ${convertedCelsius.toFixed(
        2
      )}°C`;
    }
    // celsiusInput.value = "";
    // fahrenheitInput.value = "";
  });

document.getElementById("reverse").addEventListener("click", function () {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  var celsius = celsiusInput.value.trim();
  var fahrenheit = fahrenheitInput.value.trim();
  var kalkulasiTextarea = document.getElementById("caraKalkulasi");
  kalkulasiTextarea.value = "";

  if (celsius !== "" && fahrenheit !== "") {
    displayError("Hanya isi salah satu kolom suhu untuk konversi");
    return;
  }

  if (celsius !== "") {
    if (isNaN(celsius)) {
      displayError("Input suhu dalam Celsius harus berupa angka");
      return;
    }
    var convertedFahrenheit = (parseFloat(celsius) * 9) / 5 + 32;
    fahrenheitInput.value = convertedFahrenheit.toFixed(2);
    kalkulasiTextarea.value = `${celsius}°C dikonversi ke Fahrenheit:\n`;
    kalkulasiTextarea.value += `(${celsius} × 9/5) + 32 = ${convertedFahrenheit.toFixed(
      2
    )}°F`;
  } else {
    if (isNaN(fahrenheit)) {
      displayError("Input suhu dalam Fahrenheit harus berupa angka");
      return;
    }
    var convertedCelsius = ((parseFloat(fahrenheit) - 32) * 5) / 9;
    celsiusInput.value = convertedCelsius.toFixed(2);
    kalkulasiTextarea.value = `${fahrenheit}°F dikonversi ke Celsius:\n`;
    kalkulasiTextarea.value += `(${fahrenheit} - 32) × 5/9 = ${convertedCelsius.toFixed(
      2
    )}°C`;
  }
  //   celsiusInput.value = "";
  //   fahrenheitInput.value = "";
});

document.getElementById("resetButton").addEventListener("click", function () {
  // Reset input field
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("kalkulasi").value = "";

  // Remove existing error or result messages
  var errorDiv = document.getElementById("error");
  if (errorDiv) {
    errorDiv.remove();
  }
  var resultDiv = document.getElementById("fahrenheit");
  resultDiv.textContent = "";
});

function displayError(message) {
  var errorDiv = document.createElement("div");
  errorDiv.id = "error";
  errorDiv.textContent = message;
  document.querySelector(".form-group-celsius").appendChild(errorDiv);
}

function displayResult(fahrenheit) {
  var resultDiv = document.getElementById("fahrenheit");
  resultDiv.textContent = ` ${fahrenheit.toFixed(2)}°F.`;
}
