const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentValue = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    if (value === "C") {
      currentValue = "";
      display.value = "";
    }

    else if (value === "⌫") {
      currentValue = currentValue.slice(0, -1);
      display.value = currentValue;
    }

    else if (value === "=") {
      try {
        currentValue = currentValue
          .replace("×", "*")
          .replace("÷", "/")
          .replace("−", "-");

        display.value = eval(currentValue);
        currentValue = display.value;
      } catch {
        display.value = "Error";
        currentValue = "";
      }
    }

    else {
      currentValue += value;
      display.value = currentValue;
    }
  });
});
