let calc = document.getElementById("cal");
let op = document.getElementById("output");


function toAppend(num) {
  let nums = document.createTextNode(num);
  
  let operators = ["/", "*", "+", "-"];
  let calcText = calc.textContent;

  if (calcText === "" && ["+","/","*"].includes(num)) {
    // If the 'calc' is empty and the new value is an operator, don't append anything.
    return;
  }

  let lastIndex = calcText.length - 1;
  if (operators.includes(calcText[lastIndex]) && operators.includes(num) && calcText.length>1) {
   
    num=""
    calc.textContent = calcText.slice(0, -1) + num;
  }
  else {
    calc.appendChild(nums);
  }
  calc.appendChild(nums);
  checkOpr();
   if(operators.includes(calcText[0]) && operators.includes(num) && calcText.length<2){
    let a=calc.textContent.slice(0,0)+"-";
    calc.textContent=a
  }
colorOperators()
}

function checkOpr() {
  let ans = calc.textContent;
  let operators = ["/", "*", "+", "-"];
  try{
  if (ans.includes("+") || ans.includes("-") || ans.includes("/") || ans.includes("*")){
    op.textContent = `${eval(ans)}`;
  }
  
  else{
      op.textContent=""
  }
    
  }
  catch(error){}
}

function showAns() {
try{
  let ans = calc.textContent;
  if (ans == "") {
    ans = "";
  } else {
    calc.textContent = `${eval(ans)}`;
    op.textContent = "";
  }}
  catch(error){}
  colorOperators()
};

function clearCalc() {
  calc.textContent = ""
  op.textContent = ""
};

function backspace(){
    let calcs = calc.textContent;
  let array_calc = Array.from(calcs);
  array_calc.pop();
  let str_calc = array_calc.join("").toString();
  calc.textContent = str_calc;
  checkOpr()
  colorOperators()
}
function colorOperators() {
  let operators = ["/", "*", "+", "-"];
  let calcText = calc.textContent;
  let coloredText = '';

  for (let i = 0; i < calcText.length; i++) {
    if (operators.includes(calcText[i])) {
      coloredText += `<span style="color: #3d3af0;">${calcText[i]}</span>`;
    } else {
      coloredText += calcText[i];
    }
  }

  calc.innerHTML = coloredText;
}


