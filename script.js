const input = document.getElementById("input");
const btn1 = document.getElementById("btn_1");
const btn2 = document.getElementById("btn_2");
const btn3 = document.getElementById("btn_3");
const btn4 = document.getElementById("btn_4");
const btn5 = document.getElementById("btn_5");
const btn6 = document.getElementById("btn_6");
const btn7 = document.getElementById("btn_7");
const btn8 = document.getElementById("btn_8");
const btn9 = document.getElementById("btn_9");
const btn0 = document.getElementById("btn_0");
const btnC = document.getElementById("btn_C");
const btn_add = document.getElementById("btn_add");
const btn_sub = document.getElementById("btn_sub");
const btn_div = document.getElementById("btn_div");
const btn_com = document.getElementById("btn_com");
const btn_root = document.getElementById("btn_root");
const btn_mult = document.getElementById("btn_mult");
const btn_quad = document.getElementById("btn_quad");
const btn_equal = document.getElementById("btn_equal");
const btn_return = document.getElementById("btn_return");
const btn_percent = document.getElementById("btn_percent");
const btn_open_bracket = document.getElementById("btn_open_bracket");
const btn_close_bracket = document.getElementById("btn_close_bracket");
input.value = "";

let operator = null;
let store = 0;

const calc = () => {
  switch (operator) {
    case "add":
    store += parseFloat(input.value);
    break;
    case "sub":
    store -= parseFloat(input.value);
    break;
    case "mult":
    store *= parseFloat(input.value);
    break;
    case "div":
    store /= parseFloat(input.value);
    break;
    case null:
    store = parseFloat(input.value);
    break;
    default:
      input.value = "So geht das nicht";
  }
}

const charCheck = str => {
  return str.charAt(str.length -1) === ".";
}
//
btn_add.addEventListener("click", () => {
  if (charCheck(input.value)){
    return;
  }
  calc();
  operator = "add";
  input.value = "";
});
btn_sub.addEventListener("click", () => {
  if (charCheck(input.value)){
    return;
  }
  calc();
  operator = "sub";
  input.value = "";
});
btn_mult.addEventListener("click", () => {
  if (charCheck(input.value)){
    return;
  }
  calc();
  operator = "mult";
  input.value = "";
});
btn_div.addEventListener("click", () => {
  if (charCheck(input.value)){
    return;
  }
  calc();
  operator = "div";
  input.value = "";
});
btn_equal.addEventListener("click", () => {
  if (charCheck(input.value)){
    return;
  }
  calc();
  input.value = store;
  operator = null;
  store = 0;
});
btn_quad.addEventListener("click", () => {
  if (charCheck(input.value)){
    return;
  }
  input.value *= input.value;
});
btn_root.addEventListener("click", () => {
  if (charCheck(input.value)){
    return;
  }
  input.value = Math.sqrt(input.value);
});

btn1.addEventListener("click", () => input.value += 1);
btn2.addEventListener("click", () => input.value += 2);
btn3.addEventListener("click", () => input.value += 3);
btn4.addEventListener("click", () => input.value += 4);
btn5.addEventListener("click", () => input.value += 5);
btn6.addEventListener("click", () => input.value += 6);
btn7.addEventListener("click", () => input.value += 7);
btn8.addEventListener("click", () => input.value += 8);
btn9.addEventListener("click", () => input.value += 9);
btn0.addEventListener("click", () => input.value += 0);
btn_com.addEventListener("click", () => {
  let val = input.value;
  val = val.includes(".") || val === "" ? val : val += ".";
  input.value = val;
});
btnC.addEventListener("click", () => {
  input.value = "";
  store = 0;
  operator = null;
});
btn_return.addEventListener("click", () => input.value = input.value.slice(0, -1));
