const result = document.getElementById("result");
const btn = document.getElementById("btn");
const buttons = document.getElementsByTagName("button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.currentTarget.textContent === ",") {
      if (result.textContent.includes(",") === false) {
        result.textContent += ".";
      }
    } else if (result.textContent === "0") {
      result.textContent = event.currentTarget.textContent;
    } else {
      result.textContent += event.currentTarget.textContent;
    }
    if (event.currentTarget.textContent === "%") {
      if (result.textContent.includes("%")) {
        const calc = result.textContent;
        const nums = parseInt(calc);
        result.textContent = nums / 100;
      }
    }
    if (event.currentTarget.textContent === "+/-") {
      if (result.textContent.includes("+/-")) {
        const calc = result.textContent;
        const nums = parseInt(calc);
        if (nums > 0) {
          const positive = nums * -1;
          result.textContent = positive;
        } else {
        }
      }
    }
    if (event.currentTarget.textContent === "=") {
      if (result.textContent.includes("+")) {
        const calc = result.textContent.slice(0, -1).split("+");
        const nums = calc.map((num) => parseInt(num));
        const sum = nums.reduce(function (totals, number) {
          return totals + number;
        });
        result.textContent = sum;
      }
      if (result.textContent.includes("-")) {
        const calc = result.textContent.slice(0, -1).split("-");
        const nums = calc.map((num) => parseInt(num));
        const sum = nums.reduce(function (totals, number) {
          return totals - number;
        });
        result.textContent = sum;
      }
      if (result.textContent.includes("x")) {
        const calc = result.textContent.slice(0, -1).split("x");
        const nums = calc.map((num) => parseInt(num));
        const sum = nums.reduce(function (totals, number) {
          return totals * number;
        });
        result.textContent = sum;
      }
      if (result.textContent.includes("÷")) {
        const calc = result.textContent.slice(0, -1).split("÷");
        const nums = calc.map((num) => parseInt(num));
        const sum = nums.reduce(function (totals, number) {
          return totals / number;
        });
        result.textContent = sum;
      }
    }
    if (event.currentTarget.textContent === "AC") {
      result.textContent = "0";
    }
  });
});
