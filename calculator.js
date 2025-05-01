const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (value === "=") {
      try {
        expression = eval(expression).toString();
      } catch (error) {
        expression = "Error";
      }
    } else if (value === "AC") {
      expression = "";
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
    } else {
      expression += value;
    }

    inputBox.value = expression;
  });
});
